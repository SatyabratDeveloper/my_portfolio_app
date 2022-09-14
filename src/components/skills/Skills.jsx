import React, { useState } from 'react';
import './skills.css';
import { motion } from "framer-motion"
import atom from '../../assets/atom.png';
import bootstrap from '../../assets/bootstrap.png';
import chrome from '../../assets/chrome.png';
import css from '../../assets/css.png';
import dimension from '../../assets/dimension.png';
import figma from '../../assets/figma.png';
import firefox from '../../assets/firefox.png';
import git from '../../assets/git.png';
import html from '../../assets/html.png';
import hyper from '../../assets/hyper.png';
import illustrator from '../../assets/illustrator.png';
import jquery from '../../assets/jquery.png';
import js from '../../assets/js.png';
import mongodb from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.png';
import nodejs from '../../assets/node.png';
import photoshop from '../../assets/photoshop.png';
import react from '../../assets/react.png';
import vscode from '../../assets/vscode.png';
import xd from '../../assets/xd.png';
import office from '../../assets/office.png';

function Skills() {
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
                duration: 0.3, ease: 'easeInOut'
            }
        }
    }

    return (
        <div className='skills'>
            <h1 className='heading'>Skills</h1>
            <p className='sub_sub_heading'>The skills, tools and technologies, I use to bring the products to life</p>
            <div className='btn_container'>
                <button className={toggle === 1 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(1)}>Front End</button>
                <button className={toggle === 2 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(2)}>Back End</button>
                <button className={toggle === 3 ? 'btn_grad_active' : 'btn_grad'} onClick={() => toggleBtn(3)}>Tools</button>
            </div>

            <div className='skills_container'>
                <motion.div
                    variants={boxVariants}
                    whileInView="whileInView"
                    transition="transition"
                    className={toggle === 1 ? 'active_content' : 'content'}>
                    <h2 className='sub_heading'>Front End Developer Skills</h2>
                    <p className='text_content'>I build client-side applications with modern tech such as ReactJS, HTML5, CSS3 and JavaScript.</p>
                    <div className='front_end_section'>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={react} alt='React_image' />
                            </div>
                            <h3>React JS</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={html} alt='HTML5_image' />
                            </div>
                            <h3>HTML5</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={css} alt='CSS3_image' />
                            </div>
                            <h3>CSS3</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={js} alt='JavaScript_image' />
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={jquery} alt='JQuery_image' />
                            </div>
                            <h3>JQuery</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={bootstrap} alt='Bootstrap_image' />
                            </div>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={boxVariants}
                    whileInView="whileInView"
                    transition="transition"
                    className={toggle === 2 ? 'active_content' : 'content'}>
                    <h2 className='sub_heading'>Back End Developer Skills</h2>
                    <p className='text_content'>I build scalable and maintainable server applications using modern tech such as NodeJS, Express and MongoDB</p>

                    <div className='back_end_section'>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={nodejs} alt='NodeJS_image' />
                            </div>
                            <h3>NodeJS</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={mysql} alt='MySQL_image' />
                            </div>
                            <h3>MySQL</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={mongodb} alt='MongoDB_image' />
                            </div>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={boxVariants}
                    whileInView="whileInView"
                    transition="transition"
                    className={toggle === 3 ? 'active_content' : 'content'}>
                    <h2 className='sub_heading'>Tools</h2>
                    <p className='text_content'>I design and develop applications using modern tools such as VS Code, Chrome, Photoshop, Illustrator, etc.</p>
                    <div className='tools_section'>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={vscode} alt='VSCode_image' />
                            </div>
                            <h3>Visual Studio Code</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={atom} alt='Atom_image' />
                            </div>
                            <h3>Atom</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={firefox} alt='Firefox_image' />
                            </div>
                            <h3>Firefox</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={chrome} alt='Chrome_image' />
                            </div>
                            <h3>Chrome</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={hyper} alt='Hyper_image' />
                            </div>
                            <h3>Hyper</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={git} alt='Git/GitHub_image' />
                            </div>
                            <h3>Git/GitHub</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={figma} alt='Figma_image' />
                            </div>
                            <h3>Figma</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={xd} alt='XD_image' />
                            </div>
                            <h3>Adobe XD</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={illustrator} alt='Illustrator_image' />
                            </div>
                            <h3>Adobe Illustrator</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={photoshop} alt='Photoshop_image' />
                            </div>
                            <h3>Adobe Photoshop</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={dimension} alt='Dimension_image' />
                            </div>
                            <h3>Adobe Dimension</h3>
                        </div>
                        <div className='skill_section_container'>
                            <div className='img_div'>
                                <img src={office} alt='MSOffice_image' />
                            </div>
                            <h3>MS Office</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills;