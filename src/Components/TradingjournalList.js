import React, { useState, useEffect } from 'react';

const TradingJournalList = () => {
  const [tradingJournals, setTradingJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTradingJournals = async () => {
      try {
        const response = await fetch('https://crud1-xoqf.onrender.com/tradingjournals');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTradingJournals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTradingJournals();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Trading Journal Entries</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Asset Type</th>
            <th>Option Type</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>Strategy</th>
            <th>Reason for Entry</th>
            <th>Contract Size</th>
            <th>Profit/Loss</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {tradingJournals.length > 0 ? (
            tradingJournals.map((entry) => (
              <tr key={entry.id}>
                <td>{new Date(entry.dateTime).toLocaleString()}</td>
                <td>{entry.assetType}</td>
                <td>{entry.optionType}</td>
                <td>{entry.entryPrice}</td>
                <td>{entry.exitPrice}</td>
                <td>{entry.strategy}</td>
                <td>{entry.reasonForEntry}</td>
                <td>{entry.contractSize}</td>
                <td className={entry.profitLossString === 'Profit' ? 'text-success' : 'text-danger'}>
                  {entry.profitLoss} ({entry.profitLossString})
                </td>
                <td>{entry.comments}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No entries found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TradingJournalList;
