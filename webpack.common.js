/* eslint-disable no-undef */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const path = require('path');

function srcPath(subdir) {
	return path.join(__dirname, 'src', subdir);
}

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/'
	},
	resolve: {
		alias: {
			'@': srcPath('.'),
			components: srcPath('scripts/components'),
			lib: srcPath('scripts/lib'),
			pages: srcPath('scripts/views'),
			models: srcPath('scripts/models'),
			router: srcPath('scripts/router'),
			store: srcPath('scripts/store'),
			utils: srcPath('scripts/utils')
		},
		extensions: ['.ts', '.tsx', '.js']
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			maxSize: 70000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '~',
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
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
				exclude: path.resolve(__dirname, 'src/scripts/components'),
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'fonts'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
			base: '/',
			inject: 'body'
		}),
		new PreloadWebpackPlugin({
			rel: 'preload',
			as: 'font',
			include: 'allAssets',
			fileWhitelist: [/\.(woff2?|eot|ttf|otf)(\?.*)?$/i]
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/public')
				},
				{
					from: path.resolve(__dirname, '_redirects'),
					to: path.resolve(__dirname, 'dist')
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[fullhash].css',
			chunkFilename: '[id].[fullhash].css'
		}),
		new StylelintPlugin({
			files: 'src/**/*.css'
		}),
		new webpack.ProgressPlugin()
	]
};
