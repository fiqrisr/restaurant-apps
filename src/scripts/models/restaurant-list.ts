export default interface RestaurantList {
	count: number;
	restaurants: Array<{
		id: string;
		name: string;
		description: string;
		pictureId: number;
		city: string;
		rating: number;
	}>;
}
