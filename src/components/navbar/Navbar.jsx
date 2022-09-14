import React, { useState } from 'react';
import './navbar.css'
import { motion } from "framer-motion"
import { ImHome } from 'react-icons/im';
import { FaUser, FaFileCode, FaEnvelope } from 'react-icons/fa';
import { BsUiChecksGrid } from 'react-icons/bs';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {

    const Menu = () => (
        <>
            <p>
                <a href='#home_page' onClick={() => setToggleMenu(false)} className={navbar ? 'navbar_item navbar_scroll gradient_line' : 'navbar_item gradient_line'}>
                    <ImHome className='navbar_icon' />
                    <span className='navbar_text'>Home</span>
                </a>
            </p>
            <p>
                <a href='#profile_page' onClick={() => setToggleMenu(false)} className={navbar ? 'navbar_item navbar_scroll gradient_line' : 'navbar_item gradient_line'}>
                    <FaUser className='navbar_icon' />
                    <span className='navbar_text'>Profile</span>
                </a>
            </p>
            <p>
                <a href='#skills_page' onClick={() => setToggleMenu(false)} className={navbar ? 'navbar_item navbar_scroll gradient_line' : 'navbar_item gradient_line'}>
                    <BsUiChecksGrid className='navbar_icon' />
                    <span className='navbar_text'>Skills</span>
                </a>
            </p>
            <p>
                <a href='#projects_page' onClick={() => setToggleMenu(false)} className={navbar ? 'navbar_item navbar_scroll gradient_line' : 'navbar_item gradient_line'}>
                    <FaFileCode className='navbar_icon' />
                    <span className='navbar_text'>Projects</span>
                </a>
            </p>
            <p>
                <a href='#contact_page' onClick={() => setToggleMenu(false)} className={navbar ? 'navbar_item navbar_scroll gradient_line' : 'navbar_item gradient_line'}>
                    <FaEnvelope className='navbar_icon' />
                    <span className='navbar_text'>Contact</span>
                </a>
            </p>
        </>
    )

    const [toggleMenu, setToggleMenu] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 200){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <motion.navbar
        initial={{ y: -50, opacity: 0}}
        animate={{ y: 0, opacity: 1, }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}
        className={navbar ? 'navbar active' : 'navbar'}>
            <div className='logo'>
                <h1><spam className='logoStyle'>&lt;</spam> Satyabrat_Jha <spam className='logoStyle'>/&gt;</spam></h1>
            </div>
            <div className='menu'>
            <Menu />
            </div>
            
            <div className='navbar_menu'>
                {toggleMenu ? <RiCloseLine className={navbar ? 'navbar_menu_button_scroll' : 'navbar_menu_button'} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line className={navbar ? 'navbar_menu_button_scroll' : 'navbar_menu_button'} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <motion.div
                    initial={{x: 200, opacity:0}}
                    animate={{x: 0, opacity:1}}
                    transition={{duration: 0.1, ease:'easeInOut'}}
                    className='navbar_menu_container'>
                        <div className='navbar_menu_items'>
                            <Menu />
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.navbar>
    )
}

export default Navbar;