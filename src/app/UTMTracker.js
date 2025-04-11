'use client';

import { useEffect } from 'react';
import { track } from '../lib/mixpanel';

export default function UTMTracker() {
  useEffect(() => {
    // ✅ Deduplication: skip if already tracked in this session
    if (typeof window === 'undefined' || sessionStorage.getItem('website-visit-tracked')) {
      return;
    }   

    const params = new URLSearchParams(window.location.search);
    const campaign = params.get('c');

    // Collect any utm_* params directly from the URL
    const urlUTMs = {};
    for (const [key, value] of params.entries()) {
      if (key.startsWith('utm_')) {
        urlUTMs[key] = value;
      }
    }

    const fetchAndTrack = async () => {
      let utmsFromSheet = {};

      // ✅ 1. Load from sheet if ?c= is present
      if (campaign) {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxk9zAhYA3IvD1PvEk56jD_F7DU08RKumCd0Re_rJA2FWpjLmBfKLvRGuzRouxA8aF_iSuuNtYDVFr/pub?output=csv'; // replace with your sheet
        try {
          const res = await fetch(csvUrl);
          const text = await res.text();

          const rows = text.split('\n').map((r) => r.split(','));
          const headers = rows[0];
          const data = rows.slice(1);

          const match = data.find(
            (row) => row[0]?.trim().toLowerCase() === campaign.toLowerCase()
          );

          if (match) {
            headers.forEach((key, i) => {
              utmsFromSheet[key.trim()] = match[i]?.trim();
            });
          }
        } catch (err) {
          console.error('Error fetching UTM data from sheet:', err);
        }
      }

      // ✅ 2. Merge URL UTM > Sheet UTM (override)
      const finalUTMs = { ...utmsFromSheet, ...urlUTMs };

      // ✅ 3. Metadata
      const meta = {
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
      };
      if (campaign) {
        meta.campaign_slug = campaign;
      }

      // ✅ 4. Add geo info
      try {
        const geo = await fetch('https://ipapi.co/json/').then((res) => res.json());
        const fullData = {
          ...finalUTMs,
          ...meta,
          ip: geo.ip,
          city: geo.city,
          region: geo.region,
          country: geo.country_name,
          org: geo.org,
        };

        track('Website Visit', fullData);
        sessionStorage.setItem('website-visit-tracked', '1');
      } catch (err) {
        track('Website Visit', {
          ...finalUTMs,
          ...meta,
        });
        sessionStorage.setItem('website-visit-tracked', '1');
      }
    };

    fetchAndTrack();
  }, []);

  return null;
}
