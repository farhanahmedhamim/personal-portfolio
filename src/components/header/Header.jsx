import React, { useEffect, useState } from 'react';
import './header.css';
import farhan from "../../assets/fa.png"
import { Link } from 'react-scroll';
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {

    // State to track scroll position
    const [scrollPosition, setScrollPosition] = useState(0);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Event listener to update scroll position
        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY);
        });
    }, []);


    return (
        <header className={scrollPosition > 50 ? "active" : ""}> {/* Add class "active" when scroll position is greater than 299 */}
            <nav className='nav'>
                <div className="logos">
                    <a href="index.html" className="nav__logo"><img src={farhan} alt="" />Farhan.</a> {/* Logo */}
                </div>

                {/* Menu */}
                <div className='nav__menu'> {/* Show menu when toggle is true */}
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to='home' smooth={true} offset={0} duration={500} className='nav__link'>Home</Link>
                        </li>

                        <li className='nav__item'>
                            <Link to='about' smooth={true} offset={0} duration={500} className='nav__link'>About</Link>
                        </li>

                        <li className='nav__item'>
                            <Link to='project' smooth={true} offset={-50} duration={500} className='nav__link'>Project</Link>
                        </li>

                        <li className='nav__item'>
                            <Link to='contact' smooth={true} offset={-100} duration={500} className='nav__link'>Contact</Link>
                        </li>
                    </ul>
                </div>


                {/* mobile Menu */}
                <div className='mobile__menu' style={{ right: isMenuOpen ? '0' : '100%' }}> {/* Show menu when toggle is true */}
                    <ul className='mobilenav__list'>
                        <li className='mobilenav__item'>
                            <Link to='home' smooth={true} offset={0} duration={500} className='nav__link' onClick={toggleMenu}>Home</Link>
                        </li>

                        <li className='mobilenav__item'>
                            <Link to='about' smooth={true} offset={-100} duration={500} className='nav__link' onClick={toggleMenu}>About</Link>
                        </li>

                        <li className='mobilenav__item'>
                            <Link to='project' smooth={true} offset={-50} duration={500} className='nav__link' onClick={toggleMenu}>Project</Link>
                        </li>

                        <li className='mobilenav__item'>
                            <Link to='contact' smooth={true} offset={-100} duration={500} className='nav__link' onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>



                {/* Toggle button */}
                <div className='toggle-button' onClick={toggleMenu}>
                    {
                        isMenuOpen ? (<FaXmark fontSize='20px' color='#fff' />) : (<FaBars fontSize='20px' />)
                    }
                </div>

            </nav>
        </header >
    );
};

export default Header;
