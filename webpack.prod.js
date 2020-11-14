const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({
			token: 'c5ec3d616cf2613cf430b2b06412eb4454c4bda6'
		})
	]
});
