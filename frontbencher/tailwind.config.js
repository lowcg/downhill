/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        
      },
    },
    
    extend: {
      screens:{
        "lg":"1025px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        secondary: "#e1ad01",
        "secondary-light": "#FBF9EF",
        orange: "#e1ad01", //'#D64A3D',
        "deep-blue": "#01153C",
        white: "#F6F6F6",
        gray: "#888888",
        "pure-white": "#FFFFFF",
        "border":"#E4E4E7",
        // #e6e9f0
        "border-color":"#E4E4E7",
        "box-shadow":"#DFE0DC",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        geist: ["geist", "sans-serif"],
        geistBlack: ["GeistBlack", "sans-serif"],
        geistRegular: ["GeistRegular", "sans-serif"],
        geistMedium: ["GeistMedium", "sans-serif"],
        geistSemiBold: ["GeistSemiBold", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};