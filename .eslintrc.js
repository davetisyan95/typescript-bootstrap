module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', // Allows use of "import Example from 'example'"
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['node_modules'],
    env: { browser: true, node: true },
    settings: {
        react: {
            version: 'detect', // Automatically detect the version of React
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended', // Display prettier errors as ESLint errors. Make sure this is always last.
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs.
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        // https://eslint.org/docs/rules/
    },
};
