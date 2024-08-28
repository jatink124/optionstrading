import React, { useEffect, useState } from 'react';

const PutCallCalculator = ({
  receivePutCount, receiveCallCount, selectedOptions1,
  selectedOptions2,
  selectedOptions3,
  selectedOptions4,
  selectedOptions5,
  selectedOptions6,
  selectedOptions7,
  selectedOptions8,
  // Add other selected options here...
}) => {
  const [putCount, setPut] = useState(0);
  const [callCount, setCall] = useState(0);
  // useEffect to calculate put and call when options change
  useEffect(() => {
    calculatePutCall(); 
   receivePutCount(putCount);
    receiveCallCount(callCount);
   
  }, [
    putCount,
   callCount,
    selectedOptions1,
    selectedOptions2,
    selectedOptions3,
    selectedOptions4,
    selectedOptions5,
    selectedOptions6,
    selectedOptions7,
    selectedOptions8,
    // Add other selected options here...
  ]);
  // Function to calculate put and call
  const calculatePutCall = () => {
    let putCount = 0;
    let callCount = 0;
  // Check if selectedOptions1 has values and is not empty
 debugger;
    if (selectedOptions1[0]?.value === 'Below') {
      putCount += 1;
    } else if (selectedOptions1[0]?.value === 'Above') {
      callCount += 1;
    }
 

    if (selectedOptions2[0]?.value === 'Yes') {
      putCount += 1;
    } else if (selectedOptions2[0]?.value === 'No') {
      callCount += 1;
    }
    if (selectedOptions3[0]?.value === 'Yes') {
        putCount += 1;
      } else if (selectedOptions3[0]?.value === 'No') {
        callCount += 1;
      }
      if (selectedOptions4[0]?.value === 'Downtrend') {
        putCount += 1;
      } else if (selectedOptions4[0]?.value === 'Uptrend') {
        callCount += 1;
      }
      if (selectedOptions5[0]?.value === 'Downtrend') {
        putCount += 1;
      } else if (selectedOptions5[0]?.value === 'Uptrend') {
        callCount += 1;
      }
      if (selectedOptions6[0]?.value === 'Below') {
        putCount += 1;
      } else if (selectedOptions6[0]?.value === 'Above') {
        callCount += 1;
      }
      if (selectedOptions7[0]?.value === 'Weak') {
        putCount += 1;
      } else if (selectedOptions7[0]?.value === 'Strong') {
        callCount += 1;
      }
      if (selectedOptions8[0]?.value === 'Gapdown') {
        putCount += 1;
      } else if (selectedOptions8[0]?.value === 'Gapup') {
        callCount += 1;
      }
    // Add other conditions for other dropdowns similarly...
  
    setPut(putCount);
    setCall(callCount);
  };



  return (
    <div>
      <div>Put: {putCount}</div>
      <div>Call: {callCount}</div>
    </div>
  );
};

export default PutCallCalculator;
