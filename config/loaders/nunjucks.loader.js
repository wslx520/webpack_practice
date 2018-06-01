const nunjucks = require('nunjucks');
const loaderUtils = require("loader-utils");

	// nunjucks.configure(options.views);
	nunjucks.configure('./src');
const main = function (file) {
	const options = loaderUtils.getOptions(this);

	this.cacheable();
	console.log(Object.keys(this));
	console.log('ooooooooooo',options,options.views);
	console.log(file.path);
	console.log(nunjucks.render(file, {name:'test'}))
	return 'test'
}

module.exports = main;