export default interface Restaurant {
	id: string;
	name: string;
	description: string;
	pictureId: number;
	city: string;
	address: string;
	rating: number;
	categories: Array<{ name: string }>;
	menus: {
		foods: Array<{ name: string }>;
		drinks: Array<{ name: string }>;
	};
	customerReviews: Array<{
		name: string;
		review: string;
		date: string;
	}>;
}
