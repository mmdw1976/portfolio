import React from 'react';
import Navbar from './Navbar';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='header-bg'></div>
      <div className='content text-shadow'>
        <h1>Header</h1>
        <p>Welcome to my react page</p>
      </div>
    </header>
  );
};

export default Header;
