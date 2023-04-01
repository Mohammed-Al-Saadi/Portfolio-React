import React from "react";
import './Card.css';
import { GiLobArrow } from "react-icons/gi"
import edu from './Pic/edu.jpg'
import { BsCheckCircle } from "react-icons/bs"





export default function Card() {





    return (
        <div className="flip-card flex-wrap ">
            <div className="flip-card-inner " >
                <div className="flip-card-front" >
                    <div className="card_pic">
                        <img src={edu} alt="pic" />
                    </div>
                    <div className="cardh1">
                        <h1> Education <GiLobArrow className="more" /></h1>
                    </div>
                </div>

                <div className="flip-card-back">
                    
                        <li>< BsCheckCircle/> Häme University of applied sciences(Computer Applications) Second year</li>
                        <li>< BsCheckCircle/> Al-Yarmouk University CollegeBachelor of Computer EngineeringCompleted in 2014</li>
                    
                </div>
            </div>
        </div>
    )
}