import React from 'react';
import Discover from '../Discover/Discover';

import HeaderHome from '../HeaderHome/HeaderHome';
import RocketMission from '../RocketMission/RocketMission';

const Home = () => {
  return (
    <div>
      <HeaderHome />

      <Discover/>
      <RocketMission/>
    </div>
  );
};

export default Home;
