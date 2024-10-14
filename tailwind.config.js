/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        instagram:
          "linear-gradient(to right, #F58529, #DD2A7B, #8134AF, #515BD4, #3B5998)",
      },
      boxShadow: {
        "3xl": "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#2d3b80",
        lightblue: "#264697",
        lightgreen: "#0f9f51",
        secondary: "#06532c",
        skyblue: "#e4f3ff",
        bluelightest: "#a5d8ff",
        linkedin: "#0077b5",
        youtube: "#FF0000",
        infobg: "#23418c",
        bgclr: "#e4f3ff",
      },
      contactShadow: {
        "fancy-shadow":
          "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
      },
    },
  },
  plugins: [],
};
