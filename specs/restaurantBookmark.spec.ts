import { html, fixture, expect } from '@open-wc/testing';
import { rzRestaurantHeader } from '../src/scripts/components/restaurant-header/restaurant-header';
import { restaurantData } from './data/restaurant';

describe('Bookmark restaurant', () => {
	let el: rzRestaurantHeader;

	beforeEach(async () => {
		el = await fixture(html`<rz-restaurant-header
			.id=${restaurantData.id}
			.title=${restaurantData.name}
			.address=${restaurantData.address + ', ' + restaurantData.city}
			.rating=${restaurantData.rating}
			.isBookmarked=${false}
		></rz-restaurant-header>`);
	});

	it('should display restaurant header element', () => {
		expect(el).to.be.accessible();
	});
});
