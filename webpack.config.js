const path = require('path');

module.exports = {
    entry: './ts/main.ts',
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8800
    },
    output: {
        filename: 'mainWebpack.js',
        path: path.resolve(__dirname, 'compileToScript')
    }
};