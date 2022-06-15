import React, { useState } from 'react';
import './profile.css';
import profile_img from '../../assets/satyabrat_image.png';
import { motion } from "framer-motion"

function Profile() {

    const [toggle, setToggle] = useState(1);

    const toggleBtn = (index) => {
        setToggle(index);
    }

    let boxVariants = {};
    const isMobile = window.innerWidth < 600;
    if (!isMobile) {
        boxVariants = {
            whileInView: {
                y: [30, 0], opacity: [0, 1]
            },
            transition: {
                duration: 0.7, ease: 'easeInOut'
            }
        }
    }

    return (
        <div className='profile'>
            <div className='profile_container'>
                <h1 className='heading'>Profile</h1>
                <div className='btn_container'>
                    <button className={toggle === 1 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(1)}>About Me</button>
                    <button className={toggle === 2 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(2)}>Education</button>
                    <button className={toggle === 3 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(3)}>Training/Courses</button>
                </div>

                <div className={toggle === 1 ? 'active_content' : 'content'}>
                    <motion.div
                        variants={boxVariants}
                        whileInView="whileInView"
                        transition="transition"
                        className='about'>
                        <p className='sub_sub_heading'>Why Choose Me?</p>
                        <img src={profile_img} className='profile_img' alt='profile_img' />
                        <spam className='profile_heading'>My name is <span className='profile_heading gradient_text'>Satyabrat Jha</span></spam>
                        <spam className='profile_sub_heading'>I'm a <spam className='profile_sub_heading gradient_text'>Full Stack Web Developer</spam></spam>
                        <spam className='text_content'>I'm passionate about all things related to JavaScript and I love to design.</spam>
                        <spam className='text_content'>I work hard, I care about writing clean code, and I genuinely love to learn.</spam>
                        <spam className='text_content'>I'm currently looking for the right opportunity to work in an environment that will help me progress into a full-stack role.</spam>
                    </motion.div>
                </div>

                <motion.div
                    variants={boxVariants}
                    whileInView="whileInView"
                    transition="transition"
                    className={toggle === 2 ? 'active_content' : 'content'}>
                    <div className='timeline'>
                        <div className='timeline_component'>
                            <div className='timeline_date timeline_date_right'>2012 - 2016</div>
                        </div>
                        <div className='timeline_middle'>
                            <div className='timeline_point'></div>
                        </div>
                        <div className='timeline_component timeline_component_bg'>
                            <h2 className='timeline_title'>Bachelors in Computer Application</h2>
                            <p className='timeline_paragraph'>Institute of Management Studies, Noida</p>
                            <p className='timeline_paragraph'>Chaudhary Charan Singh University, Meerut</p>
                        </div>
                        <div className='timeline_component timeline_component_bg left'>
                            <h2 className='timeline_title'>AISSCE (XII)</h2>
                            <p className='timeline_paragraph'>CBSE</p>
                            <p className='timeline_paragraph'>Jagat Convent Senior Secondary School</p>
                            <p className='timeline_paragraph'>Guru Harkrishan Nagar, New Delhi</p>
                        </div>
                        <div className='timeline_middle'>
                            <div className='timeline_point'></div>
                        </div>
                        <div className='timeline_component'>
                            <div className='timeline_date'>2012</div>
                        </div>
                        <div className='timeline_component'>
                            <div className='timeline_date timeline_date_right'>2010</div>
                        </div>
                        <div className='timeline_middle'>
                            <div className='timeline_point'></div>
                            <div className='timeline_point timeline_point_bottom'></div>
                        </div>
                        <div className='timeline_component timeline_component_bg'>
                            <h2 className='timeline_title'>AISSE (X)</h2>
                            <p className='timeline_paragraph'>CBSE</p>
                            <p className='timeline_paragraph'>Kendriya Vidalaya</p>
                            <p className='timeline_paragraph'>Paschim Vihar, New Delhi</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={boxVariants}
                    whileInView="whileInView"
                    transition="transition"
                    className={toggle === 3 ? 'active_content' : 'content'}>
                    <div className='timeline'>
                        <div className='timeline_component'>
                            <div className='timeline_date timeline_date_right'>2022</div>
                        </div>
                        <div className='timeline_middle'>
                            <div className='timeline_point'></div>
                        </div>
                        <div className='timeline_component timeline_component_bg'>
                            <h2 className='timeline_title'>Udemy (The Complete Web Development Bootcamp)</h2>
                            <p className='timeline_paragraph'>ReactJS, HTML, CSS, JavaScript, JQuery, Bootstrap, NodeJS, MongoDB</p>
                        </div>
                        <div className='timeline_component timeline_component_bg left'>
                            <h2 className='timeline_title'>Industrial traning (Apex TG India Pvt.Ltd.)</h2>
                            <p className='timeline_paragraph'>Apex TG India Pvt.Ltd.</p>
                            <p className='timeline_paragraph'>PHP, MySQL, HTML, CSS, JavaScript</p>
                            <p className='timeline_paragraph'>Project - Email System</p>
                        </div>
                        <div className='timeline_middle'>
                            <div className='timeline_point'></div>
                            <div className='timeline_point timeline_point_bottom'></div>
                        </div>
                        <div className='timeline_component'>
                            <div className='timeline_date'>(14 July - 14 Aug) 2014</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Profile;