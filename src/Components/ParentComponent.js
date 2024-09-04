import React, { useState } from 'react';

import TotalProfitLossDisplay from './TotalProfitLossDisplay';

import TradingjournalListprice from './TradingjournalListprice';

const ParentComponent = () => {
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  return (
    <div>
      <TradingjournalListprice setTotalProfitLoss={setTotalProfitLoss} />
      <TotalProfitLossDisplay totalProfitLoss={totalProfitLoss} />
    </div>
  );
};

export default ParentComponent;
