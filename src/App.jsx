import React from 'react';
import './App.css';
import TransactionPage from './components/TransactionsPage';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <div className="mt-10">
        <TransactionPage />
      </div>
    </DataProvider>
  );
};

export default App;
