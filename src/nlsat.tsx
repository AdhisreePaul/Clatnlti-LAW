import React from 'react';
import './nlsat.css';
import nlsatResultsImage from './assets/nlsat.png';

function NlsatPage() {
    return (
        <div className="nlsat-page-container">
            <div className="nlsat-content-left">
                <h1>
                    NLSAT 2026 Batch <br />
                    <span className="underline-text">launched!</span>
                </h1>
                <p>
                    Your Path To Your Dream Law School Begins Here!
                </p>
                <div className="nlsat-buttons">
                    <button className="enroll-btn-nlsat">Enroll Now</button>
                    <button className="secondary-btn-nlsat">NLSAT Sample Mock 2026</button>
                    <button className="secondary-btn-nlsat">NLTI GK Gazette</button>
                </div>
                 <div className="nlsat-telegram">
                     <button className="telegram-btn-nlsat">
                        <span>➢</span> Join Our Telegram Channel
                    </button>
                </div>
            </div>
            <div className="nlsat-content-right">
                <img src={nlsatResultsImage} alt="NLSAT 2025 Results" className="results-image-nlsat" />
            </div>
        </div>
    );
}

export default NlsatPage;
