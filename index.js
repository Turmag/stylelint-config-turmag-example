export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-recommended',
        'stylelint-config-recommended-vue/scss',
    ],
    plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
    rules: {
        '@stylistic/indentation': [
            4,
            { baseIndentLevel: 1 },
        ],
        '@stylistic/no-empty-first-line': true,
        '@stylistic/no-extra-semicolons': true,
        'import-notation': 'string',
        'selector-class-pattern': '[a-z]+[A-Z]*',
    },
};
