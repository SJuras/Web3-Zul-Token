module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        starduster: ["Starduster", "sans-serif"],
      },
      colors: {
        customWhite: '#f7f3ed',
        customRed: '#db262f',
        customLightRed: '#df5158',
        customDark: '#14353a',
        customLightBlue: '#97b5b2',
        customBlack: '#1d2021',
      },
    },
  },
  plugins: [],
}
