import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <span className="agrofy-logo">AgroFy</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;