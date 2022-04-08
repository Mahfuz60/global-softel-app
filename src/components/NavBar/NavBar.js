import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../asset/images/logo.png';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg nav-bg  '>
      <div className='container-fluid'>
        <div className=' logo-header'>
          <img src={logo} alt='' className='nav-logo' />
          <NavLink to='/' className='logo-title'>
            Space
          </NavLink>
        </div>
        <button
          className='navbar-toggler navbar-light'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon bg-light'></span>
        </button>
        <div className='collapse navbar-collapse nav-header' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/'>About Us</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/'>Story</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to=''>Blog</NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/' className='contactUs-nav'>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
