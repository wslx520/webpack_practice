const glob = require('fast-glob');
const path = require('path');
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
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.njk$/,
            use: [{
                loader: path.resolve('./config/loaders/nunjucks.loader.js'),
                options: {
                    views: './src'
                }    
            }]
            
        }]
    },
    mode: 'development'
}