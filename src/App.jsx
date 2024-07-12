import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TransactionPage from './components/TransactionsPage';
import CustomerTable from './components/CustomerTable';
import TransactionGraph from './components/TransactionGraph';
import NavBar from './components/Navbar';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <div className="mt-10">
          <Routes>
            <Route path="/customerandtransaction" element={<TransactionPage />} />
            <Route path="/customertable" element={<CustomerTable />} />
            <Route path="/transactionsgraph" element={<TransactionGraph />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
