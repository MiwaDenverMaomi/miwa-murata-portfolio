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
                        <p>I started out getting my BA in Russian back in 2002 Sophia University in Japan. After college, I worked as a toy planner/dirrector in charge of the planning and development of popular anime dolls (<a href="https://en.wikipedia.org/wiki/Pretty_Cure">"Pretty Cure"</a>).I then worked as an information design director in Shanghai, China for Yamagata Inc where I managed and created the content of operational manuals for home electronics in several different languages. I wrote Japanese/English manuals according to the specifications, pictures, 2D/3D data supplied from the clients, checking if the updated manual does not have wrong instructions and controlled the entire schedule for manual making, including DTP/translations as a director. In my spare time, I draw illustrations with illustrator/ibis paint.</p>
                        <p>Most recently, I started programming. The reason that I started was I wanted to make a website to showcase my portfolio. In this time, I learned php, Javascript, Vue.js and React,etc. In addition, I started a <a href="https://zazacat.us" target="_blank">blog</a>to learn about affiliate marketing.</p>
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
