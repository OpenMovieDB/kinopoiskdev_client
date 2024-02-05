import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      minify: true,
      manifest: true,
      reportCompressedSize: true,
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'lib',
        fileName: format => `lib.${format}.js`,
        formats: ['cjs', 'es', 'umd'],
      },
      outDir: 'dist',
    },
    plugins: [dts({ rollupTypes: true })],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    test: {
      browser: {
        enabled: true,
        name: 'chrome',
      },
    },
  };
});
