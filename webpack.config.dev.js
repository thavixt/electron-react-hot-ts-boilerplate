const merge = require('webpack-merge');
const exp = require('./webpack.config.base');

module.exports = merge({
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
