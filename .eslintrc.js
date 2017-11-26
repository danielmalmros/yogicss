module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  env: {
    browser: true,
  },
  //add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "indent": ["error", 2]
  }
}
