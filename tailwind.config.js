module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-bg": "url('/src/bg.jpg')",
        "contact-bg": "url('/src/contact-bg.png')",
        "projects-bg": "url('/src/bg-projects.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
//https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg
