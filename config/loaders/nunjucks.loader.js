const nunjucks = require('nunjucks');
const loaderUtils = require("loader-utils");

const main = function () {
	const options = loaderUtils.getOptions(this);

	this.cacheable();
	console.log(options.path);
}

module.exports = main;