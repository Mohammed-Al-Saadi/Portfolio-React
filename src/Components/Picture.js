import React from "react";
import img from './Pic/a.jpg';
import './Picture.css';

export default function Picture(){
    return(

        <div className="block">

            <img src={img} alt="Me"></img>

        </div>

    )
}