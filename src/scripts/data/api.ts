import axios from 'redaxios';
import config from '@/scripts/config';

axios.defaults.baseURL = config.API_BASE_URL;

export default axios;
