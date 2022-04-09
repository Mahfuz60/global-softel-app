import React from 'react';
import './Discover.css';

const DiscoverDetails = ({ discover }) => {
  const { tittle, image, description } = discover;
  return (
    <div className='col-md-4 col-sm-10   mx-auto'>
      <div className='card  discover-card'>
        <img src={image} className='card-img-top' alt='img' />
        <div className='card-body'>
          <h4>{tittle}</h4>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverDetails;
