import React from 'react';
import web from '../src/images/welc.gif';
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common name= 'Grow your business'  
        imgsrc={web}
        visit= '/Services'
        btname= "Get Started"
      />
    </>
  )
};

export default Home;
