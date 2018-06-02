const glob = require('fast-glob');
const path = require('path');
const NJK_FS = require('./config/plugins/nunjucks.fs');
module.exports = {
    entry: {
        'index': './src/index.js'
    },
    // entry() {
    //     return new Promise(function (resolve, reject) {
    //         return glob('./src/**/*.js', (res) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     })
    // },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['env'],
                    //     plugins: ['syntax-dynamic-import']
                    // }
                }
            },
            {
            test: /\.njk$/,
            use: ['html-loader',
                {
                    loader: path.resolve('./config/loaders/nunjucks.loader.js'),
                    options: {
                        views: './src'
                    }
                }
            ]
            
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new NJK_FS({output: {
            path: './',
            extension: '.html'
        }})
    ],
    mode: 'development'
}