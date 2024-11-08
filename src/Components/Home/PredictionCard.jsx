import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PredictionCard = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('https://crud-2-6ptv.onrender.com/api/predictions')
      .then(response => {
        setPredictions(response.data);
      })
      .catch(error => {
        console.error('Error fetching predictions:', error);
      });
  }, []);

  // Get the date three days ago from today
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  // Filter predictions updated in the last 3 days
  const recentPredictions = predictions.filter(prediction =>
    new Date(prediction.updatedAt) > threeDaysAgo
  );

  return (
    <div className="flex flex-wrap justify-center">
      {recentPredictions.length > 0 ? (
        recentPredictions.map(prediction => (
          <div
            key={prediction._id}
            className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded-lg overflow-hidden m-4 bg-white"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {prediction.tradeAnalystName}
              </h3>
              <p className="text-gray-700">
                <strong>Nifty Prediction:</strong> {prediction.niftyPrediction}
              </p>
              <p className="text-gray-700">
                <strong>Bank Nifty Prediction:</strong> {prediction.bankniftyPrediction}
              </p>
              <p className="text-gray-500 text-sm mt-4">
                <strong>Updated At:</strong> {new Date(prediction.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-6">No recent predictions updated in the last 3 days.</p>
      )}
    </div>
  );
};

export default PredictionCard;
