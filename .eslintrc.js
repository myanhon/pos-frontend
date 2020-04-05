module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    indent: ["error", 2],
    "no-console": process.env.NODE_ENV === "production" ? "off" : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "off" : 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
