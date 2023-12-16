import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/**/*'],
    format: ['esm'],
    dts: false,
    cjsInterop: true,
    splitting: true,
    treeshake: true,
    clean: true,
    bundle: false,
    keepNames: true,
    sourcemap: true,
  },
])
