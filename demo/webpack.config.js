const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'imgs/',
                        limit: 20480
                    }
                },
            },
            {
                test: /\.vue/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    }
}
