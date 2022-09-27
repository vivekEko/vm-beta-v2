/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/src/assets/img/landingPage/hero_pc_bg.png')",
        // 'hero-pc': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
