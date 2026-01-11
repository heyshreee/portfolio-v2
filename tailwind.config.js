/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "background-light": "#f8fafc",
        "background-dark": "#0c0c0c",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle, rgba(37, 99, 235, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
