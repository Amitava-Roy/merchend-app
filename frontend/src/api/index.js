import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchShipments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shipments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shipments:", error);
    throw error;
  }
};

export const fetchVendors = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/vendors`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching vendors:", error);
    throw error;
  }
};

export const fetchSamples = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/samples`);
    return response.data;
  } catch (error) {
    console.error("Error fetching samples:", error);
    throw error;
  }
};
