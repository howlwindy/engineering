module.exports = {
  plugins: [
    require('postcss-import')({
      // stylelint的应用必须这样写
      plugins: [require('stylelint')]
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-sorting'),
    require('postcss-reporter')
  ]
}
