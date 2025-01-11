/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF6E9",
          150: "#FFF1D4",
          200: "#EE7F09",
          250: "#FFBB00",
        },
        secondary: "#252525",
        crimson: "#EE092D",
      },
      fontFamily: {
        title: ["Comfortaa", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
        cta: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
