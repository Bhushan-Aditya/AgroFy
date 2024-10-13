import React from 'react';
import { FaBullseye, FaRegEye, FaCogs, FaUsers } from 'react-icons/fa';
import './About.css';

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <h1 className="about-title">About AgroFy</h1>
                <p className="about-description">
                    AgroFy is revolutionizing the way farmers access resources, manage crops, and connect with global markets. Our platform offers cutting-edge tools powered by data-driven insights, helping farmers grow sustainably and thrive.
                </p>

                {/* Mission Section */}
                <div className="about-content">
                    <div className="about-icon">
                        <FaBullseye size={50} color="#28a745" />
                    </div>
                    <div className="about-text">
                        <h2 className="sub-title">Our Mission</h2>
                        <p>
                            We strive to empower farmers with knowledge, technology, and market access to ensure sustainable agricultural practices. Our mission is to promote food security and environmental sustainability through technology and innovation.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="about-content">
                    <div className="about-icon">
                        <FaRegEye size={50} color="#28a745" />
                    </div>
                    <div className="about-text">
                        <h2 className="sub-title">Our Vision</h2>
                        <p>
                            AgroFy's vision is to create a world where farmers are empowered with the right tools and resources, leading to a sustainable and prosperous agricultural ecosystem. We aim to make farming a smart, data-driven, and eco-friendly practice, ensuring food security for generations to come.
                        </p>
                    </div>
                </div>

                {/* Key Features Section */}
                <div className="about-content">
                    <div className="about-icon">
                        <FaCogs size={50} color="#28a745" />
                    </div>
                    <div className="about-text">
                        <h2 className="sub-title">Key Features</h2>
                        <ul className="key-features-list">
                            <li><strong>Data-Driven Insights:</strong> Harness the power of big data to optimize crop yield and reduce risks.</li>
                            <li><strong>Market Access:</strong> Seamlessly connect farmers with local and global markets for better pricing.</li>
                            <li><strong>Sustainability Tools:</strong> Promote eco-friendly farming practices through resource-sharing and climate-adapted techniques.</li>
                            <li><strong>Community Support:</strong> Be a part of a vibrant farming community that shares knowledge and expertise.</li>
                            <li><strong>Advanced Crop Management:</strong> Use predictive analytics for optimal planting, irrigation, and harvesting times.</li>
                        </ul>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="about-content">
                    <div className="about-icon">
                        <FaUsers size={50} color="#28a745" />
                    </div>
                    <div className="about-text">
                        <h2 className="sub-title">Our Impact</h2>
                        <p>
                            With AgroFy, we’ve transformed the farming experience for thousands of farmers worldwide. Through education, innovation, and collaboration, we’ve enabled farmers to increase their productivity, reduce environmental impacts, and grow their businesses sustainably. Our community is thriving, and we are committed to expanding our impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
