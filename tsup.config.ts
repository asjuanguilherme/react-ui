import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    cjsInterop: true,
    splitting: true,
    treeshake: true,
    clean: env === 'production',
  },
])
