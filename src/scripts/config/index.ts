export * from './styles';

const config = {
	API_BASE_URL: 'https://restaurant-api.dicoding.dev/',
	API_BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
	API_ENDPOINT: {
		RESTAURANT_LIST: 'list',
		RESTAURANT_DETAIL: (id: string): string => `detail/${id}`,
		POST_REVIEW: 'review'
	}
};

export default config;
