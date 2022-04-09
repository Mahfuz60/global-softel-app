import React from 'react';
import './Footer.css';
import logo from '../../asset/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-bg ' style={{ fontSize: '10px' }}>
      <div className='container pt-5'>
        <div className='footer-top'>
          <h2>Newsletter</h2>
          <div>
            <input style={{ border: '1px solid gray' }} type='text' className=' footer-input' placeholder='Email Address' />
            <button className='footer-button'>Subscribe</button>
          </div>
        </div>
        <div className='row mt-5 py-3'>
          <div className='col-md-4 col-12'>
            <div className='d-flex '>
              <img src={logo} alt='' />
              <h4 className='text-light ps-3 pt-2'>Space</h4>
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <p className='footer-reserve' >
              Space @{new Date().getFullYear()}, All rights reserved.
            </p>
          </div>
          <div className='col-md-4 col-12'>
            <div className='social-icon'>
              <FontAwesomeIcon icon={faTwitter} className='me-5' />
              <FontAwesomeIcon icon={faFacebook} className='me-5' />

              <FontAwesomeIcon icon={faLinkedin} className='me-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
