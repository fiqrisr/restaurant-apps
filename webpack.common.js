/* eslint-disable no-undef */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

function srcPath(subdir) {
	return path.join(__dirname, 'src', subdir);
}

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: ''
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
		new WebpackPwaManifest({
			name: 'RestoZoo',
			short_name: 'RestoZoo',
			description: 'Find your next favorite restaurant around you!',
			background_color: '#ffffff',
			display: 'standalone',
			orientation: 'any',
			scope: '/',
			start_url: '/index.html',
			theme_color: '#e74c3c',
			icons: [
				{
					src: path.resolve(__dirname, 'src/icons/icon-192x192.png'),
					size: '192x192',
					type: 'image/png'
				},
				{
					src: path.resolve(__dirname, 'src/icons/icon-256x256.png'),
					size: '256x256',
					type: 'image/png'
				},
				{
					src: path.resolve(__dirname, 'src/icons/icon-384x384.png'),
					size: '384x384',
					type: 'image/png'
				},
				{
					src: path.resolve(__dirname, 'src/icons/icon-512x512.png'),
					size: '512x512',
					type: 'image/png'
				}
			]
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
			scriptLoading: 'defer',
			base: '/'
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
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		}),
		new StylelintPlugin({
			files: 'src/**/*.css'
		}),
		new webpack.ProgressPlugin()
	]
};
