import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTractor, faHandshake, faLeaf, faSeedling, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

function Features() {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-row">

                    {/* Left Column */}
                    <div className="features-left">
                        <div className="feature">
                            <FontAwesomeIcon icon={faChartLine} size="3x" className="icon" />
                            <h2 className="feature-title">Data-driven Insights</h2>
                            <p className="feature-description">
                                Data-driven decisions for crop management, optimized yield & risk assessment.
                            </p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faTractor} size="3x" className="icon" />
                            <h2 className="feature-title">Resource Sharing</h2>
                            <p className="feature-description">
                                Access to sustainable agriculture tools, knowledge, climate best practices.
                            </p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faHandshake} size="3x" className="icon" />
                            <h2 className="feature-title">Improved Market Access</h2>
                            <p className="feature-description">
                                Connection to local and global markets, facilitating transparent transactions.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="features-right">
                        <div className="feature">
                            <FontAwesomeIcon icon={faLeaf} size="3x" className="icon" />
                            <h2 className="feature-title">Sustainable Farming</h2>
                            <p className="feature-description">
                                Promoting sustainable farming techniques to improve soil health and crop yield.
                            </p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faSeedling} size="3x" className="icon" />
                            <h2 className="feature-title">Innovative Practices</h2>
                            <p className="feature-description">
                                Implementing innovative farming practices for water conservation and organic farming.
                            </p>
                        </div>

                        <div className="feature">
                            <FontAwesomeIcon icon={faGlobe} size="3x" className="icon" />
                            <h2 className="feature-title">Global Connectivity</h2>
                            <p className="feature-description">
                                Connecting farmers worldwide to share knowledge and improve farming outcomes globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
