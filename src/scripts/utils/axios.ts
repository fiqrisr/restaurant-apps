import axios from 'redaxios';
import config from '@/scripts/config';

axios.defaults.baseURL = config.API.BASE_URL;

export default axios;
