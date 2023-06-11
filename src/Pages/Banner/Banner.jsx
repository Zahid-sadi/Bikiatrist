
import React  from 'react';

import vdo from '../../assets/vedio/Brutale 1000 RR - Monaco by Night.mp4'
import Header from '../../Shared/Header/Header';


const Banner = () => {

  return (
    <div className='w-screen h-screen relative  z-0 bg-transparent pointer-events-none' >
      <Header></Header>
      <video className='top-0 left-0 w-full h-full object-cover' autoPlay loop muted  src={vdo}></video>
    </div>
  );
};

export default Banner;