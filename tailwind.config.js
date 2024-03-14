/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
        raleway: "Raleway",
      },
      animation: {
        custom_Fade_slide_up:'fade-slide-up 0.3s ease-out forwards'
      }
    },
  },
  plugins: [],
}

