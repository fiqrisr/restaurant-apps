/* eslint-disable no-undef */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { clientsClaim, skipWaiting } from 'workbox-core';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const BASE_API_URL = 'https://restaurant-api.dicoding.dev/';

/* Image: CacheFirst */
registerRoute(
	({ request }) => request.destination === 'image',
	new CacheFirst({
		cacheName: 'images',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Hari
			})
		]
	})
);

/* API: StaleWhileRevalidate */
registerRoute(
	({ request }) => request.url.indexOf(BASE_API_URL + 'list') > -1,
	new StaleWhileRevalidate({
		cacheName: 'api-stalewhilerevalidate',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				maxAgeSeconds: 60 * 60 * 24, // 24 Jam
				maxEntries: 100
			})
		]
	})
);

/* API: NetworkFirst */
registerRoute(
	({ request }) => request.url.indexOf(BASE_API_URL + 'detail') > -1,
	new NetworkFirst({
		cacheName: 'api-networkfirst',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				maxAgeSeconds: 60 * 60 * 24, // 24 Jam
				maxEntries: 100
			})
		]
	})
);

skipWaiting();
clientsClaim();
