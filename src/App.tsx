import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import './App.css';
import { MapPin, Phone, Mail, Youtube, Send, Linkedin, Instagram, Video, Users, BookOpen, Clock, Award, CheckCircle } from 'lucide-react';
// The LampDemo import has been removed.
// You should place your logo in the `src/assets` folder
// and import it here. For now, I'm using a placeholder.
import logo from './assets/logo.png';
import footerLogo from './assets/logo.jpg';

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
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="National Law Training Institute Logo" className="logo" />
        </Link>
      </div>
      <nav className="header-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/courses">Courses <span className="arrow-down"></span></Link>
            <div className="dropdown-content">
              <Link to="/courses/law-pg">LAW PG</Link>
              <Link to="/courses/law-ug">LAW UG</Link>
            </div>
          </li>
          <li><Link to="/clat">CLAT</Link></li>
          <li><Link to="/nlsat">NLSAT</Link></li>
          <li><Link to="/cuet">CUET-PG LLB</Link></li>
          <li><Link to="/neeti-ai">NEETI-AI</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <Link to="/signin" className="signin-link">Sign In</Link>
        <Link to="/customer-details" className="buy-course-btn">Buy Course</Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return <LampDemo />;
}

function StorySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="story-section">
            <p className="story-label">STUDY WITH US</p>
            <h2 className="story-title">
                Behind the scenes: The story behind <span className="nlti-underline">NLTI</span> 💙
            </h2>
            <div className="video-placeholder">
                {/* This is a placeholder for your video thumbnail. */}
                <div className="video-thumbnail-placeholder">
                    <video
                        className="video-player"
                        src={storyVideo}
                        controls
                        autoPlay
                        onEnded={closeModal} // Optional: close modal when video ends
                    />
                </div>
            </div>
            {isModalOpen && (
                <div className="video-modal-overlay" onClick={closeModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-modal-close" onClick={closeModal}>&times;</button>
                        <div className="video-responsive-container">
                            <video
                                className="video-player"
                                src={storyVideo}
                                controls
                                autoPlay
                                onEnded={closeModal} // Optional: close modal when video ends
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
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

    return (
        <div className="features-section">
            <h2 className="features-title">
                Here's why NLTI is indispensable for your <br />
                <span className="clat-underline">CLAT Preparation!</span>
            </h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className={`results-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
            <div className="results-image-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Result slide ${index + 1}`}
                        className={`result-image ${index === currentImageIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="results-spinner">
                <img src={circularImage} alt="An initiative by NLSIU students" />
            </div>
            <div className="results-content">
                <h2>Revolutionizing Success: <br/> Our <span className="results-underline">Results</span> Speak Louder Than Words</h2>
                <p>
                    NLTI takes immense pride in the extraordinary achievements of its students, which stand as a testament to the revolutionary approach we embrace. Our results speak volumes about the exceptional quality of mentorship and study material we provide, setting new benchmarks in the realm of CLAT and NLSAT success.
                </p>
                <p>
                    Our previous batch saw more than 15 NLSIU selections, 25 NLU-Delhi selections and over 200 selections across NLUs. NLTI broke all records in AILET 2024 when our students clinched 6 out of the Top-10 ranks, showcasing not just their academic prowess but also the effectiveness of our holistic approach towards education. Join NLTI and experience the difference that quality mentorship and material can make in realizing your dreams!
                </p>
            </div>
        </div>
    );
}

function StatsSection() {
    return (
        <div className="stats-section">
            <div className="stat-item">
                <span className="stat-number stat-number-grey">40+</span>
                <div className="stat-label">MENTORS</div>
            </div>
            <div className="stat-item">
                <span className="stat-number stat-number-gold">2K+</span>
                <div className="stat-label">ENROLLED STUDENTS</div>
            </div>
            <div className="stat-item">
                <span className="stat-number stat-number-grey">10K+</span>
                <div className="stat-label">CLAT COMMUNITY</div>
            </div>
            <div className="stat-item">
                <span className="stat-number stat-number-gold">500+</span>
                <div className="stat-label">SELECTIONS ACROSS NLUS</div>
            </div>
        </div>
    );
}

function TickerSection() {
    // Duplicating content to ensure a seamless loop
    const tickerContent = ["LAW", "TRAINING", "INSTITUTE", "NATIONAL"];
    const repeatedContent = [...tickerContent, ...tickerContent, ...tickerContent];

    return (
        <div className="ticker-section">
            <div className="ticker-wrap">
                {repeatedContent.map((text, index) => (
                    <span className="ticker-item" key={index}>{text}</span>
                ))}
            </div>
        </div>
    );
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // This will now trigger the animation every time it enters/leaves the viewport
                setIsTitleVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

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
    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth * 0.9;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="courses-section">
            <div className="courses-header">
                <h1 ref={titleRef} className={`section-title ${isTitleVisible ? 'is-visible' : ''}`}>
                    Explore Popular <span className="courses-underline">Courses</span>
                </h1>
                <div className="carousel-nav">
                    <button onClick={() => scroll('left')}>&larr;</button>
                    <button onClick={() => scroll('right')}>&rarr;</button>
                </div>
            </div>
            <div className="courses-container" ref={scrollContainerRef}>
                {courses.map((course, index) => (
                    <div className={`course-card ${course.isFeatured ? 'featured' : ''}`} key={index}>
                        <div className="course-card-inner">
                            <img src={course.imgSrc} alt={course.title} className="course-image" />
                            <div className="course-content">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <button className="buy-now-btn">
                                    <span>&rarr;</span> Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CrashCourseSection() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isEnquirySubmitted, setIsEnquirySubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsEnquirySubmitted(true);
        setFormData({ name: '', email: '', phone: '' });
    };
    
    return (
        <div className="crash-course-section">
            {isEnquirySubmitted && (
                <div className="popup-message">
                    <span>Thank you for your enquiry!</span>
                    <button onClick={() => setIsEnquirySubmitted(false)} className="popup-close-btn">×</button>
                </div>
            )}
            <h1 className="crash-course-title">CLAT Crash Course 2026</h1>
            <div className="course-content-wrapper">
                <div className="course-details-left">
                    <div className="pricing-box">
                        <span className="limited-banner">LIMITED TIME OFFER!</span>
                        <div className="price-current">₹9,999</div>
                        <div className="price-original">₹19,999</div>
                        <p className="price-info">One-time payment for lifetime access</p>
                    </div>
                    <h2 className="features-heading">What's Included</h2>
                    <ul className="features-list">
                        <li><Video size={20} className="feature-icon" /> 2 Live Classes Per Subject</li>
                        <li><Users size={20} className="feature-icon" /> 24/7 Personalised Mentorship</li>
                        <li><BookOpen size={20} className="feature-icon" /> 50 CLAT Mocks & 100 Sectionals</li>
                        <li><Award size={20} className="feature-icon" /> Comprehensive Study Material</li>
                        <li><Clock size={20} className="feature-icon" /> Weekly Doubt Clearing Sessions</li>
                        <li><CheckCircle size={20} className="feature-icon" /> Access to Recorded Lectures</li>
                    </ul>
                </div>
                <div className="course-details-right">
                    <div className="registration-form">
                        <h3>Register for Free Counselling</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
                            <button type="submit">Enquire Now &rarr;</button>
                        </form>
                    </div>
                     <div className="schedule-details">
                        <h3>Course Schedule</h3>
                        <p><strong>Start Date:</strong> 1st August, 2024</p>
                        <p><strong>Class Timings:</strong> 6:00 PM - 8:00 PM (Mon-Fri)</p>
                        <p><strong>Duration:</strong> 12 Weeks</p>
                    </div>
                </div>
            </div>
        </div>
    );
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

    const getCardClass = (index: number) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return 'prev';
        if (index === (currentIndex + 1) % testimonials.length) return 'next';
        return 'hidden';
    };

    return (
        <div className="testimonials-section">
            <h1 className="testimonials-title">What Students Say <span className="testimonials-underline">About Us</span></h1>
            <div className="testimonial-carousel">
                {testimonials.map((testimonial, index) => (
                    <div className={`testimonial-card ${getCardClass(index)}`} key={index}>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="testimonial-author">
                            <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                            <div className="author-info">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.details}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonial-nav">
                <button onClick={handlePrev}>&larr;</button>
                <button onClick={handleNext}>&rarr;</button>
            </div>
        </div>
    );
}

function PartnersSection() {
    return (
        <div className="partners-section">
            <h1 className="partners-title">NLTI Students have secured admissions in Top NLUs</h1>
            <div className="partners-logo-container">
                <img src={nluLogos} alt="Logos of National Law Universities" />
            </div>
        </div>
    );
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

    return (
        <div className="news-section">
            <h1 className="news-title">Read Our Latest <span className="news-underline">News</span></h1>
            <div className="news-grid">
                {newsArticles.map((article, index) => (
                    <a href={article.href} className="news-card" key={index}>
                        <div className="news-card-image-wrapper">
                            <img src={article.imgSrc} alt={article.title} className="news-card-image" />
                        </div>
                        <div className="news-card-content">
                            <span className="news-card-date">🕒 {article.date}</span>
                            <h3>{article.title}</h3>
                            <p>{article.summary}</p>
                            <span className="read-more">Read More &gt;</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

function StudentBannerSection() {
    const bannerText = "INITIATIVE BY NLSIU STUDENTS * ";
    const repeatedText = bannerText.repeat(4); // Repeat for seamless loop

    return (
        <div className="student-banner-section">
            <div className="banner-background-text-ticker">
                <div className="banner-ticker-content">{repeatedText}</div>
            </div>
            <img src={studentsImage} alt="NLTI Students" className="student-banner-image" />
            <div className="banner-foreground-text-ticker">
                <div className="banner-ticker-content">{repeatedText}</div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-banner">
                {/* 
                  This is a placeholder for the banner image from the screenshot.
                  You can replace this with an `<img>` tag or a background image.
                */}
            </div>
            <div className="footer-content">
                <div className="footer-section about">
                    <Link to="/">
                        <img src={logo} alt="National Law Training Institute Logo" className="footer-logo" />
                    </Link>
                    <div className="contact-info">
                        <p><MapPin size={16} /> 3256, Sector 44D, Chandigarh 160047</p>
                        <p><Phone size={16} /> (+91) 9876142144</p>
                        <p><Mail size={16} /> clat.nlti@gmail.com</p>
                    </div>
                </div>
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/law-school-predictor">Law School Predictor</Link></li>
                    </ul>
                </div>
                <div className="footer-section links">
                    <h4>Information</h4>
                    <ul>
                        <li><Link to="/refund-policy">Refund Policy</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-and-conditions">Terms And Conditions</Link></li>
                    </ul>
                </div>
                <div className="footer-section follow">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
                        <a href="#" aria-label="Telegram"><Send size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 by National Law Training Institute.</p>
            </div>
        </footer>
    );
}

function SecondaryNav() {
    return (
        <div className="secondary-nav">
            <div className="secondary-nav-inner">
                <button className="active">Notification</button>
                <button>Result</button>
                <button>Courses</button>
                <button>Testimonial</button>
                <button>Blogs</button>
            </div>
        </div>
    );
}

// This new component will contain all the sections of your main page
function HomePage() {
  return (
    <main className="main-content">
      <HeroSection />
      <SecondaryNav />
      <StorySection />
      <FeaturesSection />
      <ResultsSection />
      <StatsSection />
      <TickerSection />
      <CoursesSection />
      <CrashCourseSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsSection />
      <StudentBannerSection />
    </main>
  );
}

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer-details" element={<Regis />} />
        <Route path="/clat" element={<ClatPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cuet" element={<CuetPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/nlsat" element={<NlsatPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
