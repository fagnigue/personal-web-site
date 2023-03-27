/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Mulish', 'sans-serif'],
        contact: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: "#F9F9F9",
        secondary: "#4169E1"
      },
      backgroundImage: {
        'profile': "url('/profile.jpeg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
