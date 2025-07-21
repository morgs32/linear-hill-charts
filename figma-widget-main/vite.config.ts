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
  define: {
    'process.env': process.env
  },
  build: {
    outDir: 'lib',
    target: 'es2015',
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
    },
  },
  test: {
    include: ['**/*.test.ts'],
    globals: true
  },
});