import React from 'react';
import FAOlogo from '../assets/fao-logo.png';
import GoGreen from '../assets/globe-with-leaves.png';
import './Hero.css';
import './Features.css' // Ensure Feature.css styles are also imported in hero section

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <img src={FAOlogo} alt="FAO logo" className="fao-logo" />
                <div className="hero-content">
                    <h1 className="hero-title">Let's Grow Together</h1>
                    <p className="hero-subtitle">Building a Sustainable Future for Farmers Worldwide</p>
                    <button className="learn-more-button">Learn More</button>
                </div>
                <img src={GoGreen} alt="Go Green" className="go-green-image" />
            </div>
            {/*Features Content (add below the closing </div> for container*/}
            <section className="features">
                <div className="container">
                    <div className="feature">
                        <h2 className="feature-title">Resource Sharing</h2>
                        <p className="feature-description">
                            Access to sustainable agriculture tools, knowledge, climate best
                            practices.
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Data-driven Insights</h2>
                        <p className="feature-description">
                            Data-driven decisions for crop management, optimized yield & risk
                            assessment.
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Improved Market Access</h2>
                        <p className="feature-description">
                            Connection to local and global markets, facilitating transparent
                            transactions.
                        </p>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Hero;