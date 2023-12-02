import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      name: 'asjuanguilherme-react-ui',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonJs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, displayName: true }],
        // Adicione quaisquer outros plugins Babel necessários aqui
      ],
    }),
    postcss({
      extract: true,
      modules: true,
      extensions: ['.css'],
    }),
    terser(),
  ],
}
