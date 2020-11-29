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
	DEFAULT_AVATAR: '../../public/images/avatar.svg'
};

export default config;
