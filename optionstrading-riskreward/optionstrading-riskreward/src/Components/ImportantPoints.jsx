
import React, { useState } from 'react';
import PredictionRead from './PredictionRead';

function ImportantPoints() {
  const [date, setDate] = useState(new Date());

  // Optionally, format the date as needed
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
   <PredictionRead/>
     </div>
  );
}

export default ImportantPoints;
