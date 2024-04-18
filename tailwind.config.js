/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        "offWhite": "#EFEEF9",
        "lightOffWhite": "#D8D8D8",

        "finPurple": "#7F15F4",
        "secondPurple": "#1F1629",
        "offBlack": "#181818",
        "offBlack_2": "#202020",
        "deactivatedText": "#ACACAC"

      }
    },
  },
  plugins: [],
}

