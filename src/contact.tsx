import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import './contact.css';
import mapImage from './assets/map.png';

function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="contact-page-container">
            {isSubmitted && (
                <div className="popup-message">
                    <span>Your message has been sent successfully!</span>
                    <button onClick={() => setIsSubmitted(false)} className="popup-close-btn">×</button>
                </div>
            )}
            <div className="contact-form-wrapper">
                <h1>Get In Touch</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                        <label htmlFor="name">Your Name*</label>
                        <div className="contact-input-wrapper">
                            <User className="contact-input-icon" size={18} />
                            <input id="name" type="text" placeholder="Enter your name" required />
                        </div>
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="email">Your Email*</label>
                        <div className="contact-input-wrapper">
                            <Mail className="contact-input-icon" size={18} />
                            <input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="phone">Your Number</label>
                        <div className="contact-input-wrapper">
                            <Phone className="contact-input-icon" size={18} />
                            <input id="phone" type="tel" placeholder="Enter your number" />
                        </div>
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message">Your Message*</label>
                        <textarea id="message" placeholder="Your Message" required></textarea>
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
