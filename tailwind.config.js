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
        warmBeige: "#F2EFE9",
        lightGreen: "#9DC08B",
        green: "#609966",
        darkGreen: "#40513B",
        color2: "#171720",
        color3: "#23232A",
        color4: "#313137",
        teal: "#008080",
        gray1: "#C0C0C0",
        neongreen: "#39FF14",
        neonpink: "#FF6EC7",
        neonorange: "#FFA500",
        brightblue: "#00BFFF",
        gold: "#FFD700",
        red: "#FF0000",
        purple: "#800080",
        navyBlue: "#000080",
        burgundry: "#800020",
        forestGreen: "#228B22",
        paleGreen: "#E6F2D2",
        bisque: "#F6EFD9",
        mutedLavender: " #E6E6F5 ",
        mintGreen: "#BDFCC9",
        darkGreen: " #003300",
      },
    },
  },
  plugins: [],
};
