import React from 'react';
import './HeaderHome.css';
import Avatar from '../../../asset/images/pic1.png';
import pic2 from '../../../asset/images/pic2.png';
import pic4 from '../../../asset/images/pic4.png';
import pic5 from '../../../asset/images/pic5.png';
import pic6 from '../../../asset/images/pic6.png';

const HeaderHome = () => {
  return (
    <div className='header-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 mt-5'>
            <div className='d-flex'>
              <div className='header-left-first '>
                <img src={pic2} alt='img' className='sudo-img' />
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
              <p>
                At PIAP Space, we believe that we can <br /> make Space and Earth cleaner, engineering,
                <br /> and delivering top-quality robotics <br /> solutions.
              </p>

              <button className='get-button'>GET START</button>
            </div>
          </div>

          <div className='col-12 col-md-6'>
            <div className='header-right '>
              <div className='headerRight-pic1 '>
                <img src={Avatar} alt='img' />
              </div>
              <div className='headerRight-pic2'>
                <img src={pic4} alt='' />
              </div>
              <div className='headerRight-pic3'>
                <img src={pic5} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
