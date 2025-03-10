// src/TransactionHistoryPage.js
import React, { useState } from 'react';
import './TransactionHistory.css';

const TransactionHistoryPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/transactions/${cardNumber}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div className="search-container">
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i> Search
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Merchant Type</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.merchantType}</td>
                  <td>{transaction.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
