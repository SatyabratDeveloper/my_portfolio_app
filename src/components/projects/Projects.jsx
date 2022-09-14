import React from 'react';
import './projects.css';
import { motion } from "framer-motion"
import world_clock from '../../assets/world_clock_1.png';
import drum_kit from '../../assets/drum_kit.png';
import newsletter_signup from '../../assets/newsletter_signup.png';
import calculator from '../../assets/calculator.png';
import portfolio from '../../assets/portfolio.png';
import tinderClone from '../../assets/tinderClone.jpg';
import { AiFillGithub } from 'react-icons/ai';

function Projects() {

    let boxVariantsRight, boxVariantsLeft = {};
    const isMobile = window.innerWidth < 1000 || window.innerHeight > window.innerWidth;
    if (!isMobile) {
        boxVariantsRight = {
            whileInView: {
                x: [100, 0], opacity: [0, 1]
            },
            transition: {
                duration: 0.3, ease: 'easeInOut'
            }
        }
        boxVariantsLeft = {
            whileInView: {
                x: [-100, 0], opacity: [0, 1]
            },
            transition: {
                duration: 0.3, ease: 'easeInOut'
            }
        }
    }

    return (
        <div className='projects'>
            <h1 className='heading'>Projects</h1>
            <h1 className='sub_sub_heading'>Check out some of my latest projects</h1>
            <div className='projects_container'>

                <motion.div
                    variants={boxVariantsLeft}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items_container_left'>
                        <h2 className='sub_heading project_container_heading_left'>Tinder Clone &nbsp;<a href="https://github.com/SatyabratDeveloper/Tinder-Clone" alt="TinderClone_Link"><div className='git_link'><AiFillGithub /></div></a></h2>
                        <h2 className='text_content'>Tinder Clone is a white-label dating app solution that is based on the popular dating app Tinder. It is a replica of the standard app, which contains the biggest share of its features and functionality.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>React JS</button>
                            <button className='skills_used'>Node JS</button>
                            <button className='skills_used'>Express</button>
                            <button className='skills_used'>MongoDB</button>
                        </div>
                    </div>
                    <div className='projects_container_items'>
                        <img src={tinderClone} alt='tinder_clone' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>Tinder Clone</div>
                        </div>
                    </div>
                </motion.div>

                <div className='container_splitter'></div>

                <motion.div
                    variants={boxVariantsRight}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items'>
                        <img src={portfolio} alt='Portfolio' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>Portfolio</div>
                        </div>
                    </div>
                    <div className='projects_container_items_container'>
                        <h2 className='sub_heading project_container_heading'>My Portfolio Website<div className='git_link'><AiFillGithub /></div></h2>
                        <h2 className='text_content'>A cool looking portfolio website, including my resume, my projects and email form using emailJS to mail me.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>React JS</button>
                            <button className='skills_used'>JavaScript</button>
                            <button className='skills_used'>HTML</button>
                            <button className='skills_used'>CSS</button>

                        </div>
                    </div>
                </motion.div>

                <div className='container_splitter'></div>

                <motion.div
                    variants={boxVariantsLeft}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items_container_left'>
                        <h2 className='sub_heading project_container_heading_left'>Newsletter Signup &nbsp;<a href="https://github.com/SatyabratDeveloper/Newsletter-Signup" alt="GitHub_Link"><div className='git_link'><AiFillGithub /></div></a></h2>
                        <h2 className='text_content'>The more subscribers you have, the more people you can reach with interesting and engaging newsletter content. Your newsletter signup form is used to collect emails and build an audience.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>Node JS</button>
                            <button className='skills_used'>JavaScript</button>
                            <button className='skills_used'>HTML</button>
                            <button className='skills_used'>CSS</button>
                        </div>
                    </div>
                    <div className='projects_container_items'>
                        <img src={newsletter_signup} alt='World_Clock' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>Newsletter Signup</div>
                        </div>
                    </div>
                </motion.div>

                <div className='container_splitter'></div>

                <motion.div
                    variants={boxVariantsRight}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items'>
                        <img src={calculator} alt='World_Clock' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>Calculator</div>
                        </div>
                    </div>
                    <div className='projects_container_items_container'>
                        <h2 className='sub_heading project_container_heading'>Calculator &nbsp;<a href="https://github.com/SatyabratDeveloper/Full-Calculator" alt="GitHub_Link"><div className='git_link'><AiFillGithub /></div></a></h2>
                        <h2 className='text_content'>A beautiful calculator including addition, subtraction, multiplication, division, delete, all clear, and of course, the ability to use decimal numbers in performing these operations.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>JavaScript</button>
                            <button className='skills_used'>HTML</button>
                            <button className='skills_used'>CSS</button>
                        </div>
                    </div>
                </motion.div>

                <div className='container_splitter'></div>

                <motion.div
                    variants={boxVariantsLeft}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items_container_left'>
                        <h2 className='sub_heading project_container_heading_left'>World Clock &nbsp;<a href="https://github.com/SatyabratDeveloper/World-Clock" alt="GitHub_Link"><div className='git_link'><AiFillGithub /></div></a></h2>
                        <h2 className='text_content'>World Clock is used to find out the current time, day and date for the selected countries throughout the globe. This is a simple and easy to use JavaScript world clock app.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>JavaScript</button>
                            <button className='skills_used'>HTML</button>
                            <button className='skills_used'>CSS</button>
                        </div>
                    </div>
                    <div className='projects_container_items'>
                        <img src={world_clock} alt='World_Clock' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>World Clock</div>
                        </div>
                    </div>
                </motion.div>

                <div className='container_splitter'></div>

                <motion.div
                    variants={boxVariantsRight}
                    whileInView="whileInView"
                    transition="transition"
                    className='project_container_list'>
                    <div className='projects_container_items'>
                        <img src={drum_kit} alt='World_Clock' className='project_image' />
                        <div className='projects_container_items_container_image'>
                            <div className='projects_container_items_heading'>Drum Kit</div>
                        </div>
                    </div>
                    <div className='projects_container_items_container'>
                        <h2 className='sub_heading project_container_heading'>Drum Kit &nbsp;<a href="https://github.com/SatyabratDeveloper/Drum-Kit" alt="GitHub_Link"><div className='git_link'><AiFillGithub /></div></a></h2>
                        <h2 className='text_content'>When each key is pressed or clicked, it makes a corresponding drum noise. It also uses CSS transitions and animations to make the project more interactive to the user.</h2>
                        <div className='skills_btn_container'>
                            <button className='skills_used'>JavaScript</button>
                            <button className='skills_used'>HTML</button>
                            <button className='skills_used'>CSS</button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Projects;