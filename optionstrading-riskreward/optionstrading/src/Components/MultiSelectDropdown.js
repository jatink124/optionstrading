import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import TableComponent from "./Table";
import PutCallCalculator from "./PutCallCalculator";
import Authentication from './Authentication';
const MultiSelectDropdowns = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };
  // All your options arrays
  const options = [
    { value: "Below", label: "Below" },
    { value: "Above", label: "Above" },
  ];
  const indextrade = [
    { value: "BankNifty", label: "BankNifty" },
    { value: "Nifty50", label: "Nifty50" },
  ];
  const pdh = [
    { value: "Below", label: "Below" },
    { value: "Above", label: "Above" },
    { value: "Close", label: "Close" },
  ];
  const closetoresistance = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const closetobase = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const overallTrend = [
    { value: "Uptrend", label: "Uptrend" },
    { value: "Downtrend", label: "Downtrend" },
    { value: "Sideways", label: "Sideways" },
  ];
  const intradayTrend = [
    { value: "Uptrend", label: "Uptrend" },
    { value: "Downtrend", label: "Downtrend" },
    { value: "Sideways", label: "Sideways" },
  ];
  const AboveVwap = [
    { value: "Below", label: "Below" },
    { value: "Above", label: "Above" },
  ];
  const Index_Strong_Weak = [
    { value: "Strong", label: "Strong" },
    { value: "Weak", label: "Weak" },
  ];
  const Market_Opening = [
    { value: "Gapup", label: "Gapup" },
    { value: "Gapdown", label: "Gapdown" },
    { value: "Sideways", label: "Sideways" },
  ];
  const PreviousDayEMAhappens = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  // ... repeat for selectedOptions4 through selectedOptions10
  const [selectedOptions, setSelectedOptions] = useState({
    selectedOptionsx: [],
    selectedOptions1: [],
    selectedOptions2: [],
    selectedOptions3: [],
    selectedOptions4: [],
    selectedOptions5: [],
    selectedOptions6: [],
    selectedOptions7: [],
    selectedOptions8: [],
    selectedOptions9: [],
    selectedOptions10: [],
    // ... Define other selected options similarly
  });
  const [selectedOptionsx, setSelectedOptionsx] = useState([]);
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
  const [selectedDateTime, setSelectedDateTime] = useState("");
   // State to control the visibility of TableComponent
   const [showTable, setShowTable] = useState(false);
   const [putCount, setPutCount] = useState(0);
   const [callCount, setCallCount] = useState(0);

   // Function to handle checkbox change
   const handleCheckboxChange = () => {
     setShowTable(!showTable); // Toggle the value of showTable
   };
 
   // Function to handle dropdown value changes and display the selected value

 const handleSelectChangex = (selectedValues) => {
  setSelectedOptionsx(selectedValues);
};
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
  const [selectedTime, setSelectedTime] = useState("");
  useEffect(() => {
    const selectedOptions = {
      selectedOptionsx,
      selectedOptions1,
      selectedOptions2,
      selectedOptions3,
      selectedOptions4,
      selectedOptions5,
      selectedOptions6,
      selectedOptions7,
      selectedOptions8,
      selectedOptions9,
      selectedOptions10,
      selectedDateTime,
      // ... Add other selected options similarly
    };
   
    const storedSelections = localStorage.getItem("selectedOptions");
    if (storedSelections) {
      const parsedSelections = JSON.parse(storedSelections);
      setSelectedOptionsx(parsedSelections.selectedOptionsx || []);
      setSelectedOptions1(parsedSelections.selectedOptions1 || []);
      setSelectedOptions2(parsedSelections.selectedOptions2 || []);
      setSelectedOptions3(parsedSelections.selectedOptions3 || []);
      setSelectedOptions4(parsedSelections.selectedOptions4 || []);
      setSelectedOptions5(parsedSelections.selectedOptions5 || []);
      setSelectedOptions6(parsedSelections.selectedOptions6 || []);
      setSelectedOptions7(parsedSelections.selectedOptions7 || []);
      setSelectedOptions8(parsedSelections.selectedOptions8 || []);
      setSelectedOptions9(parsedSelections.selectedOptions9 || []);
      setSelectedOptions10(parsedSelections.selectedOptions10 || []);
    }
  }, []);

  console.log(callCount);
console.log(putCount);
debugger;
  // const saveToLocalStorage = () => {
  //   localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  // };
