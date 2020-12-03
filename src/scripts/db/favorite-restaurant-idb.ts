/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { openDB } from 'idb';
import config from '@/scripts/config';

const dbPromise = openDB(config.DATABASE.NAME, config.DATABASE.VERSION, {
	upgrade(database) {
		database.createObjectStore(config.DATABASE.OBJECT_STORE_NAME, { keyPath: 'id' });
	}
});

export async function getRestaurant(id: string) {
	return (await dbPromise).get(config.DATABASE.OBJECT_STORE_NAME, id);
}

export async function getAllRestaurants() {
	return (await dbPromise).getAll(config.DATABASE.OBJECT_STORE_NAME);
}

export async function putRestaurant(restaurant: unknown) {
	return (await dbPromise).put(config.DATABASE.OBJECT_STORE_NAME, restaurant);
}

export async function deleteRestaurant(id: string) {
	return (await dbPromise).delete(config.DATABASE.OBJECT_STORE_NAME, id);
}
