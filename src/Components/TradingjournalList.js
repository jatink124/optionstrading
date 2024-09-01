import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';

const TradingJournalList = ({ setTotalProfitLoss }) => {
  const [tradingJournals, setTradingJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({
    dateTime: '',
    assetType: '',
    optionType: '',
    entryPrice: '',
    exitPrice: '',
    strategy: '',
    reasonForEntry: '',
    contractSize: '',
    profitLoss: '',
    comments: ''
  });

  useEffect(() => {
    loadTradingJournals();
  }, []);

  const loadTradingJournals = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      const today = new Date().toISOString().split('T')[0];
      const todayJournals = data.filter(entry => {
        const entryDate = new Date(entry.dateTime).toISOString().split('T')[0];
        return entryDate === today;
      });

      setTradingJournals(todayJournals);

      const total = todayJournals.reduce((sum, entry) => sum + parseFloat(entry.profitLoss || 0), 0).toFixed(2);
      setTotalProfitLoss(total);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (entry) => {
    const formattedDate = entry.dateTime ? new Date(entry.dateTime).toISOString().slice(0, 16) : '';
    setIsEditing(entry._id);
    setEditFormData({
      dateTime: formattedDate,
      assetType: entry.assetType || '',
      optionType: entry.optionType || '',
      entryPrice: entry.entryPrice || '',
      exitPrice: entry.exitPrice || '',
      strategy: entry.strategy || '',
      reasonForEntry: entry.reasonForEntry || '',
      contractSize: entry.contractSize || '',
      profitLoss: entry.profitLoss || '',
      comments: entry.comments || ''
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const submitEditForm = async (e) => {
    e.preventDefault();
  
    // Determine contract size based on asset type
    const contractSize = editFormData.assetType === 'banknifty' ? 105 : 100;

    // Calculate the profit/loss based on the new entry/exit prices and contract size, minus 50
    const calculatedProfitLoss = (((parseFloat(editFormData.exitPrice) - parseFloat(editFormData.entryPrice)) * contractSize) - 50).toFixed(2);
  
    try {
      // Update the profitLoss field and contractSize in the editFormData
      const updatedFormData = { 
        ...editFormData, 
        profitLoss: calculatedProfitLoss,
        contractSize: contractSize
      };
  
      const response = await fetch(`${API_BASE_URL}/tradingjournal/${isEditing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFormData),
      });
  
      if (response.ok) {
        await loadTradingJournals(); // This will refresh the list and update the UI
  
        setIsEditing(null);
  
        // Recalculate total profit/loss after the update
        const total = tradingJournals.reduce((sum, entry) => {
          const contractSize = entry.assetType === 'banknifty' ? 105 : 100;
          const profitLoss = (((parseFloat(entry.exitPrice) - parseFloat(entry.entryPrice)) * contractSize) - 50).toFixed(2);
          return sum + parseFloat(profitLoss || 0);
        }, 0).toFixed(2);
  
        setTotalProfitLoss(total);
      } else {
        throw new Error('Failed to update entry');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) loadTradingJournals();
      else throw new Error('Failed to delete entry');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalProfitLoss = Array.isArray(tradingJournals)
    ? tradingJournals.reduce((total, entry) => {
        const contractSize = entry.assetType === 'banknifty' ? 105 : 100;
        const profitLoss = (((parseFloat(entry.exitPrice) - parseFloat(entry.entryPrice)) * contractSize) - 50).toFixed(2);
        return total + parseFloat(profitLoss || 0);
      }, 0).toFixed(2)
    : '0.00';

  return (
    <div className="container mt-5">
      <h2>Trading Journal Entries for Today</h2>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tradingJournals.length > 0 ? (
            tradingJournals.map((entry) => (
              <tr key={entry._id}>
                {isEditing === entry._id ? (
                  <>
                    <td>
                      <input
                        type="datetime-local"
                        name="dateTime"
                        value={editFormData.dateTime}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input type="text" name="assetType" value={editFormData.assetType} onChange={handleFormChange} />
                    </td>
                    <td><input type="text" name="optionType" value={editFormData.optionType} onChange={handleFormChange} /></td>
                    <td><input type="number" name="entryPrice" value={editFormData.entryPrice} onChange={handleFormChange} /></td>
                    <td><input type="number" name="exitPrice" value={editFormData.exitPrice} onChange={handleFormChange} /></td>
                    <td><input type="text" name="strategy" value={editFormData.strategy} onChange={handleFormChange} /></td>
                    <td><input type="text" name="reasonForEntry" value={editFormData.reasonForEntry} onChange={handleFormChange} /></td>
                    <td>
                      {editFormData.assetType === 'banknifty' ? 105 : 100}
                    </td>
                    <td><input type="number" name="profitLoss" value={editFormData.profitLoss} onChange={handleFormChange} /></td>
                    <td><input type="text" name="comments" value={editFormData.comments} onChange={handleFormChange} /></td>
                    <td>
                      <button className="btn btn-success" onClick={submitEditForm}>Save</button>
                      <button className="btn btn-secondary" onClick={() => setIsEditing(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{new Date(entry.dateTime).toLocaleString()}</td>
                    <td>{entry.assetType}</td>
                    <td>{entry.optionType}</td>
                    <td>{entry.entryPrice}</td>
                    <td>{entry.exitPrice}</td>
                    <td>{entry.strategy}</td>
                    <td>{entry.reasonForEntry}</td>
                    <td>{entry.contractSize}</td>
                    <td className={entry.profitLoss >= 0 ? 'text-success' : 'text-danger'}>
                      {parseFloat(entry.profitLoss).toFixed(2)}
                    </td>
                    <td>{entry.comments}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => startEditing(entry)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteEntry(entry._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No entries found for today</td>
            </tr>
          )}
        </tbody>
      </table>
      <h3>Total Profit/Loss: {totalProfitLoss}</h3>
    </div>
  );
};

export default TradingJournalList;