// Function to save selected options to MySQL via Axios
const saveToMySQL = async () => {

  const indextrade= selectedOptionsx[0].value;
  const pdh= selectedOptions1[0].value;
  const closetoresistance=selectedOptions2[0].value;
  const closetobase= selectedOptions3[0].value;
  const overalltrend=selectedOptions4[0].value;
  const intradaytrend= selectedOptions5[0].value;
  const abovevwap=selectedOptions6[0].value;
  const indexstrongweak= selectedOptions7[0].value;
  const marketopening=selectedOptions8[0].value;
  const PreviousDayEMAhappens=selectedOptions9[0].value;
  const datetime=selectedDateTime;

  try {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint

    const response = await axios.post('http://localhost/php-react-admin/coptionsdata.php', {
    indextrade,
    pdh,
    closetoresistance,
    closetobase,
    overalltrend,
    intradaytrend,
    abovevwap,
    indexstrongweak,
    marketopening,
    PreviousDayEMAhappens,
    datetime,
    putCount,
    callCount,
      // Include any other data you want to save
    });
    
    // Handle the response as needed
    console.log("Data saved successfully:", response.data);
  } catch (error) {
    // Handle errors
    console.error("Error saving data:", error);
  }
};
  // Function to handle dropdown value changes and display the selected value
  const handleSelectChange = (selectedValues, identifier) => {
    // Update the selectedOptions state based on the identifier and selectedValues
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [identifier]: selectedValues,
    }));
  };

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };
  // Function to receive put count from child component
  const receivePutCount = (put) => {
 
    setPutCount(put);
  };

  // Function to receive call count from child component
  const receiveCallCount = (call) => {
 
    setCallCount(call);
  };
  return (
    <div className="container">
      {/* Your JSX for dropdowns and inputs */}
      <div className="container">
        <div className="row">
          {/* Adding Time Textbox */}
          <div className="col-md-4">
      <div>
        <strong>Select Date and Time:</strong>
      </div>
      <input
        type="datetime-local"
        value={selectedDateTime}
        onChange={handleDateTimeChange}
      />
      {/* Displaying selected date and time */}
      {selectedDateTime && <div>Selected Date and Time: {selectedDateTime}</div>}
    </div>
    <div className="col-md-4">
            <div>
              <strong>Index Trade:</strong>
            </div>
            <Select
              options={indextrade}
              isMulti
              value={selectedOptionsx} 
              onChange={handleSelectChangex}
            />

            {selectedOptions1.map((option) => (
              <div key={option.value}>{option.label}</div>
            ))}
          </div>
          <div className="col-md-4">
            <div>
              <strong>Previous Day High:</strong>
            </div>
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
            <div>
              <strong>CloseToResistance</strong>
            </div>
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
            <div>
              <strong>BelowToBase</strong>
            </div>
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
            <div>
              <strong>Overall Trend</strong>
            </div>
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
            <div>
              <strong>intradayTrend</strong>
            </div>
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
            <div>
              <strong>AboveVwap</strong>
            </div>
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
            <div>
              <strong>Index_Strong_Weak</strong>
            </div>
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
            <div>
              <strong>Market_Opening</strong>
            </div>
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
            <div>
              <strong>PreviousDayEMAhappens</strong>
            </div>
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
       
        </div>
        <div className="col-md-12 text-center mt-3">
          <button className="btn btn-primary" onClick={saveToMySQL}>
            Save Selections
          </button>
        </div>
      </div>
       {/* Display put and call using PutCallCalculator */}
       <div className="col-md-12 text-center mt-3">
        <PutCallCalculator
          selectedOptions1={selectedOptions1}
          selectedOptions2={selectedOptions2}
          selectedOptions3={selectedOptions3}
          selectedOptions4={selectedOptions4}
          selectedOptions5={selectedOptions5}
          selectedOptions6={selectedOptions6}
          selectedOptions7={selectedOptions7}
          selectedOptions8={selectedOptions8}
          selectedOptions9={selectedOptions9}
          receivePutCount={receivePutCount}
          receiveCallCount={receiveCallCount}
          // Pass other selected options as props...
        />
      </div>
        <div className="container mt-5">
      {!authenticated ? (
        // Show Authentication component if not authenticated
        <Authentication onAuthentication={handleAuthentication} />
      ) : (
        // Show Tradingjournaltable component if authenticated
        <>
           <div className="col-md-12 text-center mt-3">
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Show Table
        </label>
      </div>

      {/* Show TableComponent based on checkbox state */}
      {showTable && <TableComponent />}
        </>
      )}
    </div>
    </div>
  );
};

export default MultiSelectDropdowns;
