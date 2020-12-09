/* eslint-disable no-undef */
Feature('Bookmark Restaurants');

Before(({ I }) => {
	I.amOnPage('/favorites');
});

Scenario('Showing empty bookmarked restaurants', ({ I }) => {
	I.seeElement('#main');
	I.see('Empty Bookmark', '.bg-text');
});

Scenario('Bookmark one restaurant', ({ I }) => {
	I.see('Empty Bookmark', '.bg-text');
	I.amOnPage('/');
	I.seeElement({ shadow: ['rz-restaurant-list'] });
	I.click({ shadow: ['rz-restaurant-list', 'rz-restaurant-card'] });
	I.click({ shadow: ['rz-restaurant-header', 'div.bookmark'] });
	I.amOnPage('/favorites');
	I.seeElement({ shadow: ['rz-restaurant-list', 'rz-restaurant-card'] });
});
