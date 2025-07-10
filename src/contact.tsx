import React from 'react';
import './contact.css';
import mapImage from './assets/map.png';

function ContactPage() {
    return (
        <div className="contact-page-container">
            <div className="contact-form-wrapper">
                <h1>Get In Touch</h1>
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-row">
                        <input type="tel" placeholder="Your Number" />
                    </div>
                    <div className="form-row">
                        <textarea placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="send-message-btn">Send Message</button>
                </form>
            </div>
            <div className="contact-map-wrapper">
                <img src={mapImage} alt="Location map" />
            </div>
        </div>
    );
}

export default ContactPage;
