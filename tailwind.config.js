/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cardShadow:
          "rgba(255, 94, 0, 0.4) -5px 5px, rgba(255, 94, 0, 0.3) -10px 10px, rgba(204, 48, 0, 0.2) -15px 15px, rgba(204, 48, 0, 0.1) -20px 20px, rgba(204, 48, 0, 0.05) -25px 25px",
      },

      fontFamily: {
        arapey: ["Arapey"],
      },
      keyframes: {
        bgAnimation: {},
      },
      colors: {
        whiteGreen: "rgba(255, 255, 255, 0.7)",
        greenTouch: "rgba(167, 243, 208, 0.02)",
        borderColor: "#ea580c",
        background1: "#42b883",
        text1: "#173B45",
        button1: "#347474",
        button2: "#ea580c",
        background: "#EDF1D6",
        warmBeige: "#F2EFE9",
        lightGreen: "#9DC08B",
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
        darkMintGreen: "#95E2A2",
        paleMintGreen: "#CCE6CC",
        darkGreen: " #003300",
        lavender: "#D9CCE6",
        darkSlateGray: "#2F4F4F",
        lightPurple: "#333333",
      },
    },
  },
  plugins: [],
};
