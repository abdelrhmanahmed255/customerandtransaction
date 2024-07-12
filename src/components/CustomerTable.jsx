import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

let CustomerTable = () => {
  let { customers, transactions, setSelectedCustomerId } = useContext(DataContext);
  let [filter, setFilter] = useState('');

  let filteredCustomers = filter
    ? customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLowerCase()) ||
        transactions.some(transaction =>
          transaction.customer_id == customer.id &&
          transaction.amount.toString().includes(filter)
        )
      )
    : customers;

  return (
    <div className="mb-6 w-full">
      <input
        type="text"
        placeholder="Search by name or transactions amount"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <table className="min-w-full bg-gray-600 text-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">Select</th>
            <th className="py-2 px-4 border-b text-center">Name</th>
            <th className="py-2 px-4 border-b text-center">Transactions</th>
            <th className="py-2 px-4 border-b text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id}>
              <td className="py-[2px] px-4 border-b text-center">
                <input
                  type="radio"
                  name="selectedCustomer"
                  value={customer.id}
                  onChange={() => setSelectedCustomerId(customer.id)}
                />
              </td>
              <td className="py-[2px] px-4 border-b">{customer.name}</td>
              <td className="py-[2px] px-4 border-b">
                {transactions
                  .filter(transaction => transaction.customer_id == customer.id)
                  .map(transaction => (
                    <div key={transaction.id} className="mb-2">
                      ${transaction.amount}
                    </div>
                  ))}
              </td>
              <td className="py-[2px] px-4 border-b text-center">
                {transactions
                  .filter(transaction => transaction.customer_id == customer.id)
                  .map(transaction => (
                    <div key={transaction.id} className="mb-2">
                      {transaction.date}
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
