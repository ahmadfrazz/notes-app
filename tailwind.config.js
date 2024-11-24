/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px -1px 1px rgba(136, 116, 89, 0.05), 0px 1px 2px -0.5px rgba(136, 116, 89, 0.1), 0px 2px 4px -1px rgba(136, 116, 89, 0.2), 0px 4px 8px -2px rgba(136, 116, 89, 0.2), 0px 16px 32px -8px rgba(136, 116, 89, 0.2)",
        note: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
      },
      fontFamily: {
        sfpro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
