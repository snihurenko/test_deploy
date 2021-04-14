import React from 'react';

export const Dashboard = () => {

  return (
    <div>
      <p>Dashboard page</p>
      <p>{process.env.REACT_APP_CHECK_KEY}</p>
    </div>
  );
};
