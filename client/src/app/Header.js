import React, { Component } from 'react';

export class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const navBurger = document.querySelector('.navbar-burger');
        const navMenu = document.querySelector('#navbarMain');
        navBurger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
    }

    render() {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="/img/logo.png" alt="Easy Board Collaboration Tool" height="28" /> Easy Board
                    </a>
                    <div onClick={this.toggleMenu} className="navbar-burger burger" data-target="navbarMain">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarMain" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="https://bulma.io/">Home</a>
                        <a className="navbar-item" href="https://bulma.io/">Home</a>
                        <a className="navbar-item" href="https://bulma.io/">Home</a>
                        <a className="navbar-item" href="https://bulma.io/">Home</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
