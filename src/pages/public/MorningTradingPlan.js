import React, { useEffect, useState } from "react";

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
   console.log(planData);
    return <div className="text-center text-red-600">Error: Invalid trading plan data structure.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{planData.title}</h1>
        
        {planData.sections.length > 0 ? (
          planData.sections.map((section, index) => (
            <section className="mb-6" key={index}>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {index + 1}. {section.title}
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {Array.isArray(section.items) && section.items.length > 0 ? (
                  section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))
                ) : (
                  <li>No items available.</li>
                )}
              </ul>
            </section>
          ))
        ) : (
          <div>No sections available in the trading plan.</div>
        )}

        {planData.motivationalReminder && (
          <div className="bg-blue-100 text-blue-800 font-medium p-4 rounded-md">
            <p><strong>Motivational Reminder:</strong> {planData.motivationalReminder}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorningTradingPlan;
