const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// eslint-disable-next-line no-undef
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
	tests: 'e2e/**/*.spec.js',
	output: 'e2e/outputs',
	helpers: {
		WebDriver: {
			url: 'http://localhost:8080',
			port: 4444,
			browser: 'chrome'
		}
	},
	include: {
		I: './steps_file.js'
	},
	bootstrap: null,
	mocha: {},
	name: 'restozoo',
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true
		},
		tryTo: {
			enabled: true
		},
		screenshotOnFail: {
			enabled: true
		},
		wdio: {
			enabled: true,
			services: ['selenium-standalone']
		}
	}
};
