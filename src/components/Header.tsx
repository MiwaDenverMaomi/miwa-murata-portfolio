import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { debug } from './func/Func';

debug('Header.js');

type StateType = {
    isMenuActive: boolean
}

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.onClickOpenMenuBars = this.onClickOpenMenuBars.bind(this);
        this.onClickCloseMenuBars = this.onClickCloseMenuBars.bind(this);
    }

    state: StateType = {
        isMenuActive: false
    }

    onClickOpenMenuBars() {
        console.log('onclickopenmenu');
        this.setState({ isMenuActive: !this.state.isMenuActive });
    }

    onClickCloseMenuBars() {
        this.setState({ isMenuActive: false });
    }

    render() {
        return (
            <header className={this.state.isMenuActive ? "header active" : "header"} id="header">
                <nav className="header__nav">
                    <ul className={this.state.isMenuActive ? "header__nav-list active" : "header__nav-list"}>
                        <li className="header__nav-item"><AnchorLink href="#about-myself" className="header__link" onClick={this.onClickCloseMenuBars}>About Myself</AnchorLink></li>
                        <li className="header__nav-item"><AnchorLink href="#works-webdev" className="header__link" onClick={this.onClickCloseMenuBars}>Web Development</AnchorLink></li>
                        <li className="header__nav-item"><AnchorLink href="#works-illustrating" className="header__link" onClick={this.onClickCloseMenuBars}>Illustrations</AnchorLink ></li>
                        <li className="header__nav-item" ><AnchorLink href="#contact" className="header__link" onClick={this.onClickCloseMenuBars}>Contact</AnchorLink ></li>
                        <li className="header__nav-item"><a href="https://www.zazacat.us" target="_blank" className="header__link" onClick={this.onClickCloseMenuBars}>Blog</a ></li>
                    </ul>
                    <h1 className="header__title"><a href="#top" className="header__link">Miwa's Portforlio</a ></h1>
                </nav>
                <div className="header__menu-bars" onClick={this.onClickOpenMenuBars}><i className="fa-solid fa-bars"></i></div>
            </header>
        );
    }
}

export default Header;
