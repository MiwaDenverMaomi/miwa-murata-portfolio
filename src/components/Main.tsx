import React from 'react';
import AboutMyself from './AboutMyself';
import Footer from './Footer';
import Contact from './Contact';
import History from './History';
import Works from './../container/Works';
import { debug } from './func/Func';

debug('main.js');
class Main extends React.Component {
    render() {
        debug('main.js render');
        return (
            <main className="main" id="main">
                <History />
                <AboutMyself />
                <Works.webDev />
                <Works.illust />
                <Contact />
            </main>
        );
    }
}

export default Main;
