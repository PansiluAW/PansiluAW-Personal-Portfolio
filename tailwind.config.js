/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./dist/*.{html,js}"],
  content: [
    "./dist/**/*.{html,js}"
  ],
  theme:{
    extend: {
      colors:{
        'body': '#c5bfaf',
        'selected-text' : '#e4ded2',
        'theme' : '#754431',
        'nav' : '#9a7761',
        'secondary' : '#c4aa9b',
        'badge' : '#3e231c',
        'input-border' : '#c5bfaf',
        'input' : '#e4ded2',
      },
      fontFamily:{
        poppins: ["'Poppins'", 'sans-serif']
      }
    },
  },
}
