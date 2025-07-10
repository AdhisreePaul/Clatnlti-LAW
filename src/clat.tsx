import React from 'react';
import './clat.css';
import nltiLogo from './assets/logo.jpg';

function ClatPage() {
    return (
        <div className="clat-le-page">
            <div className="clat-le-content">
                <h1 className="main-title">
                    Unbeatable Quality at Unbelievable Prices – Get the Best of Both Worlds with
                </h1>
                <h2 className="brand-title">
                    NLTI x <span className="legaledge-text">LegalEdge!</span>
                </h2>

                <div className="offering-box">
                    <h3>NLTI's Mentorship With LegalEdge's Coaching –<br />At One Place</h3>
                </div>
                
                <p className="description">
                    For the first time, NLTI and LegalEdge, two of the most trusted names in CLAT preparation, have joined forces to create the most comprehensive and result-oriented CLAT 2026 program. With expert-led coaching from LegalEdge and 24/7 personalized mentorship from NLSIU toppers at NLTI, this course ensures you get everything needed to crack CLAT – all in one place!
                </p>

                <div className="logos-container">
                    <img src={nltiLogo} alt="NLTI Logo" className="brand-logo nlti-logo" />
                    <span className="logo-separator">×</span>
                    <div className="brand-logo legaledge-logo-placeholder">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L12 9L19 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 10L12 4L19 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div className="cta-buttons">
                    <button className="cta-btn enroll-btn">Enroll Now</button>
                    <button className="cta-btn faqs-btn">FAQs</button>
                    <button className="cta-btn demo-btn">Book A Free Demo</button>
                </div>

                <div className="secondary-buttons">
                    <button className="sec-btn telegram-btn">
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-1.02.12-1.28l15.34-5.67c.73-.27 1.36.17 1.15.94l-2.67 12.3c-.28 1.13-1.04 1.4-1.9.88l-4.52-3.32l-2.13 2.05c-.23.23-.42.42-.83.42z"/></svg>
                        Join Our Telegram Channel
                    </button>
                    <button className="sec-btn brochure-btn">
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                         Free brochure
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClatPage;
