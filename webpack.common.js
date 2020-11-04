/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

function srcPath(subdir) {
	return path.join(__dirname, 'src', subdir);
}

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js'
	},
	resolve: {
		alias: {
			'@': srcPath('.'),
			components: srcPath('scripts/components')
		},
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css|\.s(c|a)ss$/,
				use: [
					{
						loader: 'lit-scss-loader',
						options: {
							minify: true
						}
					},
					'extract-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				exclude: path.resolve(__dirname, 'src/scripts'),
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/public')
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		}),
		new StylelintPlugin({
			files: 'src/**/*.css'
		})
	]
};
