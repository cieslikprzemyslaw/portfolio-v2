import React from 'react';

import Menu from '../../components/menu/Menu';
import './_contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <section className="contact__image">
                <section className="contact__overlay">
                    <Menu />
                    <h1 className="contact__title">
                        Contact
                    </h1>
                </section>
            </section>
            <section className="contact__info">
                <h2 className="contact__subtitle">

                </h2>
                <form action="">
                    <label htmlFor="">name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">email</label>
                    <input type="email" name="" id=""/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
                {/* //add icons */}
            </section>
        </div>
    );
};

export default Contact;