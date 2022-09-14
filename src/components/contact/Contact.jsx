import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './contact.css';
import { motion } from "framer-motion"
import { AiFillPhone } from 'react-icons/ai';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { ImLocation } from 'react-icons/im';

const Result = (e) => {
    return (
        <p>Your message has been sent successfully, thanks for your response.</p>
    )
}
function Contact() {
    const [result, setResult] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    }

    let boxVariantsRight, boxVariantsLeft = {};
    const isMobile = window.innerWidth < 1000;
    if (!isMobile) {
        boxVariantsRight = {
            whileInView: {
                y: [-100, 0], opacity: [0, 1]
            },
            transition: {
                duration: 0.3, ease: 'easeInOut'
            }
        }
        boxVariantsLeft = {
            whileInView: {
                y: [100, 0], opacity: [0, 1]
            },
            transition: {
                duration: 0.3, ease: 'easeInOut'
            }
        }
    }

    return (
        <div className='contact'>
            <h1 className='heading white_color'>Contact</h1>
            <h1 className='container_sub_heading margin-bottom'>Learn more about me</h1>
            <div className='contact_container'>
                <motion.div
                    variants={boxVariantsRight}
                    whileInView="whileInView"
                    transition="transition"
                    className='form_container'>
                    <div className='sub_heading'>Get in touch</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='name' placeholder='Name' autoComplete='off' required />
                        <input type='email' name='email_id' placeholder='Email Id' autoComplete='off' required />
                        <input type='text' name='phone_no' placeholder='Phone No' autoComplete='off' required />
                        <textarea name='message' rows={4} placeholder='Enter your message' autoComplete='off' required />
                        <button className='btn_grad_active submit' type='submit'>Send</button>
                    </form>
                    <div className='form_result_container'>{result ? <Result /> : null}</div>
                </motion.div>

                <motion.div
                    variants={boxVariantsLeft}
                    whileInView="whileInView"
                    transition="transition"
                    className='contact_info'>
                    <div className='contact_info_container'>
                        <span className='contact_info_heading'><FaEnvelope className='contact_icons' /> Email</span>
                        <a href='mailto:'><span className='contact_info_content'>satyabrat.developer@gmail.com</span></a>
                    </div>
                    <div className='contact_info_container'>
                        <span className='contact_info_heading'><VscGithub className='contact_icons' /> GitHub</span>
                        <a href='https://github.com/SatyabratDeveloper'><span className='contact_info_content'>SatyabratDeveloper</span></a>
                    </div>
                    <div className='contact_info_container'>
                        <span className='contact_info_heading'><FaLinkedin className='contact_icons' /> LinkedIn</span>
                        <a href='http://www.linkedin.com/in/satyabratjha'><span className='contact_info_content'>www.linkedin.com/in/satyabratjha</span></a>
                    </div>
                    <div className='contact_info_container'>
                        <span className='contact_info_heading'><AiFillPhone className='contact_icons' /> Phone No</span>
                        <span className='contact_info_content'>+91 9205076637</span>
                    </div>
                    <div className='contact_info_container'>
                        <span className='contact_info_heading'><ImLocation className='contact_icons' /> Address</span>
                        <span className='contact_info_content'>B-13, Anoop Nagar, Uttam Nagar, New Delhi-110059</span>
                    </div>
                </motion.div>
            </div>
            <div className='footer'>
                <p>Design and Developed by Satyabrat Jha</p>
                <p>© 2022 All Right Reserved</p>
            </div>
        </div>
    )
}

export default Contact;