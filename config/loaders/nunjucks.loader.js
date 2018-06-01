const nunjucks = require('nunjucks');
const loaderUtils = require("loader-utils");
const  path = require('path')

	// nunjucks.configure(options.views);
	nunjucks.configure('./src');
let hasSet = false;
let viewRoot = null;
const main = function (file) {
	const options = loaderUtils.getOptions(this);

	if (!hasSet) {
		nunjucks.configure(options.views, options);
		viewRoot = options.views;
		hasSet = true;
	}
	this.cacheable();
	const currentPath = this.resourcePath;
	let all = Object.keys(this);
	const relativePath = path.relative(viewRoot, currentPath);
	console.log(currentPath, relativePath);
	console.log('ooooooooooo',options);
	console.log(nunjucks.render(relativePath, {name:'test'}))
	return 'test'
}

module.exports = main;