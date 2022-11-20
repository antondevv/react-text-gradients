const { terser } = require("rollup-plugin-terser")

module.exports = {
  input: "lib/cjs/index.js",
  output: [
    {
      file: "lib/umd/index.umd.js",
      format: "umd",
      name: "ReactTextGradient",
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    terser({ format: { comments: false }, compress: true, mangle: true }),
  ],
  external: ["react", "react-dom"],
}
