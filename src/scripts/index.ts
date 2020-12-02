import 'regenerator-runtime'; /* for async await transpile */

// Styles
import '@/styles/main.css';
import '@/styles/fonts.css';
import '@/scripts/views/restaurant-view/restaurant-view.css';
import '@/scripts/views/restaurant-view/add-review-form/add-review-form.css';
import '@/scripts/views/restaurant-view/review-list/review-list.css';

import 'node-snackbar/dist/snackbar.min.css';

// Router
import '@/scripts/router';

// Components
import 'components/app-bar';
import 'components/button';
import 'components/icon';
import 'components/text';
import 'components/spinner';
import 'components/restaurant-card';
import 'components/restaurant-list';
import 'components/nav-menu';
import 'components/nav-item';
import 'components/hero-image';
import 'components/restaurant-header';
import 'components/chip';
import 'components/review-card';

// Pages
import 'pages/home-view';
import 'pages/favorite-view';
import 'pages/restaurant-view';
import 'pages/restaurant-view/add-review-form';
import 'pages/restaurant-view/review-list';
import 'pages/not-found-view';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}
