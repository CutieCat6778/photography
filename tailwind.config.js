/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': "#F2EFE5",
      "black": "#141415",
      "dim-gray": "#141415",
      "gray": "#141415",
      "light-gray": "#C7C8CC"
    }
  },
  plugins: [],
}

