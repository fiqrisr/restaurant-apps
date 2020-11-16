import axios from 'data/api';
import config from '@/scripts/config';
import RestaurantList from 'models/restaurant-list';
import Restaurant from 'models/restaurant';

export async function getRestaurantList(): Promise<RestaurantList> {
	const response = await axios.get(config.API.ENDPOINT.RESTAURANT_LIST);
	// Return only count and restaurants field
	return (({ count, restaurants }) => ({ count, restaurants }))(response.data);
}

export async function getRestaurantData(id: string): Promise<Restaurant> {
	const response = await axios.get(config.API.ENDPOINT.RESTAURANT_DETAIL(id));
	return response.data.restaurant;
}
