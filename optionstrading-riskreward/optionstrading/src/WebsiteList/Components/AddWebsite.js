import React, { useState } from 'react';
import axios from 'axios';

function AddWebsite() {
  const [website, setWebsite] = useState({ name: '', url: '' });

  const handleChange = (e) => {
    setWebsite({ ...website, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/websites', website); // Adjust URL to your API endpoint
      // Handle success, e.g., clear form or show a success message
    } catch (error) {
      console.error('Error adding website:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={website.name}
        onChange={handleChange}
        placeholder="Website Name"
        required
      />
      <input
        type="url"
        name="url"
        value={website.url}
        onChange={handleChange}
        placeholder="Website URL"
        required
      />
      <button type="submit">Add Website</button>
    </form>
  );
}

export default AddWebsite;
