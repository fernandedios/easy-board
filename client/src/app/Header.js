import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

    renderMenu() {
        if (this.props.auth) {
            return (
                <div className="navbar-end">
                    <Link className="navbar-item" to="/profile">Profile</Link>
                    <Link className="navbar-item" to="/logout">Logout</Link>
                </div>
            );
        }
        else {
            return (
                <div className="navbar-end">
                    <Link className="navbar-item" to="/login">Login</Link>
                    <Link className="navbar-item" to="/signup">Signup</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="/img/logo.png" alt="Easy Board Collaboration Tool" height="28" /> Easy Board
                    </Link>
                    <div onClick={this.toggleMenu} className="navbar-burger burger" data-target="navbarMain">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarMain" className="navbar-menu">
                    {this.renderMenu()}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);
