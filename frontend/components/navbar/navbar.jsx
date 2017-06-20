import React from 'react';

const handleClick = (e, logout) => {
  e.preventDefault();
  logout();
};

const NavBar = ({currentUser, logout}) => {
  return(
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-content'>
            <div className='navbar-left'>
              <div className='navbar-logo'>BeatMachine</div>
            </div>
            <div className='navbar-right'>
              <div className='upload-link'>
                Upload
              </div>
              <div className='username'>
                Welcome, {currentUser.username}
              </div>
              <button className='logout-navbar'
                onClick={(e) => handleClick(e, logout)}>Log Out!</button>
            </div>
          </div>
      </div>
    </div>

  );
};

export default NavBar;
