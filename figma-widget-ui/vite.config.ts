import path from 'path'
import { defineConfig } from 'vitest/config';

module.exports = defineConfig({
  base: './',
  resolve: {
    alias: {
      'lhc': path.resolve(__dirname, '../lhc/'),
      '@': path.resolve(__dirname, '../'),
    }
  },
  build: {
    outDir: './lib',
    target: 'es2015',
    lib: {
      entry: 'src/ui.tsx',
      formats: ['es'],
    },
  },
  test: {
    include: ['**/*.test.ts'],
    globals: true
  },
});