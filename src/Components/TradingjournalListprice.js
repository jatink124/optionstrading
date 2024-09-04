import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';

const TradingjournalListprice = ({ setTotalProfitLoss }) => {
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
      const total = todayJournals.reduce((sum, entry) => sum + parseFloat(entry.profitLoss || 0), 0).toFixed(2);
      setTotalProfitLoss(total);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

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

  const totalProfitLoss = tradingJournals.reduce((total, entry) => total + parseFloat(entry.profitLoss || 0), 0).toFixed(2);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
   <></>
  );
};

export default TradingjournalListprice;
