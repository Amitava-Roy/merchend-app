import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const fetchOrders = async () => API.get('/orders').then((res) => res.data);
export const fetchProducts = async () => API.get('/products').then((res) => res.data);
export const fetchShipments = async () => API.get('/shipments').then((res) => res.data);
export const fetchVendors = async () => API.get('/vendors').then((res) => res.data);
export const fetchSamples = async () => API.get('/samples').then((res) => res.data);

export default API;