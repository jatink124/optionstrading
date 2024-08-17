import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tradingjournaltable from './Tradingjournaltable';
import Authentication from './Authentication';
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
    reasonforentry: '',
    contractSize: '',
    profitLoss: '',
    profitLossString:'',
    comments: '',
  });

  const inputClass = "col-md-4 mb-3";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  useEffect(() => {
    // Log the updated state after it has been updated
 
  }, [formData]); // Run this effect whenever formData changes
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform calculation based on conditions
    const entryPrice = parseFloat(formData.entryPrice);
    const exitPrice = parseFloat(formData.exitPrice);
    const contractSize = parseInt(formData.contractSize);
    let multiplier;
  
    if (formData.assetType === 'banknifty') {
      multiplier = 105;
    } else if (formData.assetType === 'nifty') {
      multiplier = 100;
    } else {
      // Default multiplier if assetType is neither 'banknifty' nor 'nifty'
      multiplier = 1;
    }

    const profitLoss = ((exitPrice - entryPrice) * multiplier )-49;
 
    const profitLossString = profitLoss < 0 ? 'Loss' : 'Profit';
   // Update the state with the calculated profit/loss and profit/loss string
  setFormData((prevData) => ({
    ...prevData,
    profitLoss: profitLoss.toFixed(2),
    profitLossString,
   
  }));

    
  
    // Prepare data to be sent to the PHP backend
    const requestData = {
      dateTime: formData.dateTime,
      assetType: formData.assetType,
      optionType: formData.optionType,
      entryPrice: formData.entryPrice,
      exitPrice: formData.exitPrice,
      strategy: formData.strategy,
      reasonForEntry: formData.reasonforentry,
      contractSize: formData.contractSize,
      profitLoss: profitLoss.toFixed(2),
      comments: formData.comments,
      pls:profitLossString,
    };
 
    try {
      const response = await fetch('http://localhost/php-react-admin/addtradingjournal.php', {
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
          // Reset all variables after successful submission
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
        // Handle error response from the backend
      }
    } catch (error) {
      console.error('Error occurred while sending data to the backend', error);
      // Handle network or other errors
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
            <label htmlFor="reasonforentry" className="form-label">Reason For Entry</label>
            <input
              type="text"
              className="form-control"
              id="reasonforentry"
              name="reasonforentry"
              value={formData.reasonforentry}
              onChange={handleChange}
              required
            />
          </div>
          <div className={inputClass}>
            <label htmlFor="optionType" className="form-label">Underlying Asset</label>
            <select
              className="form-control"
              id="contractSize"
              name="contractSize"
              value={formData.contractSize}
              onChange={handleChange}
              required
            >
              <option value="">Select Lot</option>
              <option value="1lot">1lot</option>
              <option value="2lot">2lot</option>
              <option value="3lot">3lot</option>
            </select>
          </div>
         
        </div>

    
     
          {/* Continue adding input fields for other form elements similarly */}
    

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="container mt-5">
      {!authenticated ? (
        // Show Authentication component if not authenticated
        <Authentication onAuthentication={handleAuthentication} />
      ) : (
        // Show Tradingjournaltable component if authenticated
        <>
          <h2>Options Trading Form</h2>
          {/* The rest of your form goes here */}
          <Tradingjournaltable />
        </>
      )}
    </div>
    </div>
  );
};

export default Tradingjournal;
