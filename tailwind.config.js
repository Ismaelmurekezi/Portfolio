/** @type {import('tailwindcss').Config} */
export default{
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
