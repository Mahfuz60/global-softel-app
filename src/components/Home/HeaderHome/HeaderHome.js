import React from 'react';
import './HeaderHome.css';
import pic1 from '../../../asset/images/pic1.png';

const HeaderHome = () => {
  return (
    <div className='header-bg'>
      <div className='row'>
        <div className='col-md-5 col-sm-12'></div>
        <div className='col-md-7 col-sm-12'>
          <div className='header-right'>
          <img src={pic1} alt='' className='headerPic1'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
