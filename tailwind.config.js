/** @type {import('tailwindcss').Config} */
module.exports = {
  node: 'jit',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/api/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
