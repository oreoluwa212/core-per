/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blur": "0 6px 20px 8px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#111111",
        joinInBg: "#0E0E0E",
        footerBg: "#313233",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lgsx: "990px",
        lg: "1200px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
