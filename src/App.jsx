import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Footer from './Footer'
import  { Routes, Route,  } from 'react-router-dom';
import {BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {
  return (
   
    <div>
        <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={  <About />} />
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/ContactUs' element={<ContactUs/>}/>
       </Routes>
       </BrowserRouter>
       <Footer/>

        </div>
      
  );
};

export default App;
