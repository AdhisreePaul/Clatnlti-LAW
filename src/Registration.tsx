import React, { useState } from 'react'; // Import useState
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
                    <div className="hello-text">JOIN US</div>
                    <h1>Fill your details</h1>
                    <p className="subtitle">And get one month of Trial!</p>
                    
                    <form className="reg-form" onSubmit={handleSubmit}>
                        <div className="reg-input-group">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" id="firstName" placeholder="Enter your first name" name="firstName" />
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" id="lastName" placeholder="Enter your last name" name="lastName" />
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="Enter your email" name="email" />
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="phone">Phone Number*</label>
                            <input type="phone" id="phone" placeholder="Enter your phone no." name="phone" />
                        </div>
                        <div className="reg-input-group">
                            <label htmlFor="course">Choose your Course*</label>
                            <input type="course" id="course" placeholder="Choose your Course" name="course" />
                            </div>
                        <div className="reg-checkbox-group">
                            <input type="checkbox" id="agree" name="agree" />
                            <label htmlFor="agree">I agree to the processing of personal data*</label>
                        </div>
                        
                        <button type="submit" className="reg-submit-btn">SUBMIT</button>
                    </form>
                </div>
                <div className="reg-form-right">
                    <img src={registerImage} alt="Person studying with a tablet" className="illustration-image" />
                </div>
            </div>
            <div className="teal-square"></div>
        </div>
    );
}

export default Registration;
