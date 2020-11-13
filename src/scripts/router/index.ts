import { Router } from '@vaadin/router';

const router = new Router(document.getElementById('outlet'));

router.setRoutes([
	{
		path: '/',
		component: 'home-view'
	},
	{
		path: '/favorites',
		component: 'favorite-view'
	}
]);

export default router;
