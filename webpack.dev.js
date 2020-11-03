/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: false
	},
	module: {
		rules: [
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
			}
		]
	}
});
