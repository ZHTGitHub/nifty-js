import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.js',

  output: {
    file: 'nifty-util.js',
    format: 'umd',
    name: 'nifty-util'
  },

  plugins: [
    terser()
  ]
}