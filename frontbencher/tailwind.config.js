/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:
      {
        'orange': '#D64A3D',
        'deep-blue': '#01153C',
        'white': '#F6F6F6',
        'gray': '#888888'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
      }
    },

  },
  plugins: [],
};