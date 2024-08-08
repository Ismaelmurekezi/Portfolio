/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Secondary: "#0B0A28",
        primary: "#20ECD3",
        lightdark: "#04162C",
        dark_blue: "#100F3D",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
