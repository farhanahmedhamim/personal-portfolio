import React from 'react';
import './about.css'; // Importing styles
import location from '../../assets/location-pin.png'; // Importing image assets
import pixels from '../../assets/pexels-pixabay-459653.jpg';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="about__container">
                <div className="abouts__content">
                    {/* Left section */}
                    <img src={pixels} className='pixels' alt="Abstract background" /> {/* Updated alt text */}
                    {/* Right section */}
                    <div className="about__right">
                        <span>ABOUT ME</span>
                        <h2>A Dedicated Front-end Developer based in Dhaka, Bangladesh <img src={location} alt="Location icon" /></h2> {/* Location icon */}
                        <p>As a junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and SASS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I want to be a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
