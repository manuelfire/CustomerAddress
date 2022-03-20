import axios from 'axios';
const url = 'http://localhost:5000/customers';

export const fetchCustomers = () => axios.get(url);
export const createCustomers = (newCustomer) => axios.post(url,newCustomer); 