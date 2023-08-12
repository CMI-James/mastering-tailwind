/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s infinite steps(34)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "80%": {
            width: "34ch",
          },
          "100%": {
            width: "34ch",
          },
        },
      },
    },
  },
  plugins: [],
};
