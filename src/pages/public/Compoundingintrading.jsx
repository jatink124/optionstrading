import React, { useState } from "react";

const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg relative max-w-3xl w-full shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Modal content */}
        <h3 className="text-xl font-semibold mb-4 text-center">Details</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const ExpandableCard = ({ title, onClick }) => {
  return (
    <div
      className="border border-gray-300 rounded-lg p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

const CompoundingInTrading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const cardData = [
    {
      title: "Simple vs. Compound",
      content: `If you make a 2% profit daily on your initial investment of Rs3,000 for 5 days without reinvesting profits, what is your total gain? Now, recalculate if you compound daily by reinvesting all profits. This question highlights the difference between simple interest (where profits are not reinvested) and compound interest (where profits are reinvested).`,
    },
    {
      title: "Daily Compounding",
      content: `How much would Rs3,000 grow to if you reinvested at a rate of 1% per day for 20 trading days? This demonstrates the basic formula for compound interest.`,
    },
    {
      title: "Loss Mitigation",
      content: `You experience a 2% loss on Day 1, followed by a 3% gain on Day 2. What's your net position after these two days, assuming you compound losses and gains?`,
    },
    {
      title: "Break-Even Point",
      content: `After losing 5% on your capital, how much percentage gain do you need to break even if you compound your returns?`,
    },
    {
      title: "Multiple Trades",
      content: `You trade three times a day, each trade yielding 0.5% profit. How much would your Rs3,000 grow in one trading day with compounding?`,
    },
    {
      title: "Effect of Volatility",
      content: `If the Nifty moves 1% up or down daily, how does this affect your capital if you alternate between buying and selling with perfect foresight for 10 days?`,
    },
    {
      title: "Margin and Compounding",
      content: `With a margin of 20%, you can control Rs15,000 worth of Nifty futures with your Rs3,000. If you gain 1% on this position daily, how much profit do you make after 5 days, considering compounding?`,
    },
    {
      title: "Profit Decay Over Time",
      content: `If you make 5% profit on Day 1 but then suffer losses of 1% per day for the next 4 days, what is your final position?`,
    },
    {
      title: "Compounding with Partial Investment",
      content: `You invest only half your capital daily at a 2% return, compounding daily for 5 days. What's your total return on the full Rs3,000?`,
    },
    {
      title: "Long-Term vs. Short-Term Compounding",
      content: `Compare the effect of compounding at 1% daily for 5 days versus 0.5% daily for 10 days with the same initial capital.`,
    },
  ];

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Compounding in Intraday Trading
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <ExpandableCard
            key={index}
            title={card.title}
            onClick={() => handleCardClick(card.content)}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default CompoundingInTrading;
