import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'

export default {
  input: 'lib/esm/index.js',
  output: [
    {
      file: 'lib/umd/react-text-gradients.umd.min.js',
      format: 'umd',
      name: 'ReactTextGradients',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    resolve(),

    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '> 0.25%, not dead',
          },
        ],
      ],
    }),
    terser({ format: { comments: false }, compress: true, mangle: true }),
  ],
  external: ['react'],
}
