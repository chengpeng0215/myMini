module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid', // 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
        printWidth: 100,
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': 'off', // 关闭组件命名规则
    'no-undef': 0, //不能有未定义的变量
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
