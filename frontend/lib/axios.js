import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust this if your backend runs on a different URL
});

export default axiosInstance;
