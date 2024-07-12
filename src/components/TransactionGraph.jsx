import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

let TransactionGraph = () => {
  let { customers, transactions, selectedCustomerId } = useContext(DataContext);
  let [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    let filteredTransactions = transactions;

    if (selectedCustomerId) {
      filteredTransactions = transactions.filter(transaction => transaction.customer_id == selectedCustomerId);
    }
    let selectedCustomerName = selectedCustomerId 
    ? customers.find(customer => customer.id == selectedCustomerId)?.name 
    : null;

    let aggregatedData = filteredTransactions.reduce((acc, transaction) => {
      let date = new Date(transaction.date).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += transaction.amount;
      return acc;
    }, {});

    let sortedData = Object.entries(aggregatedData).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    let labels = sortedData.map(item => item[0]);
    let data = sortedData.map(item => item[1]);

    let dataset = {
      label: selectedCustomerId ? `${selectedCustomerName.toUpperCase()} Transactions Amount` : 'Total Transactions Amount Per Day',
      data,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 85, 99 , 0.85)',
      fill: false,
      tension: 0.4,
    };

    setChartData({ labels, datasets: [dataset] });
  }, [selectedCustomerId, transactions]);

  return (
    <div className="w-full mt-6">
      <div>
        <h3 className="font-bold text-lg mb-2">Bar Chart</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
      <div className="mb-6 mt-3">
        <h3 className="font-bold text-lg mb-2">Line Chart</h3>
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default TransactionGraph;
