import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://abdelrhmanahmed255.github.io/transactionsapi/db.json'; 

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        const data = response.data;
        setCustomers(data.customers);
        setTransactions(data.transactions);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ customers, transactions, selectedCustomerId, setSelectedCustomerId, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
