// import axios from 'axios';

import axios from 'axios';
const api = axios.create({
  // baseURL: 'https://tez2-api.onrender.com',http://localhost:3500
  baseURL: 'http://localhost:3500',
});

export default api.defaults.baseURL;
