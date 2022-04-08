import React from 'react';
import './Discover.css';
import { DiscoverData } from './DiscoverData';
import DiscoverDetails from './DiscoverDetails';

const Discover = () => {
  return (
    <>
      <div className='discover-bg '>
        <div className='container pt-5'>
          <h1 className='discover-header '>Discover Univerce</h1>

          <div className='row d-flex'>
            {DiscoverData.map((discover, id) => (
              <DiscoverDetails key={id} discover={discover} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
