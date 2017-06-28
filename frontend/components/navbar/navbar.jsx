import { NavLink, Link } from 'react-router-dom';
import React from 'react';

const handleClick = (e, logout) => {
  e.preventDefault();
  logout();
};

const NavBar = ({currentUser, logout}) => {
  let username = null;
  if (currentUser){
    username = currentUser.username;
  }
  return(
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-content'>
            <div className='navbar-left'>
              <NavLink to="/stream">
                <div className='navbar-logo'>
                  <img src={window.images.logo}/>
                </div>
              </NavLink>
              <NavLink to="/stream">
                <div className='navbar-home'>
                  Home</div>
              </NavLink>
            </div>
            <div className='navbar-right'>
              <NavLink to='/upload' className='upload-link'>
              <div>
                Upload
              </div>
            </NavLink>
            <NavLink className='user-link' to={`/${currentUser.username}`}>
              <div className='right-item user'>
                <div className='thumbnail-container'>
                <img className='thumbnail'
                  src={currentUser.image_url} />
                </div>
                <div className='username'>
                  {currentUser.username}
                </div>
              </div>
            </NavLink>
              <button className='logout-navbar right-item'
                onClick={(e) => handleClick(e, logout)}>Log Out!</button>
            </div>
          </div>
      </div>
    </div>

  );
};

export default NavBar;
