"use client";

import { useEffect } from 'react';

const UTMTracker = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.mixpanel.init('be26096e9b48d55acd9842eb6c07de27', {
      debug: true,
      track_pageview: false,
    });
    
    // Extract UTM parameters from URL
    const params = new URLSearchParams(window.location.search);
    const utms = {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
    };

    window.mixpanel.track('website_visit', utms);

    // Initialize HubSpot queue if it doesn't exist
    window._hsq = window._hsq || [];

    // Optional: Track page view (HubSpot usually does this automatically)
    window._hsq.push(['trackPageView']);

    // Push custom UTM tracking event
    window._hsq.push([
      'trackEvent',
      {
        id: 'utm_capture',
        value: 1,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
        utm_term: utms.utm_term,
        utm_content: utms.utm_content,
      },
    ]);
  }, []);

  return null; // This is a headless component
};

export default UTMTracker;
