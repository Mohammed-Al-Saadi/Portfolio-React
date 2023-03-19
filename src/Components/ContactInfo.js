import React from 'react';
import './ContactInfo.css'
import { ImUserTie, ImPhone, ImLocation2 } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

export default function ContactInfo() {
    return (
        <div className="contactinfo">
            <div className="infocard">
                <ul>
                    <li><a href="ImUserTie"><ImUserTie /> Mohammed Al-Saadi</a></li>
                    <li><a href="ImPhone"><ImPhone /> +358 465566774</a></li>
                    <li><a href="ImLocation2"><ImLocation2 /> Finland, Tampere</a></li>
                    <li><a href="IoIosMail"><IoIosMail /> al-saadi.mohammed@outlook.com</a></li>

                </ul>
            </div>

        </div>
    )
}