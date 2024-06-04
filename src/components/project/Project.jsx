import React from 'react';
import './project.css'; // Importing styles

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import soft from '../../assets/product-management.png';
import car from '../../assets/Screenshot (94).png';
import restora from '../../assets/Screenshot (97).png';
import land from '../../assets/Screenshot (96).png';
import ghost from '../../assets/Screenshot (98).png';
import watch from '../../assets/Screenshot (99).png';
import dashboard from '../../assets/Screenshot (100).png';
import facebook from '../../assets/Screenshot (101).png';
import mordern from '../../assets/Screenshot (102).png';
import nft from '../../assets/Screenshot (103).png';
import realestate from '../../assets/Screenshot (104).png';
import ecommerce from '../../assets/Screenshot (105).png';
import ecommerceDashboard from '../../assets/Screenshot (106).png';
import jobFinder from '../../assets/Screenshot (107).png';
import pricetable from '../../assets/Screenshot (108).png';
import education from '../../assets/Screenshot (110).png';
import doctor from '../../assets/Screenshot (111).png';

const Project = () => {

    const data = [
        {
            img: pricetable,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/price-table",
            demo: "https://price-table-zeta.vercel.app/",
        },
        {
            img: doctor,
            title: "doctor appointment",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/-doctor-appointment",
            demo: "https://doctor-appointment-mauve.vercel.app/",
        },
        {
            img: education,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "css"],
            code: "https://github.com/farhanahmedhamim/education-ensure",
            demo: "https://education-ensure.vercel.app/",
        },
        {
            img: car,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["next", "css"],
            code: "https://github.com/farhanahmedhamim/nexttry",
            demo: "https://prismatic-faloodeh-c5de4c.netlify.app/",
        },
        {
            img: land,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["HTML", "css", "JavaScript"],
            code: "https://github.com/farhanahmedhamim/foreal",
            demo: "https://farhanahmedhamim.github.io/foreal/",
        },
        {
            img: restora,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["HTML", "css", "JavaScript"],
            code: "https://github.com/farhanahmedhamim/rest",
            demo: "https://farhanahmedhamim.github.io/rest/",
        },
        {
            img: ghost,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "css"],
            code: "https://github.com/farhanahmedhamim/react_ghost",
            demo: "https://farhanahmedhamim.github.io/react_ghost/",
        },
        {
            img: watch,
            title: "landing page",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "css"],
            code: "https://github.com/farhanahmedhamim/react_watch",
            demo: "https://farhanahmedhamim.github.io/react_watch/",
        },
        {
            img: mordern,
            title: "LANDING PAGE",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/mordern-reacr",
            demo: "https://farhanahmedhamim.github.io/mordern-reacr/",
        },
        {
            img: nft,
            title: "NFT LANDING PAGE",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "css"],
            code: "https://github.com/farhanahmedhamim/react-nft",
            demo: "https://farhanahmedhamim.github.io/react-nft/",
        },
        {
            img: facebook,
            title: "FACEBOOK PAGE",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["HTML", "css", "JavaScript"],
            code: "https://github.com/farhanahmedhamim/facebook",
            demo: "https://farhanahmedhamim.github.io/facebook/",
        },
        {
            img: dashboard,
            title: "REACT DASHBOARD",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "css"],
            code: "https://github.com/farhanahmedhamim/react-dashboard",
            demo: "https://loquacious-cucurucho-ff69ce.netlify.app/",
        },
        {
            img: ecommerceDashboard,
            title: "E-COMMERCE DASHBOARD",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "sass"],
            code: "https://github.com/farhanahmedhamim/ecommerce-dashboard",
            demo: "https://ecommerce-dashboard-rust-iota.vercel.app/",
        },
        {
            img: realestate,
            title: "REAL ESTATE WEBSITE",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/real-estate",
            demo: "https://aesthetic-taffy-c8c864.netlify.app/",
        },
        {
            img: ecommerce,
            title: "E-COMMERCE WEBSITE",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/ecommerce-website",
            demo: "https://idyllic-donut-a10873.netlify.app/",
        },
        {
            img: jobFinder,
            title: "JOB FINDER APP",
            desc: "High-quality code is essential for maintainability, scalability, and efficiency.Achieving high code quality is an ongoing process that involves following best practices, using the right tools, and continuously improving. By focusing on readability, modularity, testing, and adherence to design principles, developers can create code that is robust, efficient, and easy to maintain.",
            tool: ["React", "Tailwind"],
            code: "https://github.com/farhanahmedhamim/job-finder",
            demo: "https://job-finder-eta.vercel.app/",
        },
    ];

    return (
        <section className='project' id='project'>
            <div className="project__container">
                <div className="project__content">
                    <div className="project__top">
                        <span>PORTFOLIO</span>
                        <h2>Unique Piece of Development <img src={soft} alt="Soft" /></h2> {/* Corrected image alt text */}
                    </div>
                    <div className="project__wrap">
                        {
                            data.map((val, index) => {
                                return (
                                    <div key={index} className='single-project'>
                                        <div className="project-image">
                                            <img src={val.img} alt="" />
                                        </div>
                                        <div className="project-text">
                                            <div className="all-text">
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                                <div className="tools">
                                                    <div className='tool'>
                                                        {val.tool.map(tol => {
                                                            return (
                                                                <span key={tol}>{tol}</span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="server-site">
                                                    <div className="code">
                                                        <a href={val.code} target='_blank' rel="noopener noreferrer">
                                                            <span>code</span>
                                                            <FaGithub color='#fff' />
                                                        </a>
                                                        <a href={val.demo} target='_blank' rel="noopener noreferrer">
                                                            <span>demo</span>
                                                            <FaArrowUpRightFromSquare color='#fff' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
