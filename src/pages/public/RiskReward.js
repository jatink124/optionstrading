import React, { useState } from 'react';

function RiskReward() {
  const [optionPrice, setOptionPrice] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [stopLossPrice, setStopLossPrice] = useState('');
  const [riskRewardRatio, setRiskRewardRatio] = useState('');

  function handleOptionPriceChange(event) {
    setOptionPrice(event.target.value);
  }

  function handleTargetPriceChange(event) {
    setTargetPrice(event.target.value);
  }

  function handleStopLossPriceChange(event) {
    setStopLossPrice(event.target.value);
  }

  function handleCalculateButtonClick() {
    const risk = Math.abs(optionPrice - stopLossPrice);
    const reward = Math.abs(targetPrice - optionPrice);
    const ratio = reward / risk;
    setRiskRewardRatio(ratio.toFixed(2));
  }

  return (
    <div className="App">
      <h1>Option Risk-Reward Ratio Calculator</h1>
      <label>Option Price:</label>
      <input type="number" value={optionPrice} onChange={handleOptionPriceChange} />
      <br />
      <label>Target Price:</label>
      <input type="number" value={targetPrice} onChange={handleTargetPriceChange} />
      <br />
      <label>Stop Loss Price:</label>
      <input type="number" value={stopLossPrice} onChange={handleStopLossPriceChange} />
      <br />
      <button onClick={handleCalculateButtonClick}>Calculate</button>
      <br />
      <label>Risk-Reward Ratio:</label>
      <input type="text" value={riskRewardRatio} readOnly />
    </div>
  );
}

export default RiskReward;