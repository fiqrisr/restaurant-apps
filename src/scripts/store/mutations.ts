/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
	SET_LOADING_STATUS(state: any, payload: boolean) {
		state.loading = payload;
		return state;
	},

	ADD_TO_RESTAURANT_LIST(state: any, payload: any) {
		state.restaurantList = payload;
		return state;
	},

	SET_CURRENT_RESTAURANT_DATA(state: any, payload: any) {
		payload.customerReviews.splice(0, payload.customerReviews.length - 4);
		state.currentRestaurantData = payload;
		return state;
	},

	SET_COSTUMER_REVIEWS(state: any, payload: any) {
		const newList = payload.slice(-4);
		state.currentRestaurantData.customerReviews = [...newList];
		return state;
	}
};
