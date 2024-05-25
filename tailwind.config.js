/** @type {import('tailwindcss').Config} */
module.exports = {
  // removed purge {},
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'main': "url('src/assets/pexels-karolina-grabowska-4239147.jpg')",
        'clean': "url('src/assets/pexels-koprivakart-3972703.jpg')",
        'gus-clean': "url('src/assets/pexels-gustavo-fring-3867607.jpg')",
        'wash': "url(src/assets/services-page-section-image.webp)",
        'video': "url(src/assets/home-feature-image-1.webp)",
        'video-1': "url(src/assets/home-feature-image-3.webp)",
      }
    },
    colors: {
      'hover-green': '#48bca2',
      'default': '#fff',
      'default-black': '#000',
      'default-gray': '#333',
      'hover-yellow2': '#ffd800',
      'hover-yellow': '#FFCD05',
      'gray1': '#757676',
      'porcelain': '#ffecfc',
      'pearl': '#fbfcf8',
      'white-smoke': '#F5F5F5',
      'light-gray': '#B3B2B0',
      'vlight-gray': '#F4F4F4',
      'type-gray': '#505D69',
      'washed-white': '#F6F6F6'
    },
    fontFamily: {
      'playfair-display': ['Playfair Display'],
      'roboto': ['Roboto', 'sans-serif'],
      'helvetica': ['Helvetica', 'sans-serif'],
      'arial': ['Arial', 'sans-serif'],
      'sen': ['Sen', 'sans-serif'],
      'sans': ['sans-serif'],
      'segoe-ui': ['Segoe UI', 'sans-serif']
    }    
  },
  plugins: [],
}
