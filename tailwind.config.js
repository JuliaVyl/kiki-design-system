const tokens = require('./tokens/variables.js');

const colors = Object.fromEntries(
  Object.keys(tokens)
    .filter((key) => tokens[key].type === 'color')
    .map((key) => [key, tokens[key].value])
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
