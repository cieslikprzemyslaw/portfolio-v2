import React, { useRef, useEffect } from 'react';

import './_contact.scss';

import { TextField, Button } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebook, mdiGithub, mdiLinkedin } from '@mdi/js';
import { gsap } from "gsap";
import emailjs from 'emailjs-com';

const Contact = () => {
    const page = useRef(null);

    useEffect(() => {
        gsap.from(page.current, {
            ease: "none",
            opacity: 0,
            duration: 0.5,
        })
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q0ccnjc', 'template_8unzusa', e.target, 'user_cP906xejCev8XULACmF7i')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className="contact" ref={page}>
            <section className="contact__image">
                <section className="contact__overlay">
                    <section className="contact__text">
                        <h1 className="contact__title">
                            Contact
                        </h1>
                    </section>
                </section>
            </section>
            <section className="contact__info">
                <h2 className="contact__subtitle">
                    Want to get in touch?
                </h2>
                <form onSubmit={sendEmail} className="contact__form">
                    <TextField
                        htmlFor="name"
                        style={{ width: "100%" }} id="standard-basic" label="name" name="name"/>
                    <TextField
                        htmlFor="e-mail"
                        style={{ width: "100%" }} id="standard-basic" label="e-mail" name="email"/>
                    <TextField
                        htmlFor="text"
                        style={{ margin: "20px auto", width: "100%" }}
                        id="outlined-multiline-static"
                        label="message"
                        multiline
                        rows={5}
                        variant="outlined"
                        name="message"
                    />
                    <Button variant="contained" color="primary"
                        type="submit">Send</Button>
                </form>
                <section className="contact__icons">
                    <a href="https://www.facebook.com/profile.php?id=100000375258188">
                        <Icon
                            className="contact__icon"
                            path={mdiFacebook}
                            title="Facebook"
                            size={3}
                            color="#14A0F9"
                        />
                    </a>
                    <a href="https://github.com/cieslikprzemyslaw">
                        <Icon
                            className="contact__icon"
                            path={mdiGithub}
                            title="Github"
                            size={3}
                            color="#000000"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/przemyslaw-cieslik-b90457169/">
                        <Icon
                            className="contact__icon"
                            path={mdiLinkedin}
                            title="Linkedin"
                            size={3}
                            color="#006FAB"
                        />
                    </a>
                </section>
            </section>
        </div>
    );
};

export default Contact;