import React from 'react';
import { debug } from './func/Func';

debug('Footer.js');
class Footer extends React.Component {

    render() {
        return (
            <footer className="footer" id="footer">
                Copyright <i className="fa-solid fa-copyright"></i> Miwa Murata. All Rights Reserved.
            </footer>
        );
    }
}

export default Footer;
