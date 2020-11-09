const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()]
	},
	plugins: [new CleanWebpackPlugin()]
});
