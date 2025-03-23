/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE601B',
        secondary: '#3D3576',
        crimson: '#EE092D',
      },
      fontFamily: {
        title: ['Comfortaa', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        cta: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
