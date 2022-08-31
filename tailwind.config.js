/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screeens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        textColor: "#ad121b",
        textColor2: "grey",
        color3: "#181717",
        bgColor: "#333",
        bgColor2: '#1b1b1b'
      },
      backgroundImage: {
        bkgd: "url('/images/img7.jpeg')",
        bkgd2: "url('/images/img5.jpeg')"
      }
    },
  },
  plugins: [],
}
