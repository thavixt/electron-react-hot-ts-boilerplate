const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let main = {
	entry: [
		'./src/main/index.ts'
	],
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
	},
	devtool: "source-map",
	target: "electron-main",
	node: {
		__dirname: false,
		__filename: false
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			}
		]
	},
};

let renderer = {
	entry: './src/renderer/index.tsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'renderer.js',
	},
	devtool: "source-map",
	target: "electron-renderer",
	node: {
		__dirname: false,
		__filename: false
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/renderer/index.html')
		}),
	],
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			}
		]
	},
};

module.exports = [main, renderer];
