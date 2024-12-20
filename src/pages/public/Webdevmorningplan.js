import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Webdevmorningplan = () => {
  const [planData, setPlanData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch("/json/webdevplan.json")
      .then((response) => response.json())
      .then((data) => setPlanData(data.sections))
      .catch((error) => console.error("Error fetching plan data:", error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        🌟 Web Development Agency Morning Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planData.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {section.title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">⏰ {section.time}</p>
            <ul className="space-y-2">
              {section.tasks.map((task, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <FaCheckCircle className="text-green-500 mr-3" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webdevmorningplan;
