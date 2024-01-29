/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('flowbite/plugin'),
];
