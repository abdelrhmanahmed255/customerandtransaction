import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

let apiUrl = 'https://abdelrhmanahmed255.github.io/transactionsapi/db.json'; 

export let DataContext = createContext();

export let DataProvider = ({ children }) => {
  let [customers, setCustomers] = useState([]);
  let [transactions, setTransactions] = useState([]);
  let [selectedCustomerId, setSelectedCustomerId] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        setLoading(true);
        let response = await axios.get(apiUrl);
        let data = response.data;
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
