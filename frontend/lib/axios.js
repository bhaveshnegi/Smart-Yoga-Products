import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://smart-yoga-products-backend.onrender.com/api',  // Adjust this if your backend runs on a different URL
});

export default axiosInstance;
