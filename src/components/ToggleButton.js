import React from 'react';

const ToggleButton = ({ onToggle }) => (
  <button className="toggle-button" onClick={onToggle}>
    Data Log Book
  </button>
);

export default ToggleButton;