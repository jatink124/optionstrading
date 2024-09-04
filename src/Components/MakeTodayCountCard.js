// src/components/ActivityCard.js
import React, { useEffect, useState } from 'react';
import activitiesData from '../activities.json'; // Import the JSON data

const MakeTodayCountCard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Set activities from JSON data
    setActivities(activitiesData);
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Make Today Count: Activity Ideas</h2>
      <ul className="list-disc pl-5">
        {activities.map(activity => (
          <li key={activity.id} className="mb-2 text-gray-700">
            {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MakeTodayCountCard;
