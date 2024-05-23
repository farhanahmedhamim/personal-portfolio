import React from 'react';
import './home.css'; // Importing styles
import linkedinImage from '../../assets/linkedin.png'; // Importing image assets
import github from '../../assets/github.png';
import facebook from '../../assets/facebook.png';
import hi from '../../assets/pngwing.com.png';
import location from '../../assets/location-pin.png';
import me from '../../assets/me.jpeg';
import htmls from '../../assets/html.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import reat from '../../assets/science.png';
import tailwind from '../../assets/tail.png';
import sass from '../../assets/sass.png';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for routing

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__container">
        <div className="home__content">

          {/* Top section */}
          <div className='home__top'>
            <div className="home__left">
              <h1>Front-End React <br /> Developer. <img src={hi} alt="Hi" /></h1> {/* Corrected alt text */}
              <p>Hi, I'm Farhan Ahmed. A passionate Front-end React Developer based in Dhaka, Bangladesh. <img src={location} alt="Location" /></p> {/* Corrected alt text */}
              <div className="social__links">
                <Link to="https://www.linkedin.com/"> {/* Add correct URL */}
                  <img src={linkedinImage} alt="LinkedIn" /> {/* Corrected alt text */}
                </Link>
                <Link to="https://github.com/"> {/* Add correct URL */}
                  <img src={github} alt="GitHub" /> {/* Corrected alt text */}
                </Link>
                <Link to="https://facebook.com/"> {/* Add correct URL */}
                  <img src={facebook} alt="GitHub" /> {/* Corrected alt text */}
                </Link>
              </div>
            </div>
            <div className="home__right">
              <img src={me} alt="Farhan Ahmed" /> {/* Corrected alt text */}
            </div>
          </div>

          {/* Bottom section */}
          <div className='home__bottom'>
            <span>Tech Stack</span>
            <div className="tech__items">
              <img src={htmls} alt="HTML5" /> {/* Corrected alt text */}
              <img src={css} alt="CSS3" /> {/* Corrected alt text */}
              <img src={js} style={{ borderRadius: "50%" }} alt="JavaScript" /> {/* Corrected alt text */}
              <img src={sass} alt="SASS" /> {/* Corrected alt text */}
              <img src={tailwind} style={{ borderRadius: "50%" }} alt="Tailwind CSS" /> {/* Corrected alt text */}
              <img src={reat} alt="React" /> {/* Corrected alt text */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;
