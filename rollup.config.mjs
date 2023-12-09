import commonJs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json' assert { type: 'json' }
import babel from '@rollup/plugin-babel'

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.types,
        format: 'esm',
      },
    ],
    plugins: [
      dts({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          incremental: false,
        },
      }),
    ],
    external: [/\.(css|less|scss)$/],
  },
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        interop: 'auto',
      },
    ],
    plugins: [
      commonJs(),
      resolve(),
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules'],
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        plugins: [
          ['babel-plugin-styled-components', { ssr: true, displayName: true }],
        ],
      }),
      postcss(),
      copy({
        targets: [
          {
            src: 'src/fonts/assets/*',
            dest: 'dist/fonts/assets/',
          },
        ],
      }),
    ],
  },
]
