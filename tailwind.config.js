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
      },
      colors: {
        primary: "#C8A976",
        primaryHover: "#d2b17d",
        whiteHover: "#d3d3d3",
      },
      margin: {
        "sm": "15px 0 0 0",
        "md": "30px 0 0 0",
        "lg": "70px 0 0 0",
        "xl": "100px 0 0 0"
      }
    },
  },
  plugins: [],
};
