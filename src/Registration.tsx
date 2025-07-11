import React, { useState } from 'react'; // Import useState
import { User, Mail, Phone, BookOpenCheck } from 'lucide-react';
import './Registration.css'; // Make sure to create this new CSS file
import registerImage from './assets/register.jpg'; // Import the new image

function Registration() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from reloading on submit
        setIsSubmitted(true); // Show the pop-up
        // Here you would typically send form data to a server
    };

    return (
        <div className="reg-page-container">
            {isSubmitted && (
                <div className="popup-message">
                    <span>You successfully registered yourself!</span>
                    <button onClick={() => setIsSubmitted(false)} className="popup-close-btn">×</button>
                </div>
            )}
            <div className="reg-form-wrapper">
                <div className="reg-form-left">
                    
                    <h1>Fill your details</h1>
                    <p className="subtitle">And get one month of Trial!</p>
                    
                    <form className="reg-form" onSubmit={handleSubmit}>
                        <div className="reg-input-group">
                            <label htmlFor="firstName">First Name*</label>
                            <div className="reg-input-wrapper">
                                <User className="reg-input-icon" size={18} />
                                <input type="text" id="firstName" placeholder="Enter your first name" name="firstName" required />
                            </div>
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="lastName">Last Name*</label>
                            <div className="reg-input-wrapper">
                                <User className="reg-input-icon" size={18} />
                                <input type="text" id="lastName" placeholder="Enter your last name" name="lastName" required />
                            </div>
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="email">Email*</label>
                            <div className="reg-input-wrapper">
                                <Mail className="reg-input-icon" size={18} />
                                <input type="email" id="email" placeholder="Enter your email" name="email" required />
                            </div>
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="phone">Phone Number*</label>
                            <div className="reg-input-wrapper">
                                <Phone className="reg-input-icon" size={18} />
                                <input type="tel" id="phone" placeholder="Enter your phone no." name="phone" required />
                            </div>
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="course">Choose your Course*</label>
                            <div className="reg-input-wrapper">
                                <BookOpenCheck className="reg-input-icon" size={18} />
                                <input type="text" id="course" placeholder="Choose your Course" name="course" required />
                            </div>
                        </div>
                        <div className="reg-checkbox-group">
                            <input type="checkbox" id="agree" name="agree" required />
                            <label htmlFor="agree">I agree to the processing of personal data*</label>
                        </div>
                        
                        <button type="submit" className="reg-submit-btn">SUBMIT</button>
                    </form>
                </div>
                <div className="reg-form-right">
                    <img src={registerImage} alt="Person studying with a tablet" className="illustration-image" />
                </div>
            </div>
        </div>
    );
}

export default Registration;
