import React, { useState, useRef, useEffect } from 'react';

import './_projects.scss';
import Pomodoro from '../../utils/projects-images/pomodoro.png';
import LeagueOfLegends from '../../utils/projects-images/lol.png';
import Weather from '../../utils/projects-images/weather.png';

import Icon from '@mdi/react'
import { mdiArrowRightThick, mdiArrowLeftThick, mdiWeb, mdiGithub } from '@mdi/js';
import { gsap } from "gsap";

const projectsArray = [
    {
        id: 0,
        name: "Circles-Web",
        description: "The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: Pomodoro,
    },
    {
        id: 1,
        name: "This website Portfolio v2",
        description: "The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: Pomodoro,
    },
    {
        id: 2,
        name: "Pomodoro",
        description: "The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.The second project, I wanted to do something that can be useful for learning. I chose the Pomodoro clock. What have I learned:How to work with hooks.How to work with useEffect and what is it.",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: Pomodoro,
    },
    {
        id: 3,
        name: "League Of Legends Characters Library",
        description: "example description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/LegueOfLegends_Characters",
        webUrl: "",
        imgUrl: LeagueOfLegends,
    },
    {
        id: 4,
        name: "Weather App useing Met Office API",
        description: "example4 description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/weatherApp-metofficeApi",
        webUrl: "",
        imgUrl: Weather,
    },
    {
        id: 5,
        name: "Portfolio v1",
        description: "example4 description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/PortfolioWebsite",
        webUrl: "",
        imgUrl: Weather,
    },
    {
        id: 6,
        name: "WebPack - basic tool kit",
        description: "example4 description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/webpack-basic-toolkit",
        webUrl: "",
        imgUrl: Weather,
    },
    {
        id: 7,
        name: "WebPack - basic tool kit",
        description: "example4 description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/webpack-basic-toolkit",
        webUrl: "",
        imgUrl: Weather,
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
                        <p className="projects__description-slider">{projectsArray[index].description}</p>
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
                        <section className="projects__url">
                            <a href={projectsArray[index].webUrl} className="project__link">
                                <Icon
                                    className="projects__icon"
                                    size={2}
                                    style={{ color: "black" }}
                                    path={mdiWeb}
                                />
                            </a>
                            <h3>Website</h3>
                        </section>
                    </section>
                </section>

            </main>
        </div>
    );
};

export default Projects;
