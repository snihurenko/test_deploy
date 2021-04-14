import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthenticatedRouter from './AuthenticatedRouter';
import UnauthenticatedRouter from './UnauthenticatedRouter';

export const RootRouter = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </BrowserRouter>
  );
};
