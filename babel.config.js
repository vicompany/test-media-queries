module.exports = {
    plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/proposal-decorators', {
            decoratorsBeforeExport: true,
        }],
    ],
};
