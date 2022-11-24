import { terser } from "rollup-plugin-terser"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "lib/esm/index.js",
  output: [
    {
      file: "lib/umd/bundle.js",
      format: "umd",
      name: "ReactTextGradient",
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    resolve(),
    terser({ format: { comments: false }, compress: true, mangle: true }),
  ],
  external: ["react", "react-dom"],
}
