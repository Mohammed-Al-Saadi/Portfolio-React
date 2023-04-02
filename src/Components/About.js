import React from "react";
import { Link } from "react-router-dom";
import './css/About.css'



export default function About() {
    return (


        <div className="AboutMe-Info" >
            { }
            <div className="Header">
                <h1>
                    Hello, I'm Mohammed Al-Saadi
                </h1>
                <p>
                    I am a second-year student at HAMK majoring in a degree program in Computer Applications.
                    I aim to become a Full-Stack Developer with an in-depth expertise on everything related to web and app development.
                    I am a dedicated, organized and methodical individual with great interpersonal skills.
                    I have developed good planning & organisational set of skills and am confident working independently or as part of a team.


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