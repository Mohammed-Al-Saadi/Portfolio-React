import React from "react";
import { Link } from "react-router-dom";
import './About.css'


export default function About() {
    return (

        <div className="AboutMe-Info" >

            <div className="Header">
                <h1>
                    Hello, I'm Mohammed Al-Saadi
                </h1>
                <p>
                    I'm studying my second year of Computer Applications in HAMK
                    , from where I aim to become a Full-stack developer.
                    I am self-guided and responsible - which helps me to grasp new concepts efficiently,
                    but I also understand the importance of team work and flexibility.
                    Please feel free to read more about my current areas of expertise from the cards below

                </p>
            </div>
            <div className="center">

                <Link to="/Contact"><button className="name noselect">
                    Hire me

                </button> </Link>

            </div>

        </div>

    )
}