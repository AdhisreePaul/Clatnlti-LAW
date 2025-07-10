import React from 'react';
import './blog.css';
import blogImage1 from './assets/ss-1.png'; // Placeholder
import blogImage2 from './assets/ss-2.png'; // Placeholder

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
    ];

    return (
        <div className="blog-page-container">
            <div className="blog-grid">
                {blogPosts.map((post, index) => (
                    <a href={post.href} className="blog-post-card" key={index}>
                        <div className="blog-post-image-wrapper">
                            <img src={post.imgSrc} alt={post.title} />
                        </div>
                        <div className="blog-post-content">
                            <span className="blog-post-date">🕒 {post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                            <span className="read-more">Read More &gt;</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
