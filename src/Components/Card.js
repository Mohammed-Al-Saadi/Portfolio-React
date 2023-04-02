import React from "react";
import './css/Card.css';
import { GiLobArrow } from "react-icons/gi"
import edu from './Pic/edu.jpg'
import { BsCheckCircle } from "react-icons/bs"





export default function Card() {

const educ =["Häme University of applied sciences(Computer Applications) Second year"
,"Al-Yarmouk University College Bachelor of Computer Engineering Completed in 2014"]



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
                    {educ.map((obj, index)=>{return <div className="education-render" key={index}><div>< BsCheckCircle/></div><div>{obj}</div></div>})}
                </div>
            </div>
        </div>
    )
} 