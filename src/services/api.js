import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-back-end-api.herokuapp.com'
});


export default api;