import React, { useRef, useEffect } from 'react';

import './_about.scss';

import { gsap } from "gsap";

const About = () => {
    const pageHeader = useRef(null);
    const pageContent = useRef(null);

    useEffect(() => {
        gsap.from(pageHeader.current, {
            ease: "none",
            top:0,
            left:0,
            translateX: "100vw",
            duration:0.8,
        })
        gsap.from(pageContent.current, {
            ease: "none",
            top:0,
            left:0,
            translateX: "-100vw",
            duration:0.8,
        })
    });

    return (
        <div className="about">
            <section className="about__image" ref={pageHeader}>
                <section className="about__overlay">
                    <section className="about__text">
                        <h1 className="about__title">
                            About
                    </h1>
                    </section>
                </section>
            </section>
            <section className="about__description" ref={pageContent}>
                <h2 className="about__subtitle">Hey! </h2>
                <p className="about__me">I am Przemysław Cieślik, I was born and raised in Poland and have been living in Scotland with my girlfriend and our beloved daughter for the past couple of years. I am an ambitious person who puts family and personal development first.</p>
                <h2 className="about__subtitle">How did you get where you are now?</h2>
                <p className="about__me">In Poland, I studied logistics and ran two liquor stores where I was managing a small team. I liked my job very much. The contact with clients and sales representatives made me feel professionally fulfilled. In my spare time, I also helped my parents in their business. During this time, I learned a lot about business, how to manage a team, and how trade and product promotion work.
                After moving to Scotland with my wife, I began working in a sawmill. A sawmill is not a place where there are opportunities for self-development. Self-development is very important to me so I felt something was missing.
                (Maybe - “I loved programming in high school, so I decided to try learning programming again.” I would leave out the stuff about struggling with imaginary numbers...)
                I started by learning Java and quickly realized that the back end is not what I would like to do. And so I started to get to know the front end. Learning the basics happened very quickly. I then started learning React, how to work with APIs, and how to solve programming problems.</p>
                <h2 className="about__subtitle">Hold on. Are you working, do you have a child and are you still studying?</h2>
                <p className="about__me">Oh yes. I don't have much time to study because parenting plus work takes up most of my day. Some people relax by watching their favorite series on TV, others go to the gym, and me? I am programing and solve problems during writing code. Despite work and parenting, I still program every day for 2 hours. Sometimes I feel like I'm addicted to it.
                I am constantly thinking about what could be done, what project could I work on, what problems could happen and how I could solve them. A break at work for me is not only to eat but also to code. Before bed, I code. In this way, I have learned HTML, CSS, Javascript, React, Git, Adobe XD and how to work with APIs and npm packages</p>
            </section>
        </div>
    );
};

export default About;