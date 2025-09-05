import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div>
      {result.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default ResultDisplay;