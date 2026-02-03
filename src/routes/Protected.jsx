import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const isAdmin = sessionStorage.getItem('isAdmin'); // Admin belgisini olish

  if (!isAdmin) {
    return <Navigate to={'/login'} replace={true} />;
  }

  return (
    <>
      {children}
    </>
  );
}

export default Protected;
