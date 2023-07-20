// LogOut component

import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
        navigate('/');
      });
  };

  return (
    <>
      <div className='LogOut-button'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default LogOut;
