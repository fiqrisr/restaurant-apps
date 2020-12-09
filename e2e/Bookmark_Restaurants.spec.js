/* eslint-disable no-undef */
const assert = require('assert');

Feature('Bookmark Restaurants');

Before(({ I }) => {
	I.amOnPage('/favorites');
});

Scenario('Showing empty bookmarked restaurants', ({ I }) => {
	I.see('Empty Bookmark', '.bg-text');
});

Scenario('Bookmark one restaurant', async ({ I }) => {
	I.see('Empty Bookmark', '.bg-text');

	I.amOnPage('/');
	I.seeElement({ shadow: ['rz-restaurant-list'] });

	const firstRestaurant = ['rz-restaurant-list', 'rz-restaurant-card'];
	const firstRestaurantTitle = await I.grabTextFrom({ shadow: [...firstRestaurant, 'h3.title'] });

	I.click({ shadow: firstRestaurant });

	I.seeElement({ shadow: ['rz-restaurant-header', 'div.bookmark'] });
	I.click({ shadow: ['rz-restaurant-header', 'div.bookmark'] });

	I.amOnPage('/favorites');
	I.seeElement({ shadow: ['rz-restaurant-list', 'rz-restaurant-card'] });

	const bookmarkedRestaurantTitle = await I.grabTextFrom({
		shadow: [...firstRestaurant, 'h3.title']
	});
	assert.strictEqual(firstRestaurantTitle, bookmarkedRestaurantTitle);
});

Scenario('Unbookmark one restaurant', async ({ I }) => {
	I.see('Empty Bookmark', '.bg-text');

	I.amOnPage('/');
	I.seeElement({ shadow: ['rz-restaurant-list'] });

	const firstRestaurant = ['rz-restaurant-list', 'rz-restaurant-card'];
	const firstRestaurantTitle = await I.grabTextFrom({ shadow: [...firstRestaurant, 'h3.title'] });

	I.click({ shadow: firstRestaurant });

	I.seeElement({ shadow: ['rz-restaurant-header', 'div.bookmark'] });
	I.click({ shadow: ['rz-restaurant-header', 'div.bookmark'] });

	I.amOnPage('/favorites');
	I.seeElement({ shadow: ['rz-restaurant-list', 'rz-restaurant-card'] });

	const bookmarkedRestaurantTitle = await I.grabTextFrom({
		shadow: [...firstRestaurant, 'h3.title']
	});
	assert.strictEqual(firstRestaurantTitle, bookmarkedRestaurantTitle);

	I.click({ shadow: firstRestaurant });

	I.seeElement({ shadow: ['rz-restaurant-header', 'div.bookmark'] });
	I.click({ shadow: ['rz-restaurant-header', 'div.bookmark'] });

	I.amOnPage('/favorites');
	I.see('Empty Bookmark', '.bg-text');
});
