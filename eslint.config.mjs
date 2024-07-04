import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "complexity": ["error", { "max": 10 }],
      "max-depth": ["error", 4],
      "max-lines": ["error", 300],
      "max-lines-per-function": ["error", 50],
      "max-nested-callbacks": ["error", 3],
      "max-params": ["error", 4],
      "max-statements": ["error", 10],
    },
  },
  {
    files: ["test/**/*.js"], // Adjust the pattern to match your test files
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // Include Jest globals
      },
    },
    rules: {
      "max-lines-per-function": ["error", 200], // Pour permettre à mon describe d'être plus long
    },
  },
  pluginJs.configs.recommended,
];