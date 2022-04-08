import React from 'react';
import './HeaderHome.css';
import pic1 from '../../../asset/images/pic1.png';
import pic2 from '../../../asset/images/pic2.png';
import pic4 from '../../../asset/images/pic4.png';
import pic5 from '../../../asset/images/pic5.png';
import pic6 from '../../../asset/images/pic6.png';

const HeaderHome = () => {
  return (
    <div className='header-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-sm-12 mt-5'>
            <div className='d-flex'>
              <div className='header-left-first me-3'>
                <img src={pic2} alt='' />
              </div>
              <div className='header-left-second d-flex'>
                <img src={pic6} alt='' className='mt-2 ms-3' />
                <h6 className='mt-3 ms-2'>Welcome to Stella</h6>
              </div>
            </div>

            <div className='header-bottom '>
              <h1>
                SPACE FOR <br /> EVERYONE
              </h1>
              <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>

              <button className=' get-button'>GET START</button>
            </div>
          </div>

          <div className='col-md-7 col-sm-12'>
            <div className='header-right'>
              <img src={pic1} alt='' className='headerPic1' />
            </div>
            <div className='headerPic2'>
              <img src={pic4} alt='' />
            </div>
            <div className='headerPic2'>
              <img src={pic5} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
