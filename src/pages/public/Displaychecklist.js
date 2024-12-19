import React, { useState, useEffect } from "react";

const DisplayChecklist = () => {
  const [checklist, setChecklist] = useState([]); // Store the checklist data

  // Load checklist data from a local JSON file or localStorage on component mount
  useEffect(() => {
    const savedChecklist = localStorage.getItem("checklistItems");
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    } else {
      fetchChecklistFromFile();
    }
  }, []);

  // Fetch checklist from a JSON file
  const fetchChecklistFromFile = async () => {
    try {
      const response = await fetch("/json/checklist.json"); // Path to your local JSON file
      const data = await response.json();
      if (Array.isArray(data)) {
        setChecklist(data);
        saveChecklistToLocalStorage(data);
      } else {
        console.error("Invalid data format. Expected an array.");
      }
    } catch (error) {
      console.error("Error loading checklist data:", error);
    }
  };

  // Save checklist to localStorage
  const saveChecklistToLocalStorage = (data) => {
    localStorage.setItem("checklistItems", JSON.stringify(data));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Checklist Flowchart</h2>

      {checklist.length === 0 ? (
        <p className="text-gray-500 text-center">No items in the checklist.</p>
      ) : (
        <div className="relative flex items-center justify-center w-full h-[500px]">
        {/* Center Circle */}
<div className="relative z-10 flex items-center justify-center w-40 h-40 bg-green-200 border-4 border-green-400 rounded-full shadow-lg text-center mb-8">
  <p className="font-bold text-lg">Save money and learning = money</p>
</div>

          {/* Surrounding Squares */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl absolute">
            {checklist.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-32 bg-blue-100 border-2 border-blue-400 rounded shadow-md mx-auto"
              >
                <p className="text-center font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayChecklist;
