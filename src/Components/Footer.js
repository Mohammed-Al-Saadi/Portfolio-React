import React from 'react'
import {   BsLinkedin } from "react-icons/bs"
import {   GrInstagram,GrFacebook } from "react-icons/gr"
import {   AiFillGithub } from "react-icons/ai"
import './Footer.css'


export default function Footer() {

    return (
        <div className='profile-container'>

            <div className="profile-details">

                <div className="colz">
                    <a href='https://www.facebook.com/profile.php?id=100001946923572'>
                    <i><GrFacebook size={20}/></i>
                    </a>
                    <a href='https://www.instagram.com/mohammed.ali9o/?next=%2F'>
                    <i><GrInstagram size={20}/></i>
                    </a>
                    <a href='https://www.linkedin.com/in/mohammed-al-saadi-08a502264/'>
                    <i><BsLinkedin size={20}/></i>
                    </a>
                    <a href='https://github.com/Mohammed-Al-Saadi'>
                        <i><AiFillGithub size={20}/></i>
                    </a>

                </div>
                <div className="rights">

                    <p>Mohammed Al-Saadi © 2023 All Rights Reserved </p>

                </div>



            </div>

        </div>

    )
}

