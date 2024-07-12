import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import CustomerTable from './CustomerTable';
import TransactionGraph from './TransactionGraph';

let TransactionsPage = () => {
  let { customers, transactions } = useContext(DataContext);
  let [filter, setFilter] = useState('');

  let filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  let filteredTransactions = transactions.filter(transaction =>
    filteredCustomers.some(customer => customer.id == transaction.customer_id)
  );

  return (
    <div id="home">
      <h2 className="text-gray-600 text-2xl mb-1 font-bold">Transactions & Customers</h2>
      <section id="customertable">
      <CustomerTable customers={filteredCustomers} transactions={filteredTransactions} />
      </section>
      <section id="transactionsgraph">
      <TransactionGraph customers={filteredCustomers} transactions={filteredTransactions} />
      </section>
    </div>
  );
};

export default TransactionsPage;
