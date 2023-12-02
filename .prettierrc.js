module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['**/*.yml', '**/*.yaml', 'package.json'],
            options: {
                tabWidth: 2,
                singleQuote: false
            }
        }
    ]
};
