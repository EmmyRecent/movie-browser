/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1F242D",
        "color-secondary": "#00EEFF",
        "dark-text": "#000",
        "light-text": "#fff",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "50px",
      },
    },
  },

  plugins: [],
};
