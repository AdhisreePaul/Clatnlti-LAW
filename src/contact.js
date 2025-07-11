import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import './contact.css';
import mapImage from './assets/map.png';
function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (_jsxs("div", { className: "contact-page-container", children: [isSubmitted && (_jsxs("div", { className: "popup-message", children: [_jsx("span", { children: "Your message has been sent successfully!" }), _jsx("button", { onClick: () => setIsSubmitted(false), className: "popup-close-btn", children: "\u00D7" })] })), _jsxs("div", { className: "contact-form-wrapper", children: [_jsx("h1", { children: "Get In Touch" }), _jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [_jsxs("div", { className: "contact-form-group", children: [_jsx("label", { htmlFor: "name", children: "Your Name*" }), _jsxs("div", { className: "contact-input-wrapper", children: [_jsx(User, { className: "contact-input-icon", size: 18 }), _jsx("input", { id: "name", type: "text", placeholder: "Enter your name", required: true })] })] }), _jsxs("div", { className: "contact-form-group", children: [_jsx("label", { htmlFor: "email", children: "Your Email*" }), _jsxs("div", { className: "contact-input-wrapper", children: [_jsx(Mail, { className: "contact-input-icon", size: 18 }), _jsx("input", { id: "email", type: "email", placeholder: "Enter your email", required: true })] })] }), _jsxs("div", { className: "contact-form-group", children: [_jsx("label", { htmlFor: "phone", children: "Your Number" }), _jsxs("div", { className: "contact-input-wrapper", children: [_jsx(Phone, { className: "contact-input-icon", size: 18 }), _jsx("input", { id: "phone", type: "tel", placeholder: "Enter your number" })] })] }), _jsxs("div", { className: "contact-form-group", children: [_jsx("label", { htmlFor: "message", children: "Your Message*" }), _jsx("textarea", { id: "message", placeholder: "Your Message", required: true })] }), _jsx("button", { type: "submit", className: "send-message-btn", children: "Send Message" })] })] }), _jsx("div", { className: "contact-map-wrapper", children: _jsx("img", { src: mapImage, alt: "Location map" }) })] }));
}
export default ContactPage;
