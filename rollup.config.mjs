// https://blog.csdn.net/yutao618/article/details/116272769
// https://www.rollupjs.com/guide/faqs
// https://zhuanlan.zhihu.com/p/221968604

import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.js',

  output: {
    file: 'rocket-nifty.js',
    format: 'umd',
    name: 'nifty'
  },

  plugins: [
    terser()
  ]
}