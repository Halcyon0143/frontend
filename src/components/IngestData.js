// src/components/IngestData.js
import React, { useState } from 'react';
import axios from 'axios';

const IngestData = () => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    total_spends: '',
    last_visit: '',
    visit_count: '',
  });

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/ingest/customer', customerData);
      alert('Customer data ingested successfully');
    } catch (error) {
      console.error('Error ingesting customer data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingest Customer Data</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="number" name="total_spends" placeholder="Total Spends" onChange={handleChange} />
      <input type="datetime-local" name="last_visit" placeholder="Last Visit" onChange={handleChange} />
      <input type="number" name="visit_count" placeholder="Visit Count" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IngestData;
