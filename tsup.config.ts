import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig([
  {
    entry: ['src/**/*.ts', 'src/**/*.tsx'],
    format: ['esm'],
    dts: true,
    cjsInterop: true,
    splitting: false,
    treeshake: true,
    clean: true,
    bundle: false,
    keepNames: true,
  },
])
