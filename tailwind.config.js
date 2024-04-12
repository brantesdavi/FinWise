/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        "offWhite": "#EFEEF9",
        "offBlack": "#232b2b",
        "lightOffWhite": "#D8D8D8",
        "finPurple": "#7F15F4",
        "secondPurple": "#1F1629",
      }
    },
  },
  plugins: [],
}

