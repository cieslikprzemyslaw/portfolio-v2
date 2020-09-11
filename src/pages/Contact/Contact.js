import React, {useRef, useEffect} from 'react';

import './_contact.scss';

import { TextField, Button } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiFacebook, mdiGithub, mdiLinkedin } from '@mdi/js';
import { gsap } from "gsap";

const Contact = () => {
    const page = useRef(null);

    useEffect(()=> {
        gsap.from(page.current, {
            ease: "none",
            opacity:0,
            duration: 0.5,
        })
    });

    return (
        <div className="contact" ref={page}>
            <section className="contact__image">
                <section className="contact__overlay">
                    <h1 className="contact__title">
                        Contact
                    </h1>
                </section>
            </section>
            <section className="contact__info">
                <h2 className="contact__subtitle">
                    Want to get in touch?
                </h2>
                <form action="mailto:cprzemek91@hotmail.com" method="post" encType="text/plain" className="contact__form">
                    <TextField
                        htmlFor="name"
                        style={{ width: "100%" }} id="standard-basic" label="name" />
                    <TextField
                        htmlFor="e-mail"
                        style={{ width: "100%" }} id="standard-basic" label="e-mail" />
                    <TextField
                        htmlFor="text"
                        style={{ margin: "20px auto", width: "100%" }}
                        id="outlined-multiline-static"
                        label="Text"
                        multiline
                        rows={5}
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary"
                        type="submit">Send</Button>
                </form>
                <section className="contact__icons">
                    <a href="https://www.facebook.com/profile.php?id=100000375258188">
                        <Icon
                            path={mdiFacebook}
                            title="Facebook"
                            size={3}
                            color="#14A0F9"
                        />
                    </a>
                    <a href="https://github.com/cieslikprzemyslaw">
                        <Icon
                            path={mdiGithub}
                            title="Github"
                            size={3}
                            color="#000000"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/przemyslaw-cieslik-b90457169/">
                        <Icon
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