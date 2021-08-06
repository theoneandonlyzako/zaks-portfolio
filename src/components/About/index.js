import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <container>
                <h1 id='about'>Who am I?</h1>
                <row>
                <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="cover" />
                <p classname="about-bio" style={{ width: "85%" }}>
                    I have been immersed in the wide world of audio production for the
                    last 30 years spanning the worlds of live sound, broadcast audio,
                    audio post-production, and music production. However,
                    I am currently focusing primarily on Full Stack Web Development
                    and programming and absolutely Love what I do.
                </p>
                </row>
            </container>
        </section>
    );
}

export default About;