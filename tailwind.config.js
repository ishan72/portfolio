/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arapey: ["Arapey"],
      },
      colors: {
        background: "#EDF1D6",
        lightGreen: "#9DC08B",
        green: "#609966",
        darkGreen: "#40513B",
        color2: "#171720",
        color3: "#23232A",
        color4: "#313137",
      },
    },
  },
  plugins: [],
};
