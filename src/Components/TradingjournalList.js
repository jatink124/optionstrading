import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';

const TradingJournalList = () => {
  // State hooks for managing journal entries, loading status, errors, and editing
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

  // Fetch trading journals when the component mounts
  useEffect(() => {
    fetchTradingJournals();
  }, []);

  // Function to fetch trading journals from the API
  const fetchTradingJournals = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setTradingJournals(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Prepare the form for editing an entry
  const handleEditClick = (entry) => {
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

  // Handle changes in the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Submit the edited data to the API
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal/${isEditing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData),
      });
      if (response.ok) {
        fetchTradingJournals();
        setIsEditing(null);
      } else throw new Error('Failed to update entry');
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle deletion of an entry
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) fetchTradingJournals();
      else throw new Error('Failed to delete entry');
    } catch (error) {
      setError(error.message);
    }
  };

  // Calculate total profit/loss
  const totalProfitLoss = tradingJournals.reduce((total, entry) => total + parseFloat(entry.profitLoss || 0), 0);

  // Render loading, error, or the list of trading journals
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                        onChange={handleEditChange}
                      />
                    </td>
                    <td><input type="text" name="assetType" value={editFormData.assetType} onChange={handleEditChange} /></td>
                    <td><input type="text" name="optionType" value={editFormData.optionType} onChange={handleEditChange} /></td>
                    <td><input type="number" name="entryPrice" value={editFormData.entryPrice} onChange={handleEditChange} /></td>
                    <td><input type="number" name="exitPrice" value={editFormData.exitPrice} onChange={handleEditChange} /></td>
                    <td><input type="text" name="strategy" value={editFormData.strategy} onChange={handleEditChange} /></td>
                    <td><input type="text" name="reasonForEntry" value={editFormData.reasonForEntry} onChange={handleEditChange} /></td>
                    <td><input type="number" name="contractSize" value={editFormData.contractSize} onChange={handleEditChange} /></td>
                    <td><input type="number" name="profitLoss" value={editFormData.profitLoss} onChange={handleEditChange} /></td>
                    <td><input type="text" name="comments" value={editFormData.comments} onChange={handleEditChange} /></td>
                    <td>
                      <button className="btn btn-success" onClick={handleEditSubmit}>Save</button>
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
                      {entry.profitLoss}
                    </td>
                    <td>{entry.comments}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleEditClick(entry)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDeleteClick(entry._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No entries found</td>
            </tr>
          )}
        </tbody>
      </table>
      <h3>Total Profit/Loss: {totalProfitLoss}</h3>
    </div>
  );
};

export default TradingJournalList;
