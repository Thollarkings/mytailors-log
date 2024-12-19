import React, { useState } from 'react';

const SearchBar = ({ measurements, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter measurements based on the search term
    const filteredMeasurements = measurements.filter(measurement =>
      measurement.name.toLowerCase().includes(value.toLowerCase())
    );

    // Call the onSearch prop to update the displayed measurements
    onSearch(filteredMeasurements);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;