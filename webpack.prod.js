const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = merge(common, {
	mode: 'production',
	plugins: [new CleanWebpackPlugin()],
});
