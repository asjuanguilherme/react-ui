import commonJs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json' assert { type: 'json' }

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
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      commonJs(),
      resolve(),
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
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
