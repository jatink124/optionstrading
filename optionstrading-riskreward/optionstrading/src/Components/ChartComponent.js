// src/components/ChartComponent.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  // Prepare data for charts
  const chartData = {
    labels: data.map(entry => entry.tradeDay),
    datasets: [
      {
        label: 'Overall P&L',
        data: data.map(entry => entry.overallPL),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Net P&L',
        data: data.map(entry => entry.netPL),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      }
    ]
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Trade Performance</h3>
      <div className="mb-4">
        <Line data={chartData} />
      </div>
      <div>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default ChartComponent;
