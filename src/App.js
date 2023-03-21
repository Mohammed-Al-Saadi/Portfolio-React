import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Download from './Components/Download';
import ContactInfo from './Components/ContactInfo';
import { Route, Routes } from "react-router-dom";
import Picture from './Components/Picture';
import CardData from './Components/CardData';

function App() {

  return (

    <>

      <div className="main_div">
        <Navbar />

        <Routes>
          <Route path="/" element={<div><div className='pic_info'><Picture /><About /></div><div className="card-home ">
            <CardData />
          </div>
          </div>} />
          <Route path="/contact" element={<div className="contact_div flex-wrap"><ContactInfo /><Contact /></div>} />
          <Route path="/link" element={<Download />} />

        </Routes>

        <Footer />

      </div>

    </>

  );
};

export default App;
