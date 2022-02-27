module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ["AvenueX", "mono"],
      sans: ["NTDapper", "sans-serif"],
    },
    extend: {
      colors: {
        brightBlue: "#00FFFF",
        brightGreen: "#45FEC4",
        lightGrey: "#E5E5E5",
        brightYellow: "#FDFF2D",
        brightOrange: "#FFAA00",
        bidGray: "#1B1B1B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
