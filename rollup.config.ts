import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        file: "dist/index.js",
        sourcemap: false,
      },
      {
        format: "esm",
        file: "dist/index.mjs",
        sourcemap: false,
      },
      {
        name: "SEBankHolidays",
        format: "umd",
        file: "dist/index.min.js",
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
