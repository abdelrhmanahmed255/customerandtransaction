import axios from 'axios';


export const fetchCustomers = () => axios.get(`http://localhost:5000/customers`);
export const fetchTransactions = () => axios.get(`http://localhost:5000/transactions`);
