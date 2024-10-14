import React, { useState } from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${name}!`);
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>You can reach us at: info@example.com</p>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit" className="submit-btn">Send</button>
            </form>
            <h2>Social Media</h2>
            <p className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
        </div>
    );
};

export default Contact;
