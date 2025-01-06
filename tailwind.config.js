/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"], 
        body: ["Inter", "sans-serif"], 
      },
      colors:{
        primary:"#e0372c",
        secondary:"#eab71a"
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"

        },
        animation: {
          fadeIn: "fadeIn 2s ease-in-out",
          scroll: "scroll 30s linear infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          scroll: {
            "0%": { transform: "translateX(100%)" }, 
            "100%": { transform: "translateX(-100%)" }, 
          },
        },
      
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
