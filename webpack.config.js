const glob = require('fast-glob');
module.exports = {
    entry() {
        return new Promise(function (resolve, reject) {
            return glob('./src/**/*.js');
        })
    },
    mode: 'development'
}