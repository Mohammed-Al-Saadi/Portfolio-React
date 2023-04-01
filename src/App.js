import './App.css';
import React from 'react';
import Pages from './Components/Pages';
import { Route, Routes } from "react-router-dom";
import Download from './Components/Download';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';





function App() {

  return (

    <>
     
     <Navbar />
                <Routes>
                    <Route path="/" element={<div><div className='skills'><Pages /></div></div>} />
                    <Route path="/contact"  element={<div className="contact_div"><ContactUs /><Footer /></div>} />
                    <Route path="/link" element={<Download />} />
                </Routes>


                

                <Footer />
    </>

  );
};

export default App;
