import React, { useState, useEffect } from 'react';
import StrategyList from '../../Components/StrategyList';

const Showotstrategy = () => {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    // Fetch strategies from the strategies.json file
    fetch('/strategies.json')
      .then((response) => response.json())
      .then((data) => {
        setStrategies(data);
      })
      .catch((error) => {
        console.error("Error fetching strategies:", error);
      });
  }, []);

  return (
    <div className="flex p-8 max-w-6xl mx-auto bg-white rounded shadow-lg space-x-8 h-[600px]">
      {/* Strategy List Section */}
      <div className="w-full">
        <StrategyList strategies={strategies} />
      </div>
    </div>
  );
};

export default Showotstrategy;
