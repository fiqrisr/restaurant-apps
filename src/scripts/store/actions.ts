import Store from 'lib/store';
import axios from 'utils/axios';
import config from '@/scripts/config';
import { getAllRestaurants } from '@/scripts/db/favorite-restaurant-idb';

export default {
	getRestaurantList(context: Store): void {
		context.commit('SET_LOADING_STATUS', true);
		axios.get(config.API.ENDPOINT.RESTAURANT_LIST).then((response) => {
			// Filter only count and restaurants field
			const filtered = (({ count, restaurants }) => ({ count, restaurants }))(response.data);
			context.commit('ADD_TO_RESTAURANT_LIST', filtered);
			context.commit('SET_LOADING_STATUS', false);
		});
	},

	getRestaurantData(context: Store, id: string): void {
		context.commit('SET_LOADING_STATUS', true);
		axios.get(config.API.ENDPOINT.RESTAURANT_DETAIL(id)).then((response) => {
			context.commit('SET_CURRENT_RESTAURANT_DATA', response.data.restaurant);
			context.commit('SET_LOADING_STATUS', false);
		});
	},

	addReview(context: Store, review: { id: string; name: string; review: string }): void {
		axios
			.post(config.API.ENDPOINT.POST_REVIEW, review, {
				headers: {
					'Content-Type': 'application/json',
					'X-Auth-Token': '12345',
					Accept: 'application/json'
				}
			})
			.then((response) => {
				context.commit('SET_COSTUMER_REVIEWS', response.data.customerReviews);
			});
	},

	getFavorites(context: Store): void {
		context.commit('SET_LOADING_STATUS', true);
		getAllRestaurants().then((data) => {
			context.commit('SET_FAVORITES', data);
			context.commit('SET_LOADING_STATUS', false);
		});
	}
};
