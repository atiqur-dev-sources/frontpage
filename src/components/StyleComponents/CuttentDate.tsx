import React from 'react';

const CurrentDate = () => {
  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const dateStyle = {
    fontWeight: 'bold',
    fontSize: 'larger',
  };

  const currentDate = new Date().toLocaleDateString('en-US', dateOptions);

  return <div style={dateStyle}>{currentDate}</div>;
};

export default CurrentDate;