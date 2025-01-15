// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      // colors
      colors: {
        primary: "#FFBC13",
        secondary: "#212121",
      },

      //font family
      fontFamily: {
        primary: ['"SFPro", sans-serif'], 
        accent: ['"SFRounded", sans-serif'],
      },

      // font sizes
      fontSize: {
        h1: "40px",
        h2: "35px",
        h3: "28px",
        h4: "14px",
        text1: "12px",
        text2: "10px",
      },

      // font weight
      fontWeight: {
        b5: "500",
        b6: "600",
        b7: "700",
      },
    },
    plugins: [],
  },
};
