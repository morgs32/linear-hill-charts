import path from 'path';
import { defineConfig } from 'vitest/config';

module.exports = defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    }
  },
  build: {
    outDir: './lib',
    target: 'es2015',
    lib: {
      entry: 'index.ts',
      formats: ['es'],
    },
  },
  base: './',
  test: {
    include: [
      '**/*.test.ts(x)'
    ],
    globals: true
  },
});