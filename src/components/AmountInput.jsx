import React from 'react';

const AmountInput = ({ value, onChange }) => {
  return (
    <input 
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Enter the amount"
    />
  );
};

export default AmountInput;