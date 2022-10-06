/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
        thai :['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        background:"url('/background.png')",
        about: "url('/about.png')",
        product: "url('/product.png')",
        performance: "url('/performance.png')",
        blog: "url('/blog.png')",
        review: "url('/review.png')",
        contact: "url('/contact.jpg')"
      },
      fontSize: {
        sixfour: ['64px'],
        thirtytwo: ['32px']
      },
      colors:{
        'grey-a' :'#787878',
        'green-a' : '#167F57'
      },
      spacing:{
        
      }
    },
  },
  plugins: [],
}
