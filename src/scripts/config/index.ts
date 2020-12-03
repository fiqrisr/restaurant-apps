export * from './styles';

const config = {
	API: {
		BASE_URL: 'https://restaurant-api.dicoding.dev/',
		BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
		ENDPOINT: {
			RESTAURANT_LIST: 'list',
			RESTAURANT_DETAIL: (id: string): string => `detail/${id}`,
			POST_REVIEW: 'review'
		}
	},
	DEFAULT_AVATAR: '../../public/images/avatar.svg',
	DATABASE: {
		NAME: 'restozoo-db',
		VERSION: 1,
		OBJECT_STORE_NAME: 'restaurants'
	}
};

export default config;
