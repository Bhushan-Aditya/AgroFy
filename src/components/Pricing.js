import React from 'react';
import './Pricing.css';

function Pricing() {
    return (
        <section className="pricing-section">
            <div className="container">
                <h1 className="section-title">Our Pricing Plans</h1>
                <div className="pricing-cards">
                    {/* Free Plan */}
                    <div className="pricing-card">
                        <h2 className="plan-name">Free</h2>
                        <p className="plan-price">₹0 <span>/month</span></p>
                        <ul className="plan-features">
                            <li>Basic Access to Agriculture Resources</li>
                            <li>Community Support</li>
                            <li>Basic Data Analytics</li>
                        </ul>
                        <button className="select-plan-button">Choose Plan</button>
                    </div>

                    {/* Basic Plan */}
                    <div className="pricing-card featured-card">
                        <h2 className="plan-name">Basic</h2>
                        <p className="plan-price">₹499 <span>/month</span></p>
                        <ul className="plan-features">
                            <li>Access to Agriculture Tools & Data</li>
                            <li>24/7 Support</li>
                            <li>Moderate Data Analytics</li>
                            <li>Market Access</li>
                        </ul>
                        <button className="select-plan-button">Choose Plan</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="pricing-card">
                        <h2 className="plan-name">Pro</h2>
                        <p className="plan-price">₹999 <span>/month</span></p>
                        <ul className="plan-features">
                            <li>All Features from Basic</li>
                            <li>Advanced Data Insights</li>
                            <li>Personalized Market Assistance</li>
                            <li>Real-time Market Data</li>
                        </ul>
                        <button className="select-plan-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
