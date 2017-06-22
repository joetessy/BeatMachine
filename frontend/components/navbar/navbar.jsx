import { Link } from 'react-router-dom';
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
              <Link to="/">
                <div className='navbar-logo'>BeatMachine</div>
              </Link>
            </div>
            <div className='navbar-right'>
              <Link to='/upload'>
              <div className='upload-link'>
                Upload
              </div>
            </Link>
              <div className='right-item user'>
                <Link to={`/${currentUser.username}`}>
                <div className='thumbnail-container'>
                <img className='thumbnail'
                  src={currentUser.image_url} />
                </div>


                <div className='username'>
                  {currentUser.username}
                </div>
                </Link>
              </div>
              <button className='logout-navbar right-item'
                onClick={(e) => handleClick(e, logout)}>Log Out!</button>
            </div>
          </div>
      </div>
    </div>

  );
};

export default NavBar;
