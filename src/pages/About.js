import React from 'react';
import '../styles/About.css'; 

const About = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
             The User Management App is a web-based application designed to simplify the management of user data for organizations. 
             It provides a user-friendly interface for administrators to perform various operations related to user accounts, 
             such as creating, updating, deleting, and viewing user information. This app is essential for businesses, educational 
             institutions, and any organization that needs to manage user profiles efficiently.
            </p>

            <h2>Our Team</h2>
            <div className="team-section">
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="team-photo" />
                    <h3>Anastasiia</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="team-photo" />
                    <h3>Anastasiia</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member" className="team-photo" />
                    <h3>Anastasiia</h3>
                    <p>UX/UI Designer</p>
                </div>
            </div>

        </div>
    );
};

export default About;
