module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: "./",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
  project: "insta-scraper/tsconfig.json",
  rules: {
    eqeqeq: ["error", "smart"],
    "consistent-return": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "default",
        format: ["camelCase", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "enumMember",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "forbid",
      },
    ],
    "@typescript-eslint/no-extra-parens": ["off"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "warn",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        enforceConst: true,
        ignoreReadonlyClassProperties: true,
        ignore: [0, 0.5, 1, 2, 24, 60, 100, 1000, -1],
      },
    ],
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_$",
      },
    ],
    "simple-import-sort/imports": "error",
    "filenames/match-regex": [
      2,
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(.[a-z]+)?$",
      true,
    ],
  },
};
