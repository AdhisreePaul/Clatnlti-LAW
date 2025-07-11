import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './blog.css';
import blogImage1 from './assets/ss-1.png'; // Placeholder
import blogImage2 from './assets/ss-2.png'; // Placeholder
import photo1 from './assets/photo-1.png';
import photo2 from './assets/photo-2.png';
import photo3 from './assets/photo-3.png';
import ss3 from './assets/ss-3.png';
import ss4 from './assets/ss-4.png';
function BlogPage() {
    const blogPosts = [
        {
            href: '#',
            imgSrc: blogImage1,
            date: 'July, 09 2025',
            title: 'NLSAT 2025: Nikhil\'s Journey to AIR 3 Succe...',
            summary: 'Securing a top rank in the NLSAT requires more than just intelligence,...',
        },
        {
            href: '#',
            imgSrc: blogImage2,
            date: 'July, 09 2025',
            title: 'Why Free CLAT Coaching Still Matters in 2026',
            summary: 'Summary - Falcon is a structured, no-cost batch with weekly YouTube se...',
        },
        {
            href: '#',
            imgSrc: blogImage1,
            date: 'July, 09 2025',
            title: 'NLSAT 2025: Tanvi\'s Journey to AIR 10 Succe...',
            summary: 'Tanvi\'s incredible achievement as the All India Rank 10 (AIR 10) hol...',
        },
        {
            href: '#',
            imgSrc: blogImage2,
            date: 'July, 09 2025',
            title: 'AILET 2026 Notification: Dates, Syllabus & CL...',
            summary: 'The All India Law Entrance Test (AILET) 2026 will be conducte...',
        },
        {
            href: '#',
            imgSrc: photo1,
            date: 'July, 10 2025',
            title: 'New Course Announcement: Platinum Package',
            summary: 'Explore the new Platinum package designed for ultimate CLAT success...',
        },
        {
            href: '#',
            imgSrc: photo2,
            date: 'July, 11 2025',
            title: 'NLSAT 2026: A Deep Dive into the Syllabus',
            summary: 'Everything you need to know about the upcoming NLSAT exam and how to prepare.',
        },
        {
            href: '#',
            imgSrc: photo3,
            date: 'July, 12 2025',
            title: 'Silver Package: The Perfect Start for Aspirants',
            summary: 'An overview of our Silver Package, ideal for getting started with your CLAT journey.',
        },
        {
            href: '#',
            imgSrc: ss3,
            date: 'July, 15 2025',
            title: 'How to Balance CLAT and AILET Preparation',
            summary: 'Expert tips on managing your time and resources for both major law entrance exams.',
        },
        {
            href: '#',
            imgSrc: ss4,
            date: 'July, 16 2025',
            title: 'The Benefits of Joining a Free CLAT Batch',
            summary: 'Discover the advantages of starting your preparation with our free CLAT batch.',
        },
        {
            href: '#',
            imgSrc: photo1, // Re-using an image
            date: 'July, 17 2025',
            title: 'Advanced Strategies for CLAT Logical Reasoning',
            summary: 'Take your logical reasoning skills to the next level with these advanced strategies.',
        },
        {
            href: '#',
            imgSrc: blogImage1,
            date: 'July, 18 2025',
            title: 'Topper Interview: Insights from AIR 6',
            summary: 'Aarav Sharma (AIR 6 AILET & AIR 38 CLAT\'24) shares his preparation strategy.',
        },
        {
            href: '#',
            imgSrc: blogImage2,
            date: 'July, 19 2025',
            title: 'Game-Changing Mentorship at NLTI',
            summary: 'Ishaan Sehrawat (AIR 7 AILET & AIR 127 CLAT\'24) discusses the impact of mentorship.',
        },
    ];
    return (_jsx("div", { className: "blog-page-container", children: _jsx("div", { className: "blog-grid", children: blogPosts.map((post, index) => (_jsxs("a", { href: post.href, className: "blog-post-card", children: [_jsx("div", { className: "blog-post-image-wrapper", children: _jsx("img", { src: post.imgSrc, alt: post.title }) }), _jsxs("div", { className: "blog-post-content", children: [_jsxs("span", { className: "blog-post-date", children: ["\uD83D\uDD52 ", post.date] }), _jsx("h3", { children: post.title }), _jsx("p", { children: post.summary }), _jsx("span", { className: "read-more", children: "Read More >" })] })] }, index))) }) }));
}
export default BlogPage;
