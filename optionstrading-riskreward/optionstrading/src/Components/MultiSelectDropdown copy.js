import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
const MultiSelectDropdowns = () => {
  const options = [
    { value: 'Below', label: 'Below' },
    { value: 'Above', label: 'Above' },
];
  const pdh = [
    { value: 'Below', label: 'Below' },
    { value: 'Above', label: 'Above' },
    { value: 'Close', label: 'Close' },
];
  const closetoresistance = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
];
const closetobase = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];
const overallTrend = [
  { value: 'Uptrend', label: 'Uptrend' },
  { value: 'Downtrend', label: 'Downtrend' },
  { value: 'Sideways', label: 'Sideways' },
];
const intradayTrend = [
  { value: 'Uptrend', label: 'Uptrend' },
  { value: 'Downtrend', label: 'Downtrend' },
  { value: 'Sideways', label: 'Sideways' },
];
const AboveVwap = [
  { value: 'Below', label: 'Below' },
  { value: 'Above', label: 'Above' },
];
const Index_Strong_Weak = [
  { value: 'Strong', label: 'Strong' },
  { value: 'Weak', label: 'Weak' },
];
const Market_Opening = [
  { value: 'Gapup', label: 'Gapup' },
  { value: 'Gapdown', label: 'Gapdown' },
  { value: 'Sideways', label: 'Sideways' },
];
const PreviousDayEMAhappens = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [selectedOptions5, setSelectedOptions5] = useState([]);
  const [selectedOptions6, setSelectedOptions6] = useState([]);
  const [selectedOptions7, setSelectedOptions7] = useState([]);
  const [selectedOptions8, setSelectedOptions8] = useState([]);
  const [selectedOptions9, setSelectedOptions9] = useState([]);
  const [selectedOptions10, setSelectedOptions10] = useState([]);
  // ... repeat for selectedOptions4 through selectedOptions10

  const handleSelectChange1 = (selectedValues) => {
    setSelectedOptions1(selectedValues);
  };
  const handleSelectChange2 = (selectedValues) => {
    setSelectedOptions2(selectedValues);
  };
  const handleSelectChange3 = (selectedValues) => {
    setSelectedOptions3(selectedValues);
  };
  const handleSelectChange4 = (selectedValues) => {
    setSelectedOptions4(selectedValues);
  };
  const handleSelectChange5 = (selectedValues) => {
    setSelectedOptions5(selectedValues);
  };
  const handleSelectChange6 = (selectedValues) => {
    setSelectedOptions6(selectedValues);
  };
  const handleSelectChange7 = (selectedValues) => {
    setSelectedOptions7(selectedValues);
  };
  const handleSelectChange8 = (selectedValues) => {
    setSelectedOptions8(selectedValues);
  };
  const handleSelectChange9 = (selectedValues) => {
    setSelectedOptions9(selectedValues);
  };
  const handleSelectChange10 = (selectedValues) => {
    setSelectedOptions10(selectedValues);
  };
  // ... repeat for handleSelectChange4 through handleSelectChange10
  const [selectedTime, setSelectedTime] = useState('');
 // Function to send data to the backend
 const saveSelectionsToDatabase = async () => {
  try {
    const data = {
      selectedOptions1,
      selectedOptions2,
      selectedOptions3,
      // ... (continue for all selectedOptions)
      selectedTime,
    };

    // Sending a POST request to your backend API endpoint
    await axios.post('/api/saveSelections', data);
    
    // Clearing selected options after saving to the database (optional)
    setSelectedOptions1([]);
    setSelectedOptions2([]);
    // ... (continue for all setSelectedOptions)
    setSelectedTime('');
    
    // Notify the user about successful data submission (optional)
    alert('Selections saved successfully!');
  } catch (error) {
    // Handle errors, if any
    console.error('Error while saving selections:', error);
    // Notify the user about the error (optional)
    alert('Error while saving selections. Please try again.');
  }
};
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  return (
    <div className="container">
    <div className="row">
         {/* Adding Time Textbox */}
         <div className="col-md-4">
        <div><strong>Select Time:</strong></div>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
        {/* Displaying selected time */}
        {selectedTime && (
          <div>Selected Time: {selectedTime}</div>
        )}
      </div>
      <div className="col-md-4">
      <div><strong>Previous Day High:</strong></div>
        <Select
          options={pdh}
          isMulti
          value={selectedOptions1}
          onChange={handleSelectChange1}
        />
      
        {selectedOptions1.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>

      <div className="col-md-4">
      <div><strong>CloseToResistance</strong></div>
        <Select
          options={closetoresistance}
          isMulti
          value={selectedOptions2}
          onChange={handleSelectChange2}
        />
 
        {selectedOptions2.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>CloseToBase</strong></div>
        <Select
          options={closetobase}
          isMulti
          value={selectedOptions3}
          onChange={handleSelectChange3}
        />
 
        {selectedOptions3.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>Overall Trend</strong></div>
        <Select
          options={overallTrend}
          isMulti
          value={selectedOptions4}
          onChange={handleSelectChange4}
        />
      
        {selectedOptions4.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>intradayTrend</strong></div>
        <Select
          options={intradayTrend}
          isMulti
          value={selectedOptions5}
          onChange={handleSelectChange5}
        />
      
        {selectedOptions5.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>AboveVwap</strong></div>
        <Select
          options={AboveVwap}
          isMulti
          value={selectedOptions6}
          onChange={handleSelectChange6}
        />
       
        {selectedOptions6.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>Index_Strong_Weak</strong></div>
        <Select
          options={Index_Strong_Weak}
          isMulti
          value={selectedOptions7}
          onChange={handleSelectChange7}
        />
       
        {selectedOptions7.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>

      <div className="col-md-4">
      <div><strong>Market_Opening</strong></div>
        <Select
          options={Market_Opening}
          isMulti
          value={selectedOptions8}
          onChange={handleSelectChange8}
        />
       
        {selectedOptions8.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
      <div><strong>PreviousDayEMAhappens</strong></div>
        <Select
          options={PreviousDayEMAhappens}
          isMulti
          value={selectedOptions9}
          onChange={handleSelectChange9}
        />
    
        {selectedOptions9.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
        {/* Repeat similar structure for Dropdowns 2 through 5 */}
        {/* Dropdown 8 */}
        <Select
          options={options}
          isMulti
          value={selectedOptions8}
          onChange={handleSelectChange8}
        />
        <div>Selected Options:</div>
        {selectedOptions8.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
        {/* Repeat similar structure for Dropdowns 2 through 5 */}
        {/* Dropdown 9 */}
        <Select
          options={options}
          isMulti
          value={selectedOptions9}
          onChange={handleSelectChange9}
        />
        <div>Selected Options:</div>
        {selectedOptions9.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
      <div className="col-md-4">
        {/* Repeat similar structure for Dropdowns 2 through 5 */}
        {/* Dropdown 10 */}
        <Select
          options={options}
          isMulti
          value={selectedOptions10}
          onChange={handleSelectChange10}
        />
        <div>Selected Options:</div>
        {selectedOptions10.map((option) => (
          <div key={option.value}>{option.label}</div>
        ))}
      </div>
    </div>
    <div className="col-md-12 text-center mt-3">
        <button onClick={saveSelectionsToDatabase} className="btn btn-primary">
          Save Selections
        </button>
      </div>
  </div>
  );
};

export default MultiSelectDropdowns;
