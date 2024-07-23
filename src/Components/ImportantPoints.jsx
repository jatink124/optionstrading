import React, { useState } from 'react';

function ImportantPoints() {

  const [date, setDate] = useState(new Date());

  // Optionally, format the date as needed
  const formattedDate = date.toLocaleDateString();



  return (
    <div>
   
   
        <div className="mt-4">
          <h6>Current Date: {formattedDate}</h6>
          <h4>Huge Downtrend Expected</h4>
        </div>
      
    </div>
  );
}

export default ImportantPoints;
