import React, { useState } from 'react';
import './signin.css';
import logo from './assets/logo.jpg'; // Assuming logo.jpg is your circular logo

function SignInPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="signin-page-container">
            <div className="signin-form-wrapper">
                <header className="signin-header">
                    <img src={logo} alt="National Law Training Institute Logo" className="signin-logo" />
                    <h1>National Law Training Institute</h1>
                </header>

                <main className="signin-main">
                    <h2>Welcome Back!</h2>
                    <p>Sign in to continue to National Law Training Institute.</p>

                    <form className="signin-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                            <div className="password-wrapper">
                                <input 
                                    type={passwordVisible ? "text" : "password"} 
                                    id="password" 
                                    placeholder="Enter password" 
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password" 
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    👁
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-btn">Log In</button>
                    </form>
                </main>

                <footer className="signin-footer">
                    <p>Don't have an account? <a href="#">Signup now</a></p>
                    <p className="copyright">© 2023 National Law Training Institute.<br/>Powered by <a href="#">Capthrone Technologies</a></p>
                </footer>
            </div>
        </div>
    );
}

export default SignInPage;
