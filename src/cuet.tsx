import React from 'react';
import './cuet.css';
import cuetCourseImage from './assets/cuet.png';

function CuetPage() {
    return (
        <div className="cuet-page-container">
            <div className="cuet-content-left">
                <h1>
                    <span className="highlight-text">ACE CUET PG LLB</span> WITH MENTORSHIP FROM TOPPERS
                </h1>
                <p>
                    Crack CUET PG LLB 2025! Get mentored by DU-LLB toppers, access live sessions, mock tests, and comprehensive study material to secure your dream college.
                </p>
                <div className="cuet-buttons-main">
                    <button className="enroll-now-btn">Enroll Now</button>
                </div>
                <div className="cuet-buttons-secondary">
                    <button className="secondary-btn">NLTI GK Gazette</button>
                    <button className="secondary-btn">Sample Mock by NLTI!</button>
                    <button className="secondary-btn">FAQs</button>
                </div>
                <div className="cuet-telegram">
                     <button className="telegram-btn">
                        <span>➢</span> Join Our Telegram Channel
                    </button>
                </div>
            </div>
            <div className="cuet-content-right">
                <img src={cuetCourseImage} alt="CUET LLB 2025 Course Details" className="course-details-image" />
            </div>
        </div>
    );
}

export default CuetPage;
