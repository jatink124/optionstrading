import React from 'react';

function ThingsToAchieveCard() {
  const achievements = [
    "Take Home in Chandigarh",
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Things to Achieve</h2>
      <ul className="list-disc pl-4">
        {achievements.map((item, index) => (
          <li
            key={index}
            className={`text-gray-700 ${item === "Take Home in Chandigarh" ? "bg-yellow-200 font-bold p-1 rounded" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThingsToAchieveCard;
