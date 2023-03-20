import React from "react";
import './Card.css';
import {  GiLobArrow } from "react-icons/gi"
import { skills } from "./data";




export default function Card({ body, tittle, src }) {

    



    return (
        <div className="flip-card flex-wrap ">
            <div className="flip-card-inner " >
                <div className="flip-card-front" >
                    <div className="card_pic">
                       <img src={src} alt="pic"/>
                    </div>
                <div className="cardh1">
                   <h1> {tittle} <GiLobArrow className="more"/></h1>
                   </div>
                </div>
               
                <div className="flip-card-back">
                    <h1 >{body} </h1>
                </div>
            </div>
        </div>
    )
}