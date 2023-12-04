import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' }
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      name: 'asjuanguilherme-react-ui',
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
    del({
      targets: 'dist/*',
    }),
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonJs({ sourceMap: false }),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules'],
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, displayName: true }],
      ],
    }),
    postcss(),
    terser(),
  ],
}
