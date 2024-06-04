import React from 'react';
import './footer.css'; // Importing styles
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for routing

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer__container">
                <div className="footer__content">
                    {/* Copyright information */}
                    <p>© {year} Portfolio website by Farhan. All rights reserved.</p>
                    {/* Social media links */}
                    <div className="links">
                        <Link to="https://www.linkedin.com/"> {/* Add correct URL */}
                            <i className="fa-brands fa-linkedin"></i> {/* LinkedIn icon */}
                        </Link>
                        <Link to="https://github.com/"> {/* Add correct URL */}
                            <i className="fa-brands fa-github"></i> {/* GitHub icon */}
                        </Link>
                        <Link to="https://www.facebook.com/"> {/* Add correct URL */}
                            <i className="fa-brands fa-square-facebook"></i> {/* Facebook icon */}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
