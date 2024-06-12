// src/components/CreateAudience.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateAudience = () => {
  const [rules, setRules] = useState({
    spend_threshold: '',
    visit_count: '',
    last_visit: '',
  });
  const [audienceSize, setAudienceSize] = useState(null);

  const handleChange = (e) => {
    setRules({
      ...rules,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckAudienceSize = async () => {
    try {
      const response = await axios.post('http://localhost:5000/check_audience_size', rules);
      setAudienceSize(response.data.audience_size);
    } catch (error) {
      console.error('Error checking audience size:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/save_campaign', rules);
      alert('Audience created successfully');
    } catch (error) {
      console.error('Error creating audience:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Audience</h2>
      <input type="number" name="spend_threshold" placeholder="Total Spends >" onChange={handleChange} />
      <input type="number" name="visit_count" placeholder="Max Visits" onChange={handleChange} />
      <input type="number" name="last_visit" placeholder="Not Visited in Last (months)" onChange={handleChange} />
      <button type="button" onClick={handleCheckAudienceSize}>Check Audience Size</button>
      {audienceSize !== null && <p>Audience Size: {audienceSize}</p>}
      <button type="submit">Create Audience</button>
    </form>
  );
};

export default CreateAudience;
