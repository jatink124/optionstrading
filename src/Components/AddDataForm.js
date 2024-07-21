import React, { useState, useEffect } from 'react';

const AddDataForm = () => {
  const [index, setIndex] = useState('');
  const [r1, setR1] = useState('');
  const [r2, setR2] = useState('');
  const [base1, setBase1] = useState('');
  const [base2, setBase2] = useState('');
  const [dataList, setDataList] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      index,
      r1,
      r2,
      base1,
      base2,
    };
    // Update local state
    setDataList([...dataList, newData]);
    // Save to localStorage
    localStorage.setItem('dataList', JSON.stringify([...dataList, newData]));
    console.log('Data added:', newData);
    // Reset form fields
    setIndex('');
    setR1('');
    setR2('');
    setBase1('');
    setBase2('');
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('dataList');
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={index} onChange={(e) => setIndex(e.target.value)} placeholder="Index" required />
        <input type="text" value={r1} onChange={(e) => setR1(e.target.value)} placeholder="R1" required />
        <input type="text" value={r2} onChange={(e) => setR2(e.target.value)} placeholder="R2" required />
        <input type="text" value={base1} onChange={(e) => setBase1(e.target.value)} placeholder="Base1" required />
        <input type="text" value={base2} onChange={(e) => setBase2(e.target.value)} placeholder="Base2" required />
        <button type="submit">Add</button>
      </form>

      {/* Display added data */}
      <div>
        <h3>Added Data:</h3>
        <ul>
          {dataList.map((item, idx) => (
            <li key={idx}>
              Index: {item.index}, R1: {item.r1}, R2: {item.r2}, Base1: {item.base1}, Base2: {item.base2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddDataForm;
