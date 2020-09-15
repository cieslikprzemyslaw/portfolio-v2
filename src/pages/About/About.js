import React, { useRef, useEffect } from 'react';

import './_about.scss';

import { gsap } from "gsap";

const About = () => {
    const page = useRef(null);

    useEffect(() => {
        gsap.from(page.current, {
            ease: "none",
            opacity: 0,
            duration: 0.5,
        })
    });

    return (
        <div className="about" ref={page}>
            <section className="about__image">
                <section className="about__overlay">
                    <section className="about__text">
                        <h1 className="about__title">
                            About
                    </h1>
                    </section>
                </section>
            </section>
            <section className="about__description">
                <h2 className="about__subtitle">Hey! </h2>
                <p className="about__text">I am Przemysław Cieślik, I was born and raised in Poland, since January 2018, I live in Scotland with my girlfriend and our beloved daughter. I am an ambitious person who puts family and personal development in soft, technological and English skills first. What have you been doing for a long time? In Poland, I studied logistics and ran 2 liquor stores. I was managing a small team of 4 people. I liked my job very much. Contact with clients and sales representatives made me feel professionally fulfilled. In my spare time, I also helped my parents in their business. During this time, I learned a lot about business, how to manage a team and how trade and product promotion work. In 7 years my city, where I lived and worked, has changed. Many residents from the area moved to large metropolises or went abroad. </p>
                <h2 className="about__subtitle">How did you get where you are now?</h2>
                <p className="about__text">In the spring of 2017, I met my love. After some time, we wondered whether we should live together. But neither of us wanted to live in the cities we grew up in. The choice was large because we were not limited to Poland only. In the end, we felt the UK would be the best choice for us, especially as we have friends and my girlfriend and family here. After a month of job searches in England, Northern Ireland and Scotland, Scotland was chosen.</p>
                <h2 className="about__subtitle">How did your adventure with programming start?</h2>
                <p className="about__text">I work in a sawmill, in a place where there is no perspective of self-development, which is the most important for me. I was learning and developing all my life, and after a year in the sawmill I felt something was missing. And I decided why not try learning programming again, after all in high school I wanted to learn it (I wanted to learn c ++, but the chapter on imaginary numbers and studying functions was too much for me). And so I started learning at the beginning of Java. W className="about__text"hen my girlfriend was born, I started to learn, I learned the basics of the language very quickly, but when it comes to frameworks, I decided that the back end is not what I would like to do. And so I started to get to know the front end. I felt that this was what I like to do. Learning the basics was very quick. I started learning React, slowly knew how to solve programming problems and learned to work with the API.</p>
                <h2 className="about__subtitle">Hold on. Are you working, do you have a child and are you still studying?</h2>
                <p className="about__text">Oh yes. I don't have much time to study because parenting plus work takes up most of my day. Some people relax by the TV watching their favorite series (I do too), others go to the gym and me? I am writing. I write every day for 2 hours because that is all I can afford. Sometimes I feel like I'm addicted to it.
                Arguments? Here you are:
                When I work, I think what could be done, what project, what problems could happen and how I could solve them.
                A break at work for me is not only to eat, but also to look for a solution to my problem that I currently have in my project.
                Before bed, often when I need to learn something. I read and watch how something works and why it works the way it does. In this way, I learned how to work in a basic level with git and Adobe XD among others to mock up pages.
                I have a problem to solve, but I need to learn something? No problem, these 30 minutes before bedtime is exactly what it is intended for.</p>
            </section>
        </div>
    );
};

export default About;