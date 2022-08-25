import React from 'react';
import { debug } from './func/Func';

debug('AboutMyself.js');
class AboutMyself extends React.Component {

    render() {
        return (
            <section className="about-myself" id="about-myself">
                <h2 className="about-myself__title">ABOUT MYSELF</h2>
                <div className="about-myself__wrap">
                    <div className="about-myself__other">
                        <p>In 2002 I graduated from Sophia University, Tokyo Japan, with a Bachelor of Arts degree in Russian.</p>
                        <p>Following graduation I worked for WiZ Co., LTD in Tokyo as a toy planner and director. As a director I
                        was in charge of the planning and development of popular anime dolls(<a href="https://en.wikipedia.org/wiki/Pretty_Cure">"Pretty Cure"</a>) for the Pretty Cure franchise,
                        popular in Japan.</p><p>Following this position I worked as an information design director for Yamagata, Inc.,
                        in Shanghai, China. Yamagata, Inc. is a Japanese company that provides information design expertise to
                        companies world-wide. At this position I oversaw the production schedule for a product’s operational
                        manuals, in English and Japanese, including gathering and analyzing a product’s specifications, images,
                        and 2D/3D data as supplied by the client, developing content, and verifying the accuracy of the manuals’
                        content prior to printing.</p>
                        <p>
                        Following my position at Yamagata, Inc. and desiring to expand my technical skills I began creating
                        illustrations using Illustrator/Ibis Paint and, most recently, have begun programming with the goal of
                        creating a website to showcase my portfolio. To accomplish this I have learned php, Javascript,and React.etc</p>
                        <p>I started a <a href="https://zazacat.us" target="_blank">blog </a>to learn about affiliate marketing.</p>
                    </div>
                    <div className="about-myself__illust">
                        <img src={`${process.env.PUBLIC_URL}img/cat2.png`} alt="cat_image_2" className="about-myself__img2" />
                        <img src={`${process.env.PUBLIC_URL}img/cat1.png`} alt="cat_image_3" className="about-mylself__img3" />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMyself;
