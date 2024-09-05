import React, { useState } from 'react';
import TradingjournalListprice from './TradingjournalListprice';
import TotalProfitLossDisplay from './TotalProfitLossDisplay';

const ParentComponent = () => {
  const [totalProfitLoss, setTotalProfitLoss] = useState(null);
  const [recordCount, setRecordCount] = useState(0);

  return (
    <div>
      <TradingjournalListprice setTotalProfitLoss={setTotalProfitLoss} setRecordCount={setRecordCount} />
      <TotalProfitLossDisplay totalProfitLoss={totalProfitLoss} recordCount={recordCount} />
    </div>
  );
};

export default ParentComponent;
