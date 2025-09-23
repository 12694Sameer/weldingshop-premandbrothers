import axios from 'axios';

// const API_BASE = 'http://localhost:5000/api'; // Replace with your Render URL in production
const API_BASE = 'https://weldingshop-api-premandbrothers.onrender.com/api'; // Replace with your Render URL in production

export const addCustomer = (data) => axios.post(`${API_BASE}/customers`, data);
export const getCustomers = () => axios.get(`${API_BASE}/customers`);

export const addProduct = (data) => axios.post(`${API_BASE}/products`, data);
export const getProducts = () => axios.get(`${API_BASE}/products`);
