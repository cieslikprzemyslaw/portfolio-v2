import React, { useState, useRef, useEffect } from 'react';

import './_projects.scss';

import Icon from '@mdi/react'
import { mdiArrowRightThick, mdiArrowLeftThick } from '@mdi/js';
import { gsap } from "gsap";

const projectsArray = [
    {
        id: 0,
        name: "Pomodoro",
        description: "example description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: "https://reactjsexample.com/content/images/2019/07/Pomodoro-Clock.jpg",
        imgUrlphone: "https://reactjsexample.com/content/images/2019/07/Pomodoro-Clock.jpg",
    },
    {
        id: 1,
        name: "Pomodoro",
        description: "example description text",
        githubUrl: "https://github.com/cieslikprzemyslaw/pomodoro",
        webUrl: "",
        imgUrl: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
        imgUrlphone: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
    },
    {
        id: 2,
        name: "Pomodoro",
        description: "example4 description text",
        githubUrl: "src/Utils/Images/pomodoro-mobile.png",
        webUrl: "",
        imgUrl: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
        imgUrlphone: "https://miro.medium.com/max/602/1*bzvWJOvvgekT5hQhwNmTkg.png",
    },
]

const Projects = () => {
    const [index, setIndex] = useState(0)
    const [isActivePage, setIsActivePage] = useState(true);
    const page = useRef(null);

    useEffect(() => {
        if(isActivePage){
            gsap.from(page.current, {
                ease: "none",
                opacity:0,
                duration: 0.5,
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
        <div className="projects" ref={isActivePage ? page:null}>
            <section className="projects__image">
                <section className="projects__overlay">
                    <section className="projects__text">
                    <h1 className="projects__title">
                        Projects
                    </h1>
                    </section>
                </section>
            </section>
            <main className="projects__slider">
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
                <img className="projects__main-image" src={projectsArray[index].imgUrl} alt={projectsArray[index].name} style={{ width: "100%" }} />
                <section className="projects__description">
                    <h2 className="projects__title-slider">{projectsArray[index].name}</h2>
                    <p className="projects__description-slider">{projectsArray[index].description}</p>
                </section>
            </main>
        </div>
    );
};

export default Projects;
