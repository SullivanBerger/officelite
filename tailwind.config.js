/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px'
    },
    colors: {
      'primary': '#5175FF',
      'primary-light': '#829CFF',
      'gray-dark': '#25293A',
      'gray': '#333950',
      'gray-light': '#747B95',
      'danger': '#F05B5B'
    },
    fontFamily: {
      'display': ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [],
}

