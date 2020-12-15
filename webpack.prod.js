/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PWAPlugin = require('./webpack.pwa');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()]
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			reportFilename: '../bundle_report.html',
			openAnalyzer: false
		}),
		...PWAPlugin,
		new CleanWebpackPlugin()
	]
});
