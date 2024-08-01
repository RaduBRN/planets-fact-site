/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkblue: "#070724",
        darkgray: "#38384F",
        lightgray: "#838391",
        skyblue: "#419EBB",
        gold: "#EDA249",
        purple: "#6F2ED6",
        redorange: "#D14C32",
        crimson: "#D83A34",
        darkorange: "#CD5120",
        teal: "#1EC2A4",
        blue: "#2D68F0",
      },
    },
  },
  plugins: [],
};
