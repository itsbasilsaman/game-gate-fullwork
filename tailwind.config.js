/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '490px',  // Adjusted small breakpoint
        md: '680px',  // Adjusted medium breakpoint
        lg: '991px', // Adjusted large breakpoint
        extralg : '1345px',
        xl: '1400px', // Adjusted extra-large breakpoint
      },
    },
  },
  plugins: [],
};
