import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

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
            <div className="container_h">

                <form id="contact" ref={form} onSubmit={sendEmail} >
                    <h3> Contact Me</h3>
                    <input placeholder="Your name" name="user_name" type="text" />
                    <input placeholder="Your Email Address" type="email" name="user_email" />
                    <textarea placeholder="Type your message here...." name="message"  ></textarea>
                    <button type="submit" onClick={notify} >Submit</button>

                </form>
            </div>
            <ToastContainer

            />
        </div>





    )
}