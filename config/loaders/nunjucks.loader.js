const nunjucks = require('nunjucks');
const loaderUtils = require("loader-utils");

	nunjucks.configure(options.views);
const main = function (file) {
	const options = loaderUtils.getOptions(this);

	this.cacheable();
	console.log('ooooooooooo',options,options.views);
	console.log(file.path);
	console.log(nunjucks.render(file, {name:'test'}))
	return 'test'
}

module.exports = main;