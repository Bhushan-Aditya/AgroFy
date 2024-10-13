import React from 'react';
import FAOlogo from '../assets/fao-logo.png';
import GoGreen from './globe-with-leaves.png';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src={FAOlogo} alt="FAO logo" className="fao-logo" />
                <div className="hero-text">
                    <h1 className="hero-title">Let's Grow Together</h1>
                    <p className="hero-subtitle">Building a Sustainable Future for Farmers Worldwide</p>
                    <button className="learn-more-button">Learn More</button>
                </div>
                <img src={GoGreen} alt="Go Green" className="go-green-image" />
            </div>
            <div className="features">
                <div className="feature">
                    <h2>Resource Sharing</h2>
                    <p>Access to sustainable agriculture tools, knowledge, climate best practices.</p>
                </div>
                <div className="feature">
                    <h2>Data-driven Insights</h2>
                    <p>Data-driven decisions for crop management, optimized yield & risk assessment.</p>
                </div>
                <div className="feature">
                    <h2>Improved Market Access</h2>
                    <p>Connection to local and global markets, facilitating transparent transactions.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;