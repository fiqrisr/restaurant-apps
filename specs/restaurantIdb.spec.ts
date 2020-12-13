import { expect } from '@open-wc/testing';
import { getRestaurant, putRestaurant, deleteRestaurant } from './helpers/idb';
import { restaurantData } from './data/restaurant';

describe('IndexedDB for restaurants', () => {
	it('should add restaurant to database', async () => {
		await putRestaurant(restaurantData);
		const restaurantIdb = await getRestaurant(restaurantData.id);
		expect(restaurantIdb.name).equal(restaurantData.name);
	});

	it('should get one restaurant from database', async () => {
		await putRestaurant(restaurantData);
		const restaurantIdb = await getRestaurant(restaurantData.id);
		expect(restaurantIdb).to.not.undefined;
	});

	it('should delete one restaurant from database', async () => {
		await putRestaurant(restaurantData);
		let restaurantIdb = await getRestaurant(restaurantData.id);
		expect(restaurantIdb.name).equal(restaurantData.name);
		await deleteRestaurant(restaurantData.id);
		restaurantIdb = await getRestaurant(restaurantData.id);
		expect(restaurantIdb).to.be.undefined;
	});
});
