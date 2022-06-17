import React from 'react';
import './home.css';
import { motion } from "framer-motion"
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { ImDownload } from 'react-icons/im';
import Satyabrat_CV from '../../assets/Satyabrat_Jha_Resume.pdf';

function Home() {
    return (
        <>
            <div className='header'>
                <div className='header_container'>
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.3 }}
                        className='container_sub_heading'>Hi, my name is</motion.p>
                    <motion.span
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.1 }}
                        className='container_heading'>Satyabrat Jha</motion.span>
                    <motion.span
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: .9 }}
                        className='container_heading'>I'm a <span className='container_heading gradient_text'>Full Stack Web Developer</span></motion.span>
                    <motion.span
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
                        className='container_sub_heading'>I'm passionate about all things related to JavaScript</motion.span>

                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                        className='btn_container'>
                        <a href='#contact_page' className='btn_grad_contact'><button href='#contact_page' className='btn_grad'><FaEnvelope className='btn-icon' />&nbsp; Contact Me</button></a>
                        <a href={Satyabrat_CV} rel="noopener noreferrer" target='_blank'><button className='btn_grad' label='resume'><ImDownload className='btn-icon' />&nbsp; Resume</button></a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1, }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 2.5 }}
                className='social_media_icons'>
                <div className='upper_line'></div>
                <a href='https://github.com/SatyabratDeveloper'><AiFillGithub className='icon' /></a>
                <a href='http://www.linkedin.com/in/satyabratjha'><FaLinkedin className='icon' /></a>
                <a href={Satyabrat_CV} rel="noopener noreferrer" target='_blank'><ImDownload className='icon' /></a>
                <a href="#contact_page" alt="Contact"><AiOutlineMail className='icon' /></a>
                <div className='lower_line'></div>
            </motion.div>
        </>
    )
}

export default Home;