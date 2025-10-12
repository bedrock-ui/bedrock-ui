import { defineConfig } from 'tsup';

const config = defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  minify: 'terser',
});

export default config;
