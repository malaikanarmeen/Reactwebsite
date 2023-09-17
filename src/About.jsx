import React from 'react';
import web from '../src/images/about1.jpg';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common name= 'Welcome to About page'  
        imgsrc={web}
        visit= '/ContactUs'
        btname= "Contact Now"
      />
    </>
  )
};

export default About;
