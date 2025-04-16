// src/lib/mixpanel.js


import mixpanel from 'mixpanel-browser';

export const initMixpanel = () => {
  if (!mixpanel.__initialized) {
    mixpanel.init('be26096e9b48d55acd9842eb6c07de27', {
        debug: process.env.NODE_ENV !== 'production',
        track_pageview: false,
        persistence: "localStorage"
    });
    mixpanel.__initialized = true;
  }
};

export const track = (event, props = {}) => {
  initMixpanel();
  mixpanel.track(event, props);
};

export const identify = (userId) => {
  initMixpanel();
  mixpanel.identify(userId);
};

export const setProfile = (props = {}) => {
  initMixpanel();
  mixpanel.people.set(props);
};
