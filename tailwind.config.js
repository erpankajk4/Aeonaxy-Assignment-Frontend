/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4479FF",
        bgPaleWhite: "#FFFFFF",
        bgSky: "#BCDFFF",
      },
    },
  },
  plugins: [],
};
