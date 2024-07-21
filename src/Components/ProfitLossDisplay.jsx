// src/Components/ProfitLossDisplay.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchProfitLossData = async () => {
  const response = await fetch('http://localhost/php-react-admin/NOT.php');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProfitLossDisplay = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['profitLossData'],
    queryFn: fetchProfitLossData,
    refetchInterval: 10000, // Polling interval of 10 seconds
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <div>
      {data && data.success === 1 ? (
        <div className="flex flex-row space-x-4">
          <p><b>Count:</b> {data.count}</p>
          <p><b>Brokerage:</b> {data.count * 40}</p>
          <p class="flex"><b>Total Profit/Loss:</b><h2 class="text-red-500">{data.totalProfitLoss.toFixed(2)}</h2></p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ProfitLossDisplay;
