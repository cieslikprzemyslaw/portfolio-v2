import React from 'react';

import Menu from '../../components/menu/Menu';
import './_about.scss';

const About = () => {
    return (
        <div className="about">
            <section className="about__image">
                <section className="about__overlay">
                    <Menu />
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