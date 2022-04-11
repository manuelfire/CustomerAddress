import axios from 'axios';
const url = 'http://localhost:5000/customers';

export const fetchCustomers = () => axios.get(url);
export const createCustomers = (newCustomer : any) => axios.post(url,newCustomer); 
export const updateCustomer = (id : any,updateCustomerData : any) => axios.patch(`${url}/${id}`,updateCustomerData);
export const deleteCustomer = (id : any) => axios.post(`${url}/${id}`);