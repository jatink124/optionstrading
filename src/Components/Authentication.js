import React, { useState } from 'react';

const Authentication = ({ onAuthentication }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Check if the entered password is correct
    if (password === 'admin') {
      // Inform the parent component about successful authentication
      onAuthentication(true);
    } else {
      // Handle incorrect password
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <form onSubmit={handlePasswordSubmit}>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Enter Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Authentication;
