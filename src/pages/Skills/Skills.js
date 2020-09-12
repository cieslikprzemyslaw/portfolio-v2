import React, { useState, useRef, useEffect } from 'react';

import './_skills.scss';

import Icon from '@mdi/react'
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiNpm, mdiGit, mdiMaterialUi } from '@mdi/js';
import { gsap } from "gsap";

const technologyStack = [
    {
        id: 0,
        icon: mdiLanguageHtml5,
        name: "HTML5",
        description: [
            'Good knowledge about semantic tags',
            'BEM methodology',
        ],
        color: "E44D26",
    },
    {
        id: 1,
        icon: mdiLanguageCss3,
        name: "CSS3",
        description: [
            'Progressive Web Applications',
            'Good background ',
            'Animation with use @keyframes',
            'Flexbox',
            'CSS Grid',
        ],
        color: "2465F1",
    },
    {
        id: 2,
        icon: mdiLanguageJavascript,
        name: "Javascript",
        description: [
            'Closures and Hoisting',
            'ES6',
            'Connect with API (Fetch method)',
            'Knowladge how work async and sync',
            'Good knowledge of the syntax',
        ],
        color: "F0D91D",
    },
    {
        id: 3,
        icon: mdiReact,
        name: "React",
        description: [
            'React router',
            'React Hooks',
        ],
        color: "5ED4F4",
    },
    {
        id: 4,
        icon: mdiNpm,
        name: "NPM",
        description: [
            'Basic knowladge how to work with NPM and how to use it.',
        ],
        color: "C53635",
    },
    {
        id: 5,
        icon: mdiGit,
        name: "GIT",
        description: [
            'Basic knowledge about commands to work with my repositories and repositories other people. ',
        ],
        color: "E94F32",
    },
    {
        id: 6,
        icon: mdiMaterialUi,
        name: "Material UI",
        description: [
            'Knowladge how to work with documentation and components from Material UI'
        ],
        color: "007DC5",
    },
]

const Skills = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = useState(null);
    const [isActivePage, setIsActivePage] = useState(true);
    const page = useRef(null);

    useEffect(() => {
        if (isActivePage) {
            gsap.from(page.current, {
                ease: "none",
                opacity: 0,
                duration: 0.5,
            })
            setIsActivePage(false)
        }
    });

    const handleClick = (id) => {
        setIsClicked(true)
        setIndex(id)
    }

    const showTechnologyDescription = () => {
        return (
            <>
                <h3 className="skills__icon-title">{technologyStack[index].name}</h3>
                <p className="skills__icon-description">{(technologyStack[index].description).map(paragraph => {
                    return (
                        <p className="skills__paragraph">{paragraph}</p>)
                })}</p>
            </>
        )
    }


    return (
        <div className="skills" ref={page}>
            <section className="skills__image">
                <section className="skills__overlay">
                    <section className="skills__text">
                        <h1 className="skills__title" >
                            Technology Stack
                        </h1>
                    </section>
                </section>
            </section>
            <section className="skills__section">
                <section className="skills__description">
                    {isClicked ? showTechnologyDescription() : <p className="skills__description-null">Please click on a Icon</p>}
                </section>
                <section className="skills__icons">
                    {technologyStack.map(skill => {
                        const { id, icon, name, color } = skill
                        return (
                            <Icon
                                className="technology__skill"
                                key={id}
                                size={3}
                                path={icon}
                                title={name}
                                color={color}
                                onClick={handleClick.bind(this, id)}
                            />
                        )
                    })}
                </section>
            </section>
        </div>
    );
};

export default Skills;