/* eslint-disable no-undef */
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = [
	new InjectManifest({
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
		ios: true,
		icons: [
			{
				src: path.resolve(__dirname, 'src/icons/icon-512x512.png'),
				destination: 'public/icons/android',
				sizes: [96, 128, 192, 256, 384, 512],
				purpose: 'maskable'
			},
			{
				src: path.resolve(__dirname, 'src/icons/icon-1024x1024.png'),
				destination: 'public/icons/ios',
				sizes: [120, 152, 167, 180, 1024],
				ios: true
			},
			{
				src: path.resolve(__dirname, 'src/icons/icon-1024x1024.png'),
				destination: 'public/icons/ios',
				sizes: 1024,
				ios: 'startup'
			}
		]
	})
];
