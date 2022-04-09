import React from 'react';
import './RocketMission.css';

const RocketMissionDetails = ({ mission }) => {
  const { mission_name, launch_year, upcoming, rocket, links } = mission;
  console.log('tigger:', upcoming);
  return (
    <div className='col-md-3 col-sm-6 pt-5'>
      <div className='rocket-card card'>
        <img src={links.mission_patch} className='card-img-top' alt='img' />
        <div className='card-body'>
          <h4>{mission_name}</h4>
          <p className='card-text'>Rocket Name:{rocket.rocket_name}</p>
          <p className='card-text'>Launce Year:{launch_year}</p>
          <p className='card-text'>Upcoming:{upcoming}</p>
        </div>
      </div>
    </div>
  );
};

export default RocketMissionDetails;
