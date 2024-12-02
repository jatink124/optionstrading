import React, { useEffect, useState } from "react";

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
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Web Development Agency Morning Plan</h1>
      {planData.map((section, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <h2 className="text-xl font-semibold text-blue-600">{section.title}</h2>
          <p className="text-gray-500 mb-2">{section.time}</p>
          <ul className="list-disc list-inside">
            {section.tasks.map((task, idx) => (
              <li key={idx} className="text-gray-700">
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Webdevmorningplan;
