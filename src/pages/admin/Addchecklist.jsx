import React, { useState, useEffect } from "react";

const AddChecklist = () => {
  const [checklist, setChecklist] = useState([]); // Store checklist items
  const [checklistItem, setChecklistItem] = useState(""); // New checklist item

  // Load checklist from localStorage or a JSON file on component mount
  useEffect(() => {
    const savedChecklist = localStorage.getItem("checklistItems");
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    } else {
      fetchChecklistFromFile();
    }
  }, []);

  // Fetch checklist from a local JSON file
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

  // Handle adding new checklist item
  const handleAddChecklistItem = () => {
    if (!checklistItem.trim()) return;

    const updatedChecklist = [...checklist, checklistItem];
    setChecklist(updatedChecklist);
    saveChecklistToLocalStorage(updatedChecklist);
    setChecklistItem(""); // Clear the input
  };

  // Move item up in the list
  const handleMoveUp = (index) => {
    if (index === 0) return; // Cannot move the first item up

    const updatedChecklist = [...checklist];
    [updatedChecklist[index - 1], updatedChecklist[index]] = [
      updatedChecklist[index],
      updatedChecklist[index - 1],
    ];

    setChecklist(updatedChecklist);
    saveChecklistToLocalStorage(updatedChecklist); // Save to localStorage
  };

  // Move item down in the list
  const handleMoveDown = (index) => {
    if (index === checklist.length - 1) return; // Cannot move the last item down

    const updatedChecklist = [...checklist];
    [updatedChecklist[index], updatedChecklist[index + 1]] = [
      updatedChecklist[index + 1],
      updatedChecklist[index],
    ];

    setChecklist(updatedChecklist);
    saveChecklistToLocalStorage(updatedChecklist); // Save to localStorage
  };

  // Handle file input for importing checklist data
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (Array.isArray(data)) {
            setChecklist(data);
            saveChecklistToLocalStorage(data);
          } else {
            alert("Invalid JSON file format. Expected an array.");
          }
        } catch (e) {
          alert("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  // Export checklist to a JSON file
  const handleExportToJSON = () => {
    const blob = new Blob([JSON.stringify(checklist, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "checklist.json";
    a.click();
    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="flex p-4 max-w-3xl mx-auto bg-white rounded shadow-lg space-x-4">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Trading Checklist</h2>

       

        <input
          type="text"
          name="checklistItem"
          value={checklistItem}
          onChange={(e) => setChecklistItem(e.target.value)}
          placeholder="Enter checklist item..."
          className="block w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleAddChecklistItem}
          className="bg-blue-500 text-white p-2 rounded w-full mb-4"
        >
          Add Item
        </button>

        {/* Export Button */}
        <button
          onClick={handleExportToJSON}
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          Export to JSON
        </button>
      </div>

      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-4">Checklist Items</h3>

        {/* Display checklist items */}
        {checklist.length === 0 ? (
          <p className="text-gray-500">No items in the checklist.</p>
        ) : (
          checklist.map((item, index) => (
            <div key={index} className="border p-4 mb-4 rounded shadow-sm">
              <p>{item}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleMoveUp(index)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Move Up
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Move Down
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddChecklist;
