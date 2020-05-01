const merge = require('webpack-merge');
const exp = require('./webpack.config.base');

let prodMain = merge({
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loaders: [
					"ts-loader"
				],
			},
		]
	},
}, exp[0]);

let prodRenderer = merge({
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loaders: [
					"ts-loader"
				],
			},
			// This will cause the compiled CSS (and sourceMap) to be
			// embedded within the compiled javascript bundle and added
			// as a blob:// uri at runtime.
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
			}
		]
	},
}, exp[1]);

module.exports = [prodMain, prodRenderer];
