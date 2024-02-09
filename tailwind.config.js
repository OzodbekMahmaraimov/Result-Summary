/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      box1: "2rem",
      summaryR: "0.5rem",
    },
    extend: {
      boxShadow: {
        boxShadow:
          "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; transfer this box-shadow to tailwind css",
      },
      width: {
        summary: "80%",
        boxWidth: "23rem",
      },
      height: {
        boxHeight: "27rem",
      },
      colors: {
        boxTop: "#6541FD",
        boxBottom: "#342EEA",
        back: "#bde0fe",
        boxBack: "#fca311",
        reaction: "rgb(255,246,245)",
        memory: "rgb(255,251,242)",
        verbal: "rgb(242,251,250)",
        visual: "rgb(243,243,253) ",
        tugma: "#303B59",
        aylanaTop: "rgb(74,36,207)",
        aylanaBottom: "rgb(69,51,235)",
        textColor: "#D0C2FF",
      },
    },
  },
  plugins: [],
};
