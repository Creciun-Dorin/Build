import axios from 'axios';
import * as apiRoutes from './apiRoutes';

const instance = axios.create({
  baseURL: apiRoutes.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
