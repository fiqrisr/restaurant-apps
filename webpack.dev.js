/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: false
	},
	plugins: [new CleanTerminalPlugin()]
});
