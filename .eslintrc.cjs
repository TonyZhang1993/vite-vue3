module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'eslint-config-prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-debugger': 'warn', //提交时不允许有debugger
    '@typescript-eslint/no-explicit-any': 'off', //  关闭any报警, 根据情况开启；正常开发建议移除
    'vue/multi-word-component-names': 'off' // 禁用vue文件强制多个单词命名
  }
}
