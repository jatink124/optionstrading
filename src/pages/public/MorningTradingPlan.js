import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const MorningTradingPlan = () => {
  const [planData, setPlanData] = useState(null);

  // Fetch data from JSON
  useEffect(() => {
    fetch("/json/tradingPlanData.json")
      .then((response) => response.json())
      .then((data) => setPlanData(data))
      .catch((error) => console.error("Error fetching plan data:", error));
  }, []);

  if (!planData) {
    return <div className="text-center text-gray-600">Loading trading plan...</div>;
  }

  // Handle empty or malformed data
  if (!Array.isArray(planData.sections)) {
    return (
      <div className="text-center text-red-600">
        Error: Invalid trading plan data structure.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8 underline">
        🌟 Morning Trading Plan
      </h1>

      {planData.motivationalReminder && (
        <div className="bg-blue-100 text-blue-800 font-medium p-4 rounded-lg mb-6 max-w-3xl mx-auto text-center">
          <p>
            <strong className="underline">Motivational Reminder:</strong>{" "}
            <span className="bg-yellow-200 px-1">
              {planData.motivationalReminder}
            </span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planData.sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3 underline">
              {index + 1}. {section.title}
            </h2>
            <ul className="space-y-2">
              {Array.isArray(section.items) && section.items.length > 0 ? (
                section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span className="bg-yellow-100 px-1">{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No items available.</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorningTradingPlan;
