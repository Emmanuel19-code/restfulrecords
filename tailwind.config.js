/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        roboto: ["Roboto"],
      },
      colors: {
        lightPink: "#fdfbfb",
        brown: "#b18f5e",
        darkPurple: "#382560",
        beige: "#c4b3a8",
        customLightPink: "#e9ddd7",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
