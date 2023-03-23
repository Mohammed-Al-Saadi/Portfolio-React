import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { ImUserTie, ImPhone, ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function ContactUs() {
    const form = useRef();
    //popup message 
    const notify = () => {
        toast.success('Message sent 👍!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        //emailjs config id, service

        emailjs.sendForm('service_zy1oqvf', 'template_rbmt8va', form.current, 'YwJIiLEPe-Xm3FKSC')
            .then((result) => {
                console.log(result.text);

                //refresh contact form after submit
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });
    };


    return (

        <div className="container">
            <div className="contactinfo">
                <div className="infocard">
                    <ul>
                        <li className="contactheader"><Link to=""> Contact information</Link></li><hr></hr>
                        <li><ImUserTie /><Link to=""> Mohammed Al-Saadi</Link></li><hr></hr>
                        <li><ImPhone /><Link to=""> +358 465566774</Link></li><hr></hr>
                        <li><ImLocation2 /><Link to=""> Finland, Tampere</Link></li><hr></hr>
                        <li><MdEmail /> <Link to=""> al-saadi.mohammed@outlook.com</Link></li><hr></hr>

                    </ul>
                </div>

            </div>
            <div id="verticle-line"></div>

            <div className="container_h">

                <form id="contact" ref={form} onSubmit={sendEmail} >
                    <h3> Contact Me</h3>
                    <hr></hr>

                    <input placeholder="Your name..." name="user_name" type="text" />
                    <input placeholder="Your Email Address..." type="email" name="user_email" />
                    <textarea placeholder="Type your message here...." name="message"  ></textarea>
                    <button type="submit" onClick={notify} >Submit</button>

                </form>
            </div>
            <ToastContainer />

        </div>





    )
}