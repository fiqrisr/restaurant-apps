/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new WorkboxPlugin.InjectManifest({
			swSrc: path.resolve(__dirname, 'src/sw.js'),
			swDest: 'sw.js',
			exclude: [/types/, '_redirects'],
			maximumFileSizeToCacheInBytes: 5000000
		}),
		new WebpackPwaManifest({
			name: 'RestoZoo',
			short_name: 'RestoZoo',
			description: 'Find your next favorite restaurant around you!',
			theme_color: '#e74c3c',
			background_color: '#fff',
			display: 'standalone',
			scope: '/',
			start_url: '/',
			orientation: 'any',
			inject: true,
			ios: true,
			icons: [
				{
					src: path.resolve(__dirname, 'src/icons/icon-512x512.png'),
					destination: 'public/icons/android',
					sizes: [96, 128, 192, 256, 384, 512],
					purpose: 'maskable'
				},
				{
					src: path.resolve(__dirname, 'src/icons/icon-512x512.png'),
					destination: 'public/icons/ios',
					sizes: [120, 152, 167, 180],
					ios: true
				}
			]
		})
	]
});
