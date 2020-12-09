const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const PWAPlugin = require('./webpack.pwa');

module.exports = merge(devConfig, {
	plugins: [...PWAPlugin]
});
