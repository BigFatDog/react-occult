import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import typescript from "rollup-plugin-typescript"

import pkg from './package.json'

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'lib/occult.js', format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [babel()]
  },

  // ES
  {
    input: 'src/index.js',
    output: { file: 'es/occult.js', format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [typescript(), babel()]
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: { file: 'es/occult.esm.js', format: 'es', indent: false },
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // UMD Development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/occult.js',
      format: 'umd',
      name: 'Occult',
      indent: false
    },
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },

  // UMD Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/occult.min.js',
      format: 'umd',
      name: 'Occult',
      indent: false
    },
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
]
