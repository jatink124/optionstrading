import API_BASE_URL from './config';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Authentication from './Authentication';
import TradingChecklist from './TradingChecklist';
import TradingJournalList from './TradingjournalList';

const Tradingjournal = () => {
  const [authenticated, setAuthenticated] = useState(false);
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
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  const inputClass = "col-md-4 mb-3";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log('Form Data:', formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const entryPrice = parseFloat(formData.entryPrice);
    const exitPrice = parseFloat(formData.exitPrice);
    const contractSize = parseInt(formData.contractSize, 10);
  
    let multiplier;
    if (formData.assetType === 'banknifty') {
      multiplier = 105;
    } else if (formData.assetType === 'nifty') {
      multiplier = 100;
    } else {
      multiplier = 1;
    }
  
    const profitLoss = ((exitPrice - entryPrice) * multiplier) - 50;
    const profitLossString = profitLoss < 0 ? 'Loss' : 'Profit';
  
    const requestData = {
      dateTime: new Date(formData.dateTime),
      assetType: formData.assetType,
      optionType: formData.optionType,
      entryPrice: entryPrice,
      exitPrice: exitPrice,
      strategy: formData.strategy,
      reasonForEntry: formData.reasonForEntry,
      contractSize: contractSize,
      profitLoss: profitLoss,
      profitLossString: profitLossString,
      comments: formData.comments || "",
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/tradingjournal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result);
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
          profitLossString: '',
          comments: '',
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
              <option value="1">1 Lot</option>
              <option value="2">2 Lots</option>
              <option value="3">3 Lots</option>
              <option value="4">4 Lots</option>
              <option value="5">5 Lots</option>
            </select>
          </div>

          <div className={inputClass}>
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <TradingJournalList setTotalProfitLoss={setTotalProfitLoss} />
    </div>
  );
};

export default Tradingjournal;
