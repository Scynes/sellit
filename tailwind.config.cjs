/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["filson-soft", "sans-serif"],
      serif: ["phoreuscherokee", "serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
