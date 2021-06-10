import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

export const Header = () => <div className="Header">

    <div className="Header__box">
        <div className="Header__logo-box">
            <Link className="Header__logo" to="#">Pacifico</Link>
        </div>
        <div className="Header__menu-items">
            <Link className="Header__menu-items" to="#">Home</Link>
            <Link className="Header__menu-items" to="#">About</Link>
            <Link className="Header__menu-items" to="#">Galery</Link>
            <Link className="Header__menu-items" to="#">Team</Link>
            <Link className="Header__menu-items" to="#">Services</Link>
            <Link className="Header__menu-items" to="#">Features</Link>
            <Link className="Header__menu-items" to="#">Pricing</Link>
            <Link className="Header__menu-items" to="#">Blog</Link>
            <Link className="Header__menu-button" to="#">Get Started</Link>
        </div>
    </div>
</div>