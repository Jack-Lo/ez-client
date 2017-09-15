import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  moduleName: 'client',
  sourceMap: true,
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  targetMap: {
    'umd': 'dist/index.js',
    'es': 'dist/index.esm.js',
    'cjs': 'dist/index.cjs.js',
    'iife': 'dist/index.iife.js'
  }
}