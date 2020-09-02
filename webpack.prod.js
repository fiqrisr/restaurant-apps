const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
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
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
});
