import React from 'react';
import Navbar from './Navbar';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='header-bg'></div>
      <div className='content text-shadow'>
        <h1>Mario de Wolf</h1>
        <p>Welcome to my portfolio site</p>
      </div>
    </header>
  );
};

export default Header;
