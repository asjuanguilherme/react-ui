import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' }
import url from '@rollup/plugin-url'
import copy from 'rollup-plugin-copy'

const commonPlugins = [
  url(),
  peerDepsExternal(),
  nodeResolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  commonJs({ sourceMap: false }),
  typescript({ tsconfig: './tsconfig.json' }),
  postcss(),
  copy({
    targets: [
      {
        src: 'src/fonts/assets/*',
        dest: 'dist/fonts/assets/',
      },
    ],
  }),
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
        globals: {
          react: 'React',
        },
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        interop: 'auto',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: [...commonPlugins],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.min.js',
        format: 'cjs',
        sourcemap: true,
        name: 'asjuanguilherme-react-ui',
        interop: 'auto',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: [
      ...commonPlugins,
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules'],
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [
          ['babel-plugin-styled-components', { ssr: false, displayName: true }],
        ],
      }),
      terser(),
    ],
  },
]
