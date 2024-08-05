/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:
      {
        'wig': 'bounce 1.5s infinite',  
      },
      colors:
      {
        purple: "#180161",
        orange:"#FB773C",
        lightpurple:"#4F1787",
        white:"#FFF8F3",
        Red:"#b91c1c",
        red:"#EB3678" 
      }
      // colors:
      // {
      //   purple: "#6499E9",
      //   orange:"#FB773C",
      //   lightpurple:"#4F1787",
      //   white:"#FFF8F3",
      //   red:"#9EDDFF" 
      // }

    },
    
  },
  plugins: [],
}