import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tradingjournaltable from './TradingjournalList';
import Authentication from './Authentication';
import TradingJournalList from './TradingjournalList';

const Tradingjournal = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  const [formData, setFormData] = useState({
    dateTime: '',
    assetType: '',
    optionType: '',
    entryPrice: '',
    exitPrice: '',
    strategy: '',
    reasonForEntry: '',
    contractSize: '',
    profitLoss: '',
    profitLossString: '',
    comments: '',
  });

  const inputClass = "col-md-4 mb-3";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    // Optional: Log the updated state for debugging purposes
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform profit/loss calculation
    const entryPrice = parseFloat(formData.entryPrice);
    const exitPrice = parseFloat(formData.exitPrice);
    const contractSize = parseInt(formData.contractSize);
    let multiplier;
  
    if (formData.assetType === 'banknifty') {
      multiplier = 105;
    } else if (formData.assetType === 'nifty') {
      multiplier = 100;
    } else {
      multiplier = 1;
    }

    const profitLoss = ((exitPrice - entryPrice) * multiplier) - 49;
    const profitLossString = profitLoss < 0 ? 'Loss' : 'Profit';

    setFormData((prevData) => ({
      ...prevData,
      profitLoss: profitLoss.toFixed(2),
      profitLossString,
    }));

    // Prepare data for API request
    const requestData = {
      dateTime: formData.dateTime,
      assetType: formData.assetType,
      optionType: formData.optionType,
      entryPrice: formData.entryPrice,
      exitPrice: formData.exitPrice,
      strategy: formData.strategy,
      reasonForEntry: formData.reasonForEntry,
      contractSize: formData.contractSize,
      profitLoss: profitLoss.toFixed(2),
      comments: formData.comments,
      profitLossString,
    };

    try {
      const response = await fetch('https://crud1-xoqf.onrender.com/tradingjournals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle successful response from the backend
        setFormData({
          dateTime: '',
          assetType: '',
          optionType: '',
          entryPrice: '',
          exitPrice: '',
          strategy: '',
          reasonForEntry: '',
          contractSize: '',
          profitLoss: '',
          comments: '',
          profitLossString: '',
        });
      } else {
        console.error('Failed to send data to the backend');
      }
    } catch (error) {
      console.error('Error occurred while sending data to the backend', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Options Trading Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className={inputClass}>
            <label htmlFor="dateTime" className="form-label">Date/Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className={inputClass}>
            <label htmlFor="assetType" className="form-label">Underlying Asset</label>
            <select
              className="form-control"
              id="assetType"
              name="assetType"
              value={formData.assetType}
              onChange={handleChange}
              required
            >
              <option value="">Select Asset Type</option>
              <option value="banknifty">Bank Nifty</option>
              <option value="nifty">Nifty</option>
            </select>
          </div>
          <div className={inputClass}>
            <label htmlFor="optionType" className="form-label">Option Type</label>
            <select
              className="form-control"
              id="optionType"
              name="optionType"
              value={formData.optionType}
              onChange={handleChange}
              required
            >
              <option value="">Select Option Type</option>
              <option value="call">Call</option>
              <option value="put">Put</option>
            </select>
          </div>
          <div className={inputClass}>
            <label htmlFor="entryPrice" className="form-label">Entry Price</label>
            <input
              type="text"
              className="form-control"
              id="entryPrice"
              name="entryPrice"
              value={formData.entryPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className={inputClass}>
            <label htmlFor="exitPrice" className="form-label">Exit Price</label>
            <input
              type="text"
              className="form-control"
              id="exitPrice"
              name="exitPrice"
              value={formData.exitPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className={inputClass}>
            <label htmlFor="strategy" className="form-label">Strategy</label>
            <input
              type="text"
              className="form-control"
              id="strategy"
              name="strategy"
              value={formData.strategy}
              onChange={handleChange}
              required
            />
          </div>
          <div className={inputClass}>
            <label htmlFor="reasonForEntry" className="form-label">Reason For Entry</label>
            <input
              type="text"
              className="form-control"
              id="reasonForEntry"
              name="reasonForEntry"
              value={formData.reasonForEntry}
              onChange={handleChange}
              required
            />
          </div>
          <div className={inputClass}>
            <label htmlFor="contractSize" className="form-label">Contract Size</label>
            <select
              className="form-control"
              id="contractSize"
              name="contractSize"
              value={formData.contractSize}
              onChange={handleChange}
              required
            >
              <option value="">Select Lot</option>
              <option value="1lot">1 lot</option>
              <option value="2lot">2 lots</option>
              <option value="3lot">3 lots</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="container mt-5">
        {!authenticated ? (
          <Authentication onAuthentication={handleAuthentication} />
        ) : (
          <>
            <h2>Options Trading Form</h2>
            <TradingJournalList/>
          </>
        )}
      </div>
    </div>
  );
};

export default Tradingjournal;
