import React, { useRef, useEffect } from 'react';

import './_about.scss';

import { gsap } from "gsap";

const About = () => {
    const page = useRef(null);

    useEffect(() => {
        gsap.from(page.current, {
            ease: "none",
            opacity:0,
            duration: 0.5,
        })
    });

    return (
        <div className="about" ref={page}>
            <section className="about__image">
                <section className="about__overlay">
                    <h1 className="about__title">
                        About
                    </h1>
                </section>
            </section>
            <section className="about__description">
                <h2 className="about__subtitle">Welcome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima cumque omnis illo adipisci, corrupti odio quis? Distinctio ullam recusandae qui praesentium, atque accusantium quae nemo dolorem iusto cum corporis.</p>
            </section>
            <section className="about__description">
                <h2 className="about__subtitle">Welcome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima cumque omnis illo adipisci, corrupti odio quis? Distinctio ullam recusandae qui praesentium, atque accusantium quae nemo dolorem iusto cum corporis.</p>
            </section>
        </div>
    );
};

export default About;