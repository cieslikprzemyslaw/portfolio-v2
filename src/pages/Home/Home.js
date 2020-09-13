import React, { useState, useEffect, useRef } from 'react';
import './_Home.scss';

import { gsap } from "gsap";

const titles = ['I am Junior Javascript Developer', 'I am Junior Front End Developer', 'I am Junior React Developer']

const Home = () => {
    const [titlesIndex, setTitlesIndex] = useState(0);
    const animate = useRef(null);

    const changeTitles = () => {
        setTitlesIndex(titlesIndex => {
            if (titlesIndex === titles.length - 1) return setTitlesIndex(0);
            if (titlesIndex < titles.length) return(setTitlesIndex(titlesIndex => titlesIndex+1))
        });
       

    }

    useEffect(() => {
        gsap.from(animate.current, {
            duration: 2,
            opacity: 0,
            ease: 'none',
        })
        const intervalIndex = setInterval(changeTitles, 3000)
        return function clear() {
            clearInterval(intervalIndex)
        };
    })



    return (
        <div className="home">
            <section className="home__overlay">
                <section className="home__title" >
                    <h1 className={"home__welcome"} >Hi!</h1>
                    <h2 className="home__subtitle"><span className="home__description">I am Przemyslaw Cieslik</span>
                    <span className="home__description home__description--change" ref={animate}>{titles[titlesIndex]}</span> 
                    </h2>
                </section>
            </section>
        </div>
    );
};

export default Home;