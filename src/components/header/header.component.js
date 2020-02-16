import React from 'react';
import './header.styles.css'

const Header = () => {

  return (
    <div className='header-container'>
     <div className='logo-container'>
         <span className='logo'> Bonic </span>
     </div>

     <div className='header-options'>
      <span className='option'>
       Home
      </span>
         <span className='option'>
       Services
      </span>
         <span className='option'>
        FAQ
      </span>
         <span className='option'>
        About
      </span>
     </div>


    </div>
  );

};

export default Header;