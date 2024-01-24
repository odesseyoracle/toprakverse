/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': "Big Shoulders Display",
    extend: {
      colors: {
        primary: "#FEE4C1",
        secondary: "#A8BCB0",
        tertiary: "#FFB8A2",
      },
    },
  },
  plugins: [],
},
};
