import pluginQuery from "@tanstack/eslint-plugin-query";
// it was it eslintrc.jsoN: { "extends": ["next/core-web-vitals", "next/typescript"] }

export default [
  ...pluginQuery.configs["flat/recommended"],
  // Any other config...
];
