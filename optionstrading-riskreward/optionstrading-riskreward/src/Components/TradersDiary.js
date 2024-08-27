import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, LineController } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, Title, Tooltip, Legend);

const TradersDiary = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/tradersDiary.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const groupedData = (data) => {
    let grouped = {};

    for (const month in data) {
      const monthData = data[month];
      if (Array.isArray(monthData)) {
        grouped[month] = monthData;
      } else if (monthData.Trades) {
        grouped[month] = monthData.Trades;
      }
    }

    return grouped;
  };

  const groupedEntries = groupedData(data);

  const chartData = (month) => {
    const entries = groupedEntries[month];
    const labels = entries.map(entry => entry["Trade Day"]);
    const overallPL = entries.map(entry => parseFloat(entry["Overall P&L"].replace('₹ ', '').replace(',', '')));
    const netPL = entries.map(entry => parseFloat(entry["Net P&L"].replace('₹ ', '').replace(',', '')));
    const numberOfTrades = entries.map(entry => entry["No. of Trades"]);

    return {
      labels,
      datasets: [
        {
          label: 'Overall P&L',
          data: overallPL,
          type: 'line',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          yAxisID: 'y1',
        },
        {
          label: 'Net P&L',
          data: netPL,
          type: 'line',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          yAxisID: 'y1',
        },
        {
          label: 'No. of Trades',
          data: numberOfTrades,
          type: 'bar',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          yAxisID: 'y0',
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            if (context.dataset.label === 'No. of Trades') {
              return `${context.dataset.label}: ${context.raw}`;
            } else {
              return `${context.dataset.label}: ₹ ${context.raw.toFixed(2)}`;
            }
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Trade Day',
        },
      },
      y0: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Number of Trades',
        },
        beginAtZero: true,
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'P&L',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Traders Diary Entries</h2>
      {Object.keys(groupedEntries).map(month => (
        <div key={month} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{month}</h3>

          <Bar
            data={chartData(month)}
            options={chartOptions}
          />

          <table className="min-w-full bg-white border border-gray-200 mt-4">
            <thead>
              <tr>
                <th className="py-2 border-b">Trade Day</th>
                <th className="py-2 border-b">No. of Trades</th>
                <th className="py-2 border-b">Overall P&L</th>
                <th className="py-2 border-b">Net P&L</th>
                <th className="py-2 border-b">Status</th>
                <th className="py-2 border-b">Transaction</th>
              </tr>
            </thead>
            <tbody>
              {groupedEntries[month].map((entry, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{entry["Trade Day"]}</td>
                  <td className="border px-4 py-2">{entry["No. of Trades"]}</td>
                  <td className="border px-4 py-2">{entry["Overall P&L"]}</td>
                  <td className="border px-4 py-2">{entry["Net P&L"]}</td>
                  <td className="border px-4 py-2">{entry["Status"]}</td>
                  <td className="border px-4 py-2">{entry["Transaction"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TradersDiary;