import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'kinopoiskdev_client',
    globals: {}
  },
  external: [],
  plugins: [
    resolve(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
  ]
};
