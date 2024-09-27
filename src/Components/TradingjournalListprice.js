import React, { useState, useEffect } from 'react';
import API_BASE_URL from './config';

const TradingjournalListprice = ({ setTotalProfitLoss, setRecordCount }) => {
  const [tradingJournals, setTradingJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTradingJournals();
  }, []);

  const fetchTradingJournals = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      // Get today's date in YYYY-MM-DD format
      const today = new Date().toISOString().split('T')[0];

      // Filter journals for today's date
      const todayJournals = data.filter(entry => {
        const entryDate = new Date(entry.dateTime).toISOString().split('T')[0];
        return entryDate === today;
      });

      setTradingJournals(todayJournals);

      // Calculate total profit/loss
      const total = todayJournals.reduce((sum, entry) => sum + parseFloat(entry.profitLoss || 0), 0).toFixed(2);
      setTotalProfitLoss(total);

      // Set the record count for today
      setRecordCount(todayJournals.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Optionally, render the list of today's trading journals here */}
      {/* {tradingJournals.length > 0 ? (
        <ul>
          {tradingJournals.map(entry => (
            <li key={entry._id}>
              {entry.assetType} - {entry.profitLoss} Profit/Loss
            </li>
          ))}
        </ul>
      ) : (
        <p>No records for today</p>
      )} */}
    </div>
  );
};

export default TradingjournalListprice;
