import  { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi"
import React from 'react';
import './Navbar.css';
import Darkmode from "./Darkmode";








export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  //click anywhere to leave menu
  let menuRef = useRef();
  useEffect(()=>{
    let handler =(e)=>{
      if(!menuRef.current.contains(e.target)){
      setShowNavbar(false)
      }
    } 
    document.addEventListener("mousedown",handler)
  })



//pdf Download
  const onButtonClick = () => {
    fetch('resume_mohammed.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume_mohammed.pdf';
        alink.click();
      })
    })


  }


  return (
    <nav className="navbar"  ref={menuRef} >
      <div className="container">
        <div className="logo">
          <Link to="/"><p>Mohammed Al-Saadi, student at HAMK</p></Link>
        </div>
        <div  className="menu-icon" >



          <label className="size" >
            <input type="checkbox" onClick={handleShowNavbar} id="check"  />
            <span ></span>
            <span ></span>
            <span ></span>
            
          </label>

        </div>
        <div  className={`nav-elements  ${showNavbar && 'active'}`}  >
          <ul >
            <li>
              <Link onClick={() => { document.getElementById("close-button").click() }} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={() => { document.getElementById("close-button").click() }} to="/Contact">Contact me</Link>
            </li>
            <li>
              <Link onClick={onButtonClick}>Resume <HiOutlineArrowCircleDown/> </Link>
            </li>
            <li className="darkmood"><Darkmode /> </li>


          </ul>
        </div>
        </div>
    </nav>
  )
}
