import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import './App.css';
import { MapPin, Phone, Mail, Youtube, Send, Linkedin, Instagram, Video, Users, BookOpen, Clock, Award, CheckCircle } from 'lucide-react';
// The LampDemo import has been removed.
// You should place your logo in the `src/assets` folder
// and import it here. For now, I'm using a placeholder.
import logo from './assets/logo.png';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import circularImage from './assets/circular.jpg';
import courseImagePlatinum from './assets/photo-1.png';
import courseImageNLSAT from './assets/photo-2.png';
import courseImageSilver from './assets/photo-3.png';
import nluLogos from './assets/NLU.png';
import newsImage1 from './assets/ss-1.png';
import newsImage2 from './assets/ss-2.png';
import newsImage3 from './assets/ss-3.png';
import newsImage4 from './assets/ss-4.png';
import studentsImage from './assets/students.png';
import storyVideo from './assets/video.mp4'; // Import the local video
import Regis from './Registration'; // Import the new registration form
import ClatPage from './clat'; // Import the new CLAT page component
import ContactPage from './contact'; // Import the new Contact page component
import CuetPage from './cuet'; // Import the new CUET page component
import BlogPage from './blog'; // Import the new Blog page component
import NlsatPage from './nlsat'; // Import the new NLSAT page component
import SignInPage from './signin';
import LampDemo from './components/ui/lamp';
function Header() {
    return (_jsxs("header", { className: "header", children: [_jsx("div", { className: "header-left", children: _jsx(Link, { to: "/", children: _jsx("img", { src: logo, alt: "National Law Training Institute Logo", className: "logo" }) }) }), _jsx("nav", { className: "header-center", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsxs("li", { className: "dropdown", children: [_jsxs(Link, { to: "/courses", children: ["Courses ", _jsx("span", { className: "arrow-down" })] }), _jsxs("div", { className: "dropdown-content", children: [_jsx(Link, { to: "/courses/law-pg", children: "LAW PG" }), _jsx(Link, { to: "/courses/law-ug", children: "LAW UG" })] })] }), _jsx("li", { children: _jsx(Link, { to: "/clat", children: "CLAT" }) }), _jsx("li", { children: _jsx(Link, { to: "/nlsat", children: "NLSAT" }) }), _jsx("li", { children: _jsx(Link, { to: "/cuet", children: "CUET-PG LLB" }) }), _jsx("li", { children: _jsx(Link, { to: "/neeti-ai", children: "NEETI-AI" }) }), _jsx("li", { children: _jsx(Link, { to: "/blog", children: "Blog" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contact Us" }) })] }) }), _jsxs("div", { className: "header-right", children: [_jsx(Link, { to: "/signin", className: "signin-link", children: "Sign In" }), _jsx(Link, { to: "/customer-details", className: "buy-course-btn", children: "Buy Course" })] })] }));
}
function HeroSection() {
    return _jsx(LampDemo, {});
}
function StorySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (_jsxs("div", { className: "story-section", children: [_jsx("p", { className: "story-label", children: "STUDY WITH US" }), _jsxs("h2", { className: "story-title", children: ["Behind the scenes: The story behind ", _jsx("span", { className: "nlti-underline", children: "NLTI" }), " \uD83D\uDC99"] }), _jsx("div", { className: "video-placeholder", children: _jsx("div", { className: "video-thumbnail-placeholder", children: _jsx("video", { className: "video-player", src: storyVideo, controls: true, autoPlay: true, onEnded: closeModal }) }) }), isModalOpen && (_jsx("div", { className: "video-modal-overlay", onClick: closeModal, children: _jsxs("div", { className: "video-modal-content", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "video-modal-close", onClick: closeModal, children: "\u00D7" }), _jsx("div", { className: "video-responsive-container", children: _jsx("video", { className: "video-player", src: storyVideo, controls: true, autoPlay: true, onEnded: closeModal }) })] }) }))] }));
}
function FeaturesSection() {
    const features = [
        {
            icon: '⚛️',
            title: 'Run by NLSIU Students Exclusively',
            description: 'NLTI is an initiative started by NLSIU Students who have cracked CLAT with flying colours.',
        },
        {
            icon: '🏅',
            title: 'Unprecedented Selection Ratio',
            description: 'NLTI has produced over 100 NLS, NALSAR and NLUD Selections and more than 500 selections across NLUs.',
        },
        {
            icon: '👨‍🏫',
            title: 'Personalised Mentorship by NLSIU Mentors',
            description: 'Get 24/7 access to NLSIU Students who will act as your best friend, guide, and mentor.',
        },
        {
            icon: '💻',
            title: 'Daily DCS and Weekly Live Doubt Clearing Sessions',
            description: 'All your doubts will be solved in real-time via Telegram Chat and live concept/strategy sessions will be taken weekly.',
        },
        {
            icon: '👥',
            title: 'Study Buddy Groups',
            description: 'You will be put in a group of like-minded study buddies to ensure competitiveness and resource sharing among aspirants.',
        },
        {
            icon: '📝',
            title: 'Comprehensive Test Series',
            description: 'You will be provided 50 CLAT, 10 AILET, 10 OLET and 100 Sectional Mocks in our course coupled with personalised time tables and schedules.',
        },
    ];
    return (_jsxs("div", { className: "features-section", children: [_jsxs("h2", { className: "features-title", children: ["Here's why NLTI is indispensable for your ", _jsx("br", {}), _jsx("span", { className: "clat-underline", children: "CLAT Preparation!" })] }), _jsx("div", { className: "features-grid", children: features.map((feature, index) => (_jsxs("div", { className: "feature-card", children: [_jsx("div", { className: "feature-icon", children: feature.icon }), _jsxs("div", { className: "feature-content", children: [_jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] })] }, index))) })] }));
}
function ResultsSection() {
    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds
        return () => clearInterval(interval);
    }, [images.length]);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (_jsxs("div", { className: `results-section ${isVisible ? 'is-visible' : ''}`, ref: sectionRef, children: [_jsx("div", { className: "results-image-container", children: images.map((img, index) => (_jsx("img", { src: img, alt: `Result slide ${index + 1}`, className: `result-image ${index === currentImageIndex ? 'active' : ''}` }, index))) }), _jsx("div", { className: "results-spinner", children: _jsx("img", { src: circularImage, alt: "An initiative by NLSIU students" }) }), _jsxs("div", { className: "results-content", children: [_jsxs("h2", { children: ["Revolutionizing Success: ", _jsx("br", {}), " Our ", _jsx("span", { className: "results-underline", children: "Results" }), " Speak Louder Than Words"] }), _jsx("p", { children: "NLTI takes immense pride in the extraordinary achievements of its students, which stand as a testament to the revolutionary approach we embrace. Our results speak volumes about the exceptional quality of mentorship and study material we provide, setting new benchmarks in the realm of CLAT and NLSAT success." }), _jsx("p", { children: "Our previous batch saw more than 15 NLSIU selections, 25 NLU-Delhi selections and over 200 selections across NLUs. NLTI broke all records in AILET 2024 when our students clinched 6 out of the Top-10 ranks, showcasing not just their academic prowess but also the effectiveness of our holistic approach towards education. Join NLTI and experience the difference that quality mentorship and material can make in realizing your dreams!" })] })] }));
}
function StatsSection() {
    return (_jsxs("div", { className: "stats-section", children: [_jsxs("div", { className: "stat-item", children: [_jsx("span", { className: "stat-number stat-number-grey", children: "40+" }), _jsx("div", { className: "stat-label", children: "MENTORS" })] }), _jsxs("div", { className: "stat-item", children: [_jsx("span", { className: "stat-number stat-number-gold", children: "2K+" }), _jsx("div", { className: "stat-label", children: "ENROLLED STUDENTS" })] }), _jsxs("div", { className: "stat-item", children: [_jsx("span", { className: "stat-number stat-number-grey", children: "10K+" }), _jsx("div", { className: "stat-label", children: "CLAT COMMUNITY" })] }), _jsxs("div", { className: "stat-item", children: [_jsx("span", { className: "stat-number stat-number-gold", children: "500+" }), _jsx("div", { className: "stat-label", children: "SELECTIONS ACROSS NLUS" })] })] }));
}
function TickerSection() {
    // Duplicating content to ensure a seamless loop
    const tickerContent = ["LAW", "TRAINING", "INSTITUTE", "NATIONAL"];
    const repeatedContent = [...tickerContent, ...tickerContent, ...tickerContent];
    return (_jsx("div", { className: "ticker-section", children: _jsx("div", { className: "ticker-wrap", children: repeatedContent.map((text, index) => (_jsx("span", { className: "ticker-item", children: text }, index))) }) }));
}
function CoursesSection() {
    const courses = [
        {
            imgSrc: courseImageSilver,
            title: 'CLAT 2026 Blueprint: Silver Pa...',
            description: 'CLAT 2026 Blueprint: Silver PackageYour Ultimate Path to CLAT SuccessPrepare ...',
        },
        {
            imgSrc: courseImageNLSAT,
            title: 'Crack NLSAT 2026: NLSAT Online...',
            description: 'Join India\'s best NLSAT Coaching plus Mentorship program for NLSAT 2026. NL...',
        },
        {
            imgSrc: courseImagePlatinum,
            title: 'CLAT 2026 Blueprint: Platinum ...',
            description: 'CLAT 2026 Blueprint: Platinum Package(Mentorship with Test Series)Achieve you...',
            isFeatured: true, // This one will have the gold border
        },
        {
            imgSrc: courseImageNLSAT, // Placeholder for scrolling demo
            title: 'Another NLSAT Course',
            description: 'Description for another course to demonstrate scrolling.',
        },
    ];
    const titleRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // This will now trigger the animation every time it enters/leaves the viewport
            setIsTitleVisible(entry.isIntersecting);
        }, { threshold: 0.1 });
        const currentTitleRef = titleRef.current;
        if (currentTitleRef) {
            observer.observe(currentTitleRef);
        }
        return () => {
            if (currentTitleRef) {
                observer.unobserve(currentTitleRef);
            }
        };
    }, []);
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.9;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return (_jsxs("div", { className: "courses-section", children: [_jsxs("div", { className: "courses-header", children: [_jsxs("h1", { ref: titleRef, className: `section-title ${isTitleVisible ? 'is-visible' : ''}`, children: ["Explore Popular ", _jsx("span", { className: "courses-underline", children: "Courses" })] }), _jsxs("div", { className: "carousel-nav", children: [_jsx("button", { onClick: () => scroll('left'), children: "\u2190" }), _jsx("button", { onClick: () => scroll('right'), children: "\u2192" })] })] }), _jsx("div", { className: "courses-container", ref: scrollContainerRef, children: courses.map((course, index) => (_jsx("div", { className: `course-card ${course.isFeatured ? 'featured' : ''}`, children: _jsxs("div", { className: "course-card-inner", children: [_jsx("img", { src: course.imgSrc, alt: course.title, className: "course-image" }), _jsxs("div", { className: "course-content", children: [_jsx("h3", { children: course.title }), _jsx("p", { children: course.description }), _jsxs("button", { className: "buy-now-btn", children: [_jsx("span", { children: "\u2192" }), " Buy Now"] })] })] }) }, index))) })] }));
}
function CrashCourseSection() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isEnquirySubmitted, setIsEnquirySubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsEnquirySubmitted(true);
        setFormData({ name: '', email: '', phone: '' });
    };
    return (_jsxs("div", { className: "crash-course-section", children: [isEnquirySubmitted && (_jsxs("div", { className: "popup-message", children: [_jsx("span", { children: "Thank you for your enquiry!" }), _jsx("button", { onClick: () => setIsEnquirySubmitted(false), className: "popup-close-btn", children: "\u00D7" })] })), _jsx("h1", { className: "crash-course-title", children: "CLAT Crash Course 2026" }), _jsxs("div", { className: "course-content-wrapper", children: [_jsxs("div", { className: "course-details-left", children: [_jsxs("div", { className: "pricing-box", children: [_jsx("span", { className: "limited-banner", children: "LIMITED TIME OFFER!" }), _jsx("div", { className: "price-current", children: "\u20B99,999" }), _jsx("div", { className: "price-original", children: "\u20B919,999" }), _jsx("p", { className: "price-info", children: "One-time payment for lifetime access" })] }), _jsx("h2", { className: "features-heading", children: "What's Included" }), _jsxs("ul", { className: "features-list", children: [_jsxs("li", { children: [_jsx(Video, { size: 20, className: "feature-icon" }), " 2 Live Classes Per Subject"] }), _jsxs("li", { children: [_jsx(Users, { size: 20, className: "feature-icon" }), " 24/7 Personalised Mentorship"] }), _jsxs("li", { children: [_jsx(BookOpen, { size: 20, className: "feature-icon" }), " 50 CLAT Mocks & 100 Sectionals"] }), _jsxs("li", { children: [_jsx(Award, { size: 20, className: "feature-icon" }), " Comprehensive Study Material"] }), _jsxs("li", { children: [_jsx(Clock, { size: 20, className: "feature-icon" }), " Weekly Doubt Clearing Sessions"] }), _jsxs("li", { children: [_jsx(CheckCircle, { size: 20, className: "feature-icon" }), " Access to Recorded Lectures"] })] })] }), _jsxs("div", { className: "course-details-right", children: [_jsxs("div", { className: "registration-form", children: [_jsx("h3", { children: "Register for Free Counselling" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "name", placeholder: "Your Name", value: formData.name, onChange: handleChange, required: true }), _jsx("input", { type: "email", name: "email", placeholder: "Your Email", value: formData.email, onChange: handleChange, required: true }), _jsx("input", { type: "tel", name: "phone", placeholder: "Your Phone Number", value: formData.phone, onChange: handleChange, required: true }), _jsx("button", { type: "submit", children: "Enquire Now \u2192" })] })] }), _jsxs("div", { className: "schedule-details", children: [_jsx("h3", { children: "Course Schedule" }), _jsxs("p", { children: [_jsx("strong", { children: "Start Date:" }), " 1st August, 2024"] }), _jsxs("p", { children: [_jsx("strong", { children: "Class Timings:" }), " 6:00 PM - 8:00 PM (Mon-Fri)"] }), _jsxs("p", { children: [_jsx("strong", { children: "Duration:" }), " 12 Weeks"] })] })] })] })] }));
}
function TestimonialsSection() {
    const testimonials = [
        {
            text: "This played a significant role in my CLAT/AILET journey... To top it all off with several dedicated aspirants.",
            author: "Aarav Sharma",
            details: "(AIR 6 AILET & AIR 38 CLAT'24)",
            avatar: logo,
        },
        {
            text: "NLTI played a pivotal role in my CLAT and AILET journey, offering unparalleled mentorship and guidance... Truly, NLTI proved to be a game-changing partner.",
            author: "Ishaan Sehrawat",
            details: "(AIR 7 AILET and AIR 127 CLAT'24)",
            avatar: logo,
        },
        {
            text: "I was a part of the Super 30 Course... All in all, it played a significant role in my CLAT & AILET journey. Thank you NLTI!",
            author: "Pranav Mittal",
            details: "(AIR 93 CLAT'24)",
            avatar: logo,
        },
        {
            text: "The guidance and personalized approach helped me navigate through the complexities of CLAT, enabling me to achieve my goals.",
            author: "Devvrat Chudasama",
            details: "(AIR 104 CLAT'24)",
            avatar: logo,
        },
        {
            text: "NLTI helped me a lot throughout my preparation. The quality of all the mocks are amazing. The detailed analysis helps you get a hold of the exam.",
            author: "Ashmit",
            details: "(AIR 38 CLAT'23)",
            avatar: logo,
        },
        {
            text: "The mentors were not just knowledgeable but also incredibly friendly and supportive. A game-changing partner for sure.",
            author: "Riya Singh",
            details: "(AIR 150 CLAT'23)",
            avatar: logo,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 2000); // Rotate every 2 seconds
        return () => clearInterval(timer);
    }, [currentIndex]);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    const getCardClass = (index) => {
        if (index === currentIndex)
            return 'active';
        if (index === (currentIndex - 1 + testimonials.length) % testimonials.length)
            return 'prev';
        if (index === (currentIndex + 1) % testimonials.length)
            return 'next';
        return 'hidden';
    };
    return (_jsxs("div", { className: "testimonials-section", children: [_jsxs("h1", { className: "testimonials-title", children: ["What Students Say ", _jsx("span", { className: "testimonials-underline", children: "About Us" })] }), _jsx("div", { className: "testimonial-carousel", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: `testimonial-card ${getCardClass(index)}`, children: [_jsxs("p", { className: "testimonial-text", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "testimonial-author", children: [_jsx("img", { src: testimonial.avatar, alt: testimonial.author, className: "author-avatar" }), _jsxs("div", { className: "author-info", children: [_jsx("strong", { children: testimonial.author }), _jsx("span", { children: testimonial.details })] })] })] }, index))) }), _jsxs("div", { className: "testimonial-nav", children: [_jsx("button", { onClick: handlePrev, children: "\u2190" }), _jsx("button", { onClick: handleNext, children: "\u2192" })] })] }));
}
function PartnersSection() {
    return (_jsxs("div", { className: "partners-section", children: [_jsx("h1", { className: "partners-title", children: "NLTI Students have secured admissions in Top NLUs" }), _jsx("div", { className: "partners-logo-container", children: _jsx("img", { src: nluLogos, alt: "Logos of National Law Universities" }) })] }));
}
function NewsSection() {
    const newsArticles = [
        {
            href: '#',
            imgSrc: newsImage1,
            date: 'July, 09 2025',
            title: 'NLSAT 2025: Tanvi\'s Journey to AIR 10 Succe...',
            summary: 'Tanvi\'s incredible achievement as the All India Rank 10 (AIR 10) hol...',
        },
        {
            href: '#',
            imgSrc: newsImage2,
            date: 'July, 09 2025',
            title: 'AILET 2026 Official Notification',
            summary: 'Dates, Syllabus, Fees, and How to Balance it with CLAT',
        },
        {
            href: '#',
            imgSrc: newsImage3,
            date: 'July, 09 2025',
            title: 'AILET 2026 Notification: Dates, Syllabus & CL...',
            summary: 'Summary: The All India Law Entrance Test (AILET) 2026 will be conducte...',
        },
        {
            href: '#',
            imgSrc: newsImage4,
            date: 'July, 08 2025',
            title: 'Why Join a Free CLAT 2026 Batch? Must-Know Be...',
            summary: 'Top NLSAT Resources: NLTI Textbook & Modules ...',
        },
    ];
    return (_jsxs("div", { className: "news-section", children: [_jsxs("h1", { className: "news-title", children: ["Read Our Latest ", _jsx("span", { className: "news-underline", children: "News" })] }), _jsx("div", { className: "news-grid", children: newsArticles.map((article, index) => (_jsxs("a", { href: article.href, className: "news-card", children: [_jsx("div", { className: "news-card-image-wrapper", children: _jsx("img", { src: article.imgSrc, alt: article.title, className: "news-card-image" }) }), _jsxs("div", { className: "news-card-content", children: [_jsxs("span", { className: "news-card-date", children: ["\uD83D\uDD52 ", article.date] }), _jsx("h3", { children: article.title }), _jsx("p", { children: article.summary }), _jsx("span", { className: "read-more", children: "Read More >" })] })] }, index))) })] }));
}
function StudentBannerSection() {
    const bannerText = "INITIATIVE BY NLSIU STUDENTS * ";
    const repeatedText = bannerText.repeat(4); // Repeat for seamless loop
    return (_jsxs("div", { className: "student-banner-section", children: [_jsx("div", { className: "banner-background-text-ticker", children: _jsx("div", { className: "banner-ticker-content", children: repeatedText }) }), _jsx("img", { src: studentsImage, alt: "NLTI Students", className: "student-banner-image" }), _jsx("div", { className: "banner-foreground-text-ticker", children: _jsx("div", { className: "banner-ticker-content", children: repeatedText }) })] }));
}
function Footer() {
    return (_jsxs("footer", { className: "footer", children: [_jsx("div", { className: "footer-banner" }), _jsxs("div", { className: "footer-content", children: [_jsxs("div", { className: "footer-section about", children: [_jsx(Link, { to: "/", children: _jsx("img", { src: logo, alt: "National Law Training Institute Logo", className: "footer-logo" }) }), _jsxs("div", { className: "contact-info", children: [_jsxs("p", { children: [_jsx(MapPin, { size: 16 }), " 3256, Sector 44D, Chandigarh 160047"] }), _jsxs("p", { children: [_jsx(Phone, { size: 16 }), " (+91) 9876142144"] }), _jsxs("p", { children: [_jsx(Mail, { size: 16 }), " clat.nlti@gmail.com"] })] })] }), _jsxs("div", { className: "footer-section links", children: [_jsx("h4", { children: "Quick Links" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/about-us", children: "About Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contact Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/law-school-predictor", children: "Law School Predictor" }) })] })] }), _jsxs("div", { className: "footer-section links", children: [_jsx("h4", { children: "Information" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/refund-policy", children: "Refund Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "/privacy-policy", children: "Privacy Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "/terms-and-conditions", children: "Terms And Conditions" }) })] })] }), _jsxs("div", { className: "footer-section follow", children: [_jsx("h4", { children: "Follow Us" }), _jsxs("div", { className: "social-icons", children: [_jsx("a", { href: "#", "aria-label": "Youtube", children: _jsx(Youtube, { size: 20 }) }), _jsx("a", { href: "#", "aria-label": "Telegram", children: _jsx(Send, { size: 20 }) }), _jsx("a", { href: "#", "aria-label": "LinkedIn", children: _jsx(Linkedin, { size: 20 }) }), _jsx("a", { href: "#", "aria-label": "Instagram", children: _jsx(Instagram, { size: 20 }) })] })] })] }), _jsx("div", { className: "footer-bottom", children: _jsx("p", { children: "\u00A9 2023 by National Law Training Institute." }) })] }));
}
function SecondaryNav() {
    return (_jsx("div", { className: "secondary-nav", children: _jsxs("div", { className: "secondary-nav-inner", children: [_jsx("button", { className: "active", children: "Notification" }), _jsx("button", { children: "Result" }), _jsx("button", { children: "Courses" }), _jsx("button", { children: "Testimonial" }), _jsx("button", { children: "Blogs" })] }) }));
}
// This new component will contain all the sections of your main page
function HomePage() {
    return (_jsxs("main", { className: "main-content", children: [_jsx(HeroSection, {}), _jsx(SecondaryNav, {}), _jsx(StorySection, {}), _jsx(FeaturesSection, {}), _jsx(ResultsSection, {}), _jsx(StatsSection, {}), _jsx(TickerSection, {}), _jsx(CoursesSection, {}), _jsx(CrashCourseSection, {}), _jsx(TestimonialsSection, {}), _jsx(PartnersSection, {}), _jsx(NewsSection, {}), _jsx(StudentBannerSection, {})] }));
}
function App() {
    const location = useLocation();
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/customer-details", element: _jsx(Regis, {}) }), _jsx(Route, { path: "/clat", element: _jsx(ClatPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/cuet", element: _jsx(CuetPage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/nlsat", element: _jsx(NlsatPage, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignInPage, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
