module.exports = () => ({
  plugins: {
    'postcss-simple-vars': {
      variables: () => require('graphcool-styles/dist/variables/variables.js'),
    },
    'postcss-inject': {
      cssFilePath: 'graphcool-styles/dist/style.css'
    },
    'postcss-cssnext': {},
    'postcss-inherit': {},
  }
})
