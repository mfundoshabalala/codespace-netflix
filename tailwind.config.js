/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      container: {
        padding: "2em",
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
