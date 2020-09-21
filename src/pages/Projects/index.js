import React, { useState, useRef, useEffect } from 'react';

import './_projects.scss';
import Pomodoro from '../../utils/projects-images/pomodoro.png';
import LeagueOfLegends from '../../utils/projects-images/lol.png';
import Weather from '../../utils/projects-images/weather.png';
import Portfolio from '../../utils/projects-images/portfolio.png';
import Portfolio2 from '../../utils/projects-images/portfolio-2.png';
import NoImage from '../../utils/projects-images/no-image.png';
import Circles from '../../utils/projects-images/circles.png';

import Icon from '@mdi/react'
import { mdiArrowRightThick, mdiArrowLeftThick, mdiWeb, mdiGithub } from '@mdi/js';
import { gsap } from "gsap";

const projectsArray = [
    {
        id: 0,
        name: "Circles-Web",
        description: [
            "The first project that does not write alone and I was invited to it. It is a messenger. Written in React using Typescript",
            "Currently, I am responsible for the appearance of the news and the landing skeleton. I made a skeleton for loading rooms after logging into the application.",
            "Everyone in the group does something in their spare time between work and their projects. After the portfolio website, I plan to devote my free time to the further development of my application and my application. By spending more time on this messenger.",
            "One day there will be a stable version at the moment there is no URL for the page.",
        ],
        githubUrl: "https://github.com/DRFR0ST/circles-web",
        webUrl: null,
        imgUrl: Circles,
    },
    {
        id: 1,
        name: "This website Portfolio v 2.0",
        description: [
            "I approached this project with due preparation and respect for my work.I created a mock-up and made it available for review to a few people in the industry, improved the project and made it public for Facebook programming related groups. As the project was received positively by the group that interested me, I started creating the project.",
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/portfolio-v2",
        webUrl: "https://przemyslaw-portfolio.netlify.app",
        imgUrl: Portfolio2,
    },
    {
        id: 2,
        name: "Pomodoro",
        description: [
            "The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned: How to work with hooks. How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock.",
            "The project isn't perfect, couples things miss like sound and little bugs in logic function (add and remove minutes), but this is my 1st project what I made alone without any course etc.",
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "przemyslaw-pomodoro.netlify.app",
        imgUrl: Pomodoro,
    },
    {
        id: 3,
        name: "League Of Legends Characters Library",
        description: [
            "Before I worked with arrays with objects and I know how to work with it very well, but firebase has different structure for JSON format. ",
            "The project was created for understanding how to iterate through the object with objects inside, how to work react-router and I wanted to do something like product list but not like everybody that why I found great API to create this app. ",
            "League of legends library have good potential and can be great when I change couples things like check path No. in API and show the newest data. The project needs a couple of styles to look awesome. ",
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/LegueOfLegends_Characters",
        webUrl: "https://cieslikprzemyslaw.github.io/LegueOfLegends_Characters/",
        imgUrl: LeagueOfLegends,
    },
    {
        id: 4,
        name: "Weather App useing Met Office API",
        description: [
            "Everybody makes a weather app or most people doing that I decided to create a weather app but not like everybody with simple API. I wanted to create something different and I found Met Office forecast API.  In the project, I used 2 data.",
            "First of them is a list of all places with the weather forecast where we need to check id for a city.",
            "Second is for check forecast where we looking for. ",
            "In the project, I was focused on the logical site of this app and I don't do styles. ",
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/weatherApp-metofficeApi",
        webUrl: "https://cieslikprzemyslaw.github.io/weatherApp-metofficeApi/",
        imgUrl: Weather,
    },
    {
        id: 5,
        name: "Portfolio v 1.0",
        description: [
            "This project was a big defeat. I tried did the portfolio website without previous preparation mockup and what I want to show for people who read my website.",
            "People learn from their mistakes and I learned something in this project. Preparation is essential if you want to create something good. ",
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/PortfolioWebsite",
        webUrl: "https://przemyslawcieslik-portfolio.netlify.app/",
        imgUrl: Portfolio,
    },
    {
        id: 6,
        name: "WebPack - basic tool kit",
        description: [
            "It's a basic tool kit what I created. I have hope I can use it in my 1st commercial project, but when I writing this text I waiting for customer expectations regarding the project, then I want to make a decision about what I should use to my 1st project."
        ],
        githubUrl: "https://github.com/cieslikprzemyslaw/webpack-basic-toolkit",
        webUrl: null,
        imgUrl: NoImage,
    },
]

const Projects = () => {
    const [index, setIndex] = useState(0)
    const [isActivePage, setIsActivePage] = useState(true);
    const pageHeader = useRef(null);
    const pageContent = useRef(null);

    useEffect(() => {
        if (isActivePage) {
            gsap.from(pageHeader.current, {
                ease: "none",
                top: 0,
                left: 0,
                translateX: "100vw",
                duration: 0.8,
            })
            gsap.from(pageContent.current, {
                ease: "none",
                top: 0,
                left: 0,
                translateX: "-100vw",
                duration: 0.8,
            })
            setIsActivePage(false)
        }
    }, [isActivePage]);

    const handleClickRight = () => {
        setIndex(index => index + 1);
        if (index === projectsArray.length - 1) return setIndex(0);
    }

    const handleClickLeft = () => {
        setIndex(index => index - 1);
        if (index === 0) return setIndex(projectsArray.length - 1);
    }

    return (
        <div className="projects">
            <section className="projects__image" ref={pageHeader}>
                <section className="projects__overlay">
                    <section className="projects__text">
                        <h1 className="projects__title">
                            Projects
                    </h1>
                    </section>
                </section>
            </section>
            <section className="projects__arrow-right" onClick={handleClickRight}>
                <Icon
                    size={2}
                    style={{ color: "white" }}
                    path={mdiArrowRightThick}
                />
            </section>
            <section className="projects__arrow-left" onClick={handleClickLeft}>
                <Icon
                    size={2}
                    style={{ color: "white" }}
                    path={mdiArrowLeftThick}
                />
            </section>
            <main className="projects__slider" ref={pageContent}>
                <section className="projects__image-wrapper" style={{ margin: "0 auto" }}>
                    <img className="projects__main-image" src={projectsArray[index].imgUrl} alt={projectsArray[index].name} style={{ maxHeight: "40vh", maxWidth: "100vw" }} />
                </section>
                <section className="projects__description-wrapper">
                    <section className="projects__description">
                        <h2 className="projects__title-slider">{projectsArray[index].name}</h2>
                        <p className="projects__description-slider">{(projectsArray[index].description).map(description => {
                            return (
                                <p>{description}</p>
                            )
                        })}</p>
                    </section>
                    <section className="projects__links">
                        <section className="projects__url">
                            <a href={projectsArray[index].githubUrl} className="project__link">
                                <Icon
                                    className="projects__icon"
                                    size={2}
                                    style={{ color: "black" }}
                                    path={mdiGithub}
                                />
                            </a>
                            <h3>Github</h3>
                        </section>
                        {projectsArray[index].webUrl ? <section className="projects__url">
                            <a href={projectsArray[index].webUrl} className="project__link">
                                <Icon
                                    className="projects__icon"
                                    size={2}
                                    style={{ color: "black" }}
                                    path={mdiWeb}
                                />
                            </a>
                            <h3>Website</h3>
                        </section> : null}
                    </section>
                </section>

            </main>
        </div>
    );
};

export default Projects;
