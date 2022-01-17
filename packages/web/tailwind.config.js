module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        backgroundSecondary: "#1F2A37",
        primary: "#111827",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
