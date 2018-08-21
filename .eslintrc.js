// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  // globals: {
  //   window: true
  // },
  env: {
    browser: true,
    node: true
  },
  extends: "eslint:recommended", // 使用推荐规则
  // 让 ESLint 支持 Vue 单文件组件，依赖eslint-plugin-html
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-console": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "space-before-function-paren": ["error", "always"] //never
  }
};
