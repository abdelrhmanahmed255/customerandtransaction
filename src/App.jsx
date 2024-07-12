import React from 'react';
import './App.css';
import TransactionPage from './components/TransactionsPage';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <div className="">
        <TransactionPage />
      </div>
    </DataProvider>
  );
};

export default App;
