import React, { useState, useEffect } from 'react';
import './_Home.scss';

import Menu from '../../components/menu/Menu';

const titles = ['Junior Javascript Developer', 'Junior Front End Developer', 'Junior React Developer']

const Home = () => {
    const [titlesIndex, setTitlesIndex] = useState(0);

    const changeTitles = () => {
        setTitlesIndex(titlesIndex => titlesIndex + 1);
        if (titlesIndex === titles.length - 1) return setTitlesIndex(0);
    }

    useEffect(() => {
        const intervalIndex = setInterval(changeTitles, 1000)
        return function clear() {
            clearInterval(intervalIndex)
        }
    })

    return (
        <div className="home">
            <section className="home__overlay">
                <Menu />
                <section className="home__title" >
                    <h1 className="home__welcome" >Welcome</h1>
                    <h2 className="home__subtitle"><span className="home__description">My name is Przemyslaw Cieslik</span><span className="home__description home__description--change"> I am {titles[titlesIndex]}</span> </h2>
                </section>
            </section>
        </div>
    );
};

export default Home;