import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import {
    FaChevronDown,
    FaCheckCircle,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaGlobe,
} from "react-icons/fa";
import Container from "@/components/Container";
import { mailTo } from "utils/common";
import Link from "next/link";

const CSSMasterclass = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        state: "Himachal Pradesh",
    });
    const [activeFaq, setActiveFaq] = useState(null);
    const [countdown, setCountdown] = useState({
        days: 2,
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    // Countdown timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => {
                let { days, hours, minutes, seconds } = prevCountdown;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            } else {
                                // Timer completed
                                clearInterval(timer);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted:", formData);
        // You can add form submission API call here
        alert("Registration successful! We'll contact you soon with more details.");
    };

    return (
        <>
            <NextSeo
                title="CSS Masterclass Webinar | Learn Advanced CSS Techniques"
                description="Join our intensive CSS Masterclass webinar to master advanced CSS techniques, animations, layouts, and responsive design. Limited seats available!"
                canonical={`${process.env.NEXT_PUBLIC_APP_URL || "https://frontendzone.com"}/css-masterclass`}
                openGraph={{
                    title: "CSS Masterclass Webinar | Learn Advanced CSS Techniques",
                    description:
                        "Master modern CSS techniques, animations, layouts, and responsive design in our intensive webinar. Limited seats available!",
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_APP_URL || "https://frontendzone.com"}/images/css-masterclass-og.jpg`,
                            width: 1200,
                            height: 630,
                            alt: "CSS Masterclass Webinar",
                        },
                    ],
                }}
            />
            <MasterclassWrapper>
                <section className="hero">
                    <div className="hero-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                    <Container>
                        <div className="hero-content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 hero-left">
                                    <div className="badge-container">
                                        <div className="hero-badge">
                                            <span className="star-icon">✨</span> Limited Time Offer
                                        </div>
                                    </div>
                                    <h1>
                                        Master Modern CSS{" "}
                                        <span className="highlight-text">in Just 3 Days</span>
                                    </h1>
                                    <p className="hero-description">
                                        Join our intensive CSS Masterclass to learn advanced
                                        techniques, animations, layouts, and responsive design
                                        strategies from industry experts.
                                    </p>

                                    <div className="features-list">
                                        <div className="feature-item">
                                            <span className="check-icon">✓</span>
                                            <span>
                                                Live interactive sessions with hands-on projects
                                            </span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="check-icon">✓</span>
                                            <span>Advanced CSS Grid & Flexbox techniques</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="check-icon">✓</span>
                                            <span>Modern animations & responsive layouts</span>
                                        </div>
                                    </div>

                                    <div className="hero-cta">
                                        <a href="#register" className="btn btn-primary pulse-btn">
                                            RESERVE YOUR SPOT NOW
                                        </a>
                                        <a href="#curriculum" className="btn btn-outline">
                                            VIEW CURRICULUM
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 hero-right">
                                    <div className="card-container">
                                        <div className="event-card">
                                            <div className="card-header">
                                                <div className="date-badge">
                                                    <i className="fas fa-calendar-alt"></i> August
                                                    25-27, 2025
                                                </div>
                                                <div className="time-badge">
                                                    <i className="fas fa-clock"></i> 7:00 PM - 9:00
                                                    PM IST
                                                </div>
                                            </div>
                                            <div className="price-container">
                                                <div className="price-tag">
                                                    <div className="original">₹4999</div>
                                                    <div className="current">₹999</div>
                                                </div>
                                                <div className="discount-badge">80% OFF</div>
                                            </div>
                                            <div className="seats-info">
                                                <div className="progress-container">
                                                    <div className="progress-bar"></div>
                                                </div>
                                                <p className="seats-text">
                                                    <strong>Hurry!</strong> Only{" "}
                                                    <span className="seats-highlight">
                                                        10 seats
                                                    </span>{" "}
                                                    left for this batch
                                                </p>
                                            </div>
                                            <div className="hero-image">
                                                <img
                                                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                    alt="CSS Masterclass"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* What You'll Learn Section */}
                <section className="what-youll-learn" id="curriculum">
                    <Container>
                        <div className="text-center mb-5">
                            <h2 className="section-title text-center">Master CSS in 3 Days</h2>
                            <p className="section-subtitle text-center">
                                Comprehensive curriculum to transform you into a CSS expert with
                                live hands-on sessions
                            </p>
                        </div>

                        <div className="days-container">
                            <div className="day-card">
                                <div className="day-header">
                                    <div className="day-number">1</div>
                                    <h3>CSS Fundamentals Refresher & Advanced Selectors</h3>
                                </div>
                                <div className="day-time">
                                    Day 1: August 25, 2025 • 7:00 PM - 9:00 PM IST
                                </div>
                                <ul className="features-list">
                                    <li>
                                        <FaCheckCircle /> CSS Variables and Custom Properties
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Advanced CSS Selectors & Combinators
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Specificity Strategies & Best Practices
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Modern CSS Reset Techniques
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Hands-on Project: Building a Component
                                        Library
                                    </li>
                                </ul>
                            </div>

                            <div className="day-card">
                                <div className="day-header">
                                    <div className="day-number">2</div>
                                    <h3>Modern Layout Techniques & Responsive Design</h3>
                                </div>
                                <div className="day-time">
                                    Day 2: August 26, 2025 • 7:00 PM - 9:00 PM IST
                                </div>
                                <ul className="features-list">
                                    <li>
                                        <FaCheckCircle /> CSS Grid Layout Mastery
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Flexbox Deep Dive & Practical Applications
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Container Queries & Modern Media Queries
                                    </li>
                                    <li>
                                        <FaCheckCircle /> CSS Logical Properties
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Hands-on Project: Building Responsive
                                        Layouts
                                    </li>
                                </ul>
                            </div>

                            <div className="day-card">
                                <div className="day-header">
                                    <div className="day-number">3</div>
                                    <h3>Animations, Transforms & Modern Techniques</h3>
                                </div>
                                <div className="day-time">
                                    Day 3: August 27, 2025 • 7:00 PM - 9:00 PM IST
                                </div>
                                <ul className="features-list">
                                    <li>
                                        <FaCheckCircle /> CSS Transitions & Animations
                                    </li>
                                    <li>
                                        <FaCheckCircle /> 3D Transforms & Perspective
                                    </li>
                                    <li>
                                        <FaCheckCircle /> CSS Scroll Animations
                                    </li>
                                    <li>
                                        <FaCheckCircle /> CSS Functions (clamp, min, max)
                                    </li>
                                    <li>
                                        <FaCheckCircle /> Final Project: Interactive Web Experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Why Join Section */}
                <section className="why-join">
                    <Container>
                        <div className="section-badge">BENEFITS</div>
                        <h2 className="section-title text-center">Why Join Our CSS Masterclass?</h2>
                        <p className="section-subtitle text-center">
                            Supercharge your web development career with our industry-leading
                            training
                        </p>

                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <img
                                    src="https://via.placeholder.com/500x400?text=Why+Join+CSS+Masterclass"
                                    alt="Why Join CSS Masterclass"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="benefits">
                                    <div className="benefit-item">
                                        <div className="icon">📊</div>
                                        <div className="content">
                                            <h3>Industry-Relevant Skills</h3>
                                            <p>
                                                Learn modern CSS techniques used by top companies
                                                worldwide
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="icon">👨‍💻</div>
                                        <div className="content">
                                            <h3>Expert Instruction</h3>
                                            <p>
                                                Learn from industry professionals with years of
                                                teaching experience
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="icon">🎓</div>
                                        <div className="content">
                                            <h3>Certificate of Completion</h3>
                                            <p>
                                                Receive a certificate to showcase your advanced CSS
                                                skills
                                            </p>
                                        </div>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="icon">📁</div>
                                        <div className="content">
                                            <h3>Project-Based Learning</h3>
                                            <p>
                                                Build real-world projects for your portfolio during
                                                the sessions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Instructor Section */}
                <section className="instructor">
                    <Container>
                        <div className="text-center">
                            <div className="expert-badge">EXPERT TRAINER</div>
                            <h2 className="section-title">
                                Meet Your <span>Instructor</span>
                            </h2>
                        </div>
                        <div className="instructor-card">
                            <div className="instructor-image-container">
                                <img
                                    src="https://via.placeholder.com/150x150?text=A"
                                    alt="Ashish Yadav"
                                />
                            </div>
                            <h3 className="instructor-name">Ashish Yadav</h3>
                            <div className="instructor-title">Frontend Developer & CSS Expert</div>
                            <p className="instructor-bio">
                                With over 7 years of experience in frontend development, Ashish
                                specializes in creating beautiful, responsive designs with CSS. He
                                has helped hundreds of developers master modern CSS techniques and
                                build professional web interfaces.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="social-link">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="social-link">
                                    <FaGithub />
                                </a>
                                <a href="#" className="social-link">
                                    <FaGlobe />
                                </a>
                            </div>

                            <div className="stats">
                                <div className="stat">
                                    <span className="number">7+</span>
                                    <span className="label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="number">50+</span>
                                    <span className="label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="number">1000+</span>
                                    <span className="label">Students Taught</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Testimonials */}
                <section className="testimonials">
                    <Container>
                        <div className="text-center">
                            <div className="expert-badge">TESTIMONIALS</div>
                            <h2 className="section-title text-center">What Our Students Say</h2>
                            <p className="section-subtitle text-center">
                                Join thousands of satisfied developers who've taken their CSS skills
                                to the next level
                            </p>
                        </div>
                        <div className="testimonials-container">
                            <div className="testimonial-card">
                                <div className="quote">"</div>
                                <p>
                                    This masterclass transformed my understanding of CSS. I'm now
                                    able to create complex layouts with ease and my code is much
                                    cleaner.
                                </p>
                                <div className="author">
                                    <img
                                        src="https://via.placeholder.com/60x60?text=PS"
                                        alt="Student"
                                    />
                                    <div>
                                        <h4>Priya Sharma</h4>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote">"</div>
                                <p>
                                    The hands-on projects were incredibly valuable. I implemented
                                    what I learned immediately at work and received praise from my
                                    team.
                                </p>
                                <div className="author">
                                    <img
                                        src="https://via.placeholder.com/60x60?text=RG"
                                        alt="Student"
                                    />
                                    <div>
                                        <h4>Rahul Gupta</h4>
                                        <p>UI Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote">"</div>
                                <p>
                                    Ashish explains complex concepts in a simple way. The animations
                                    section was eye-opening and helped me create much more engaging
                                    websites.
                                </p>
                                <div className="author">
                                    <img
                                        src="https://via.placeholder.com/60x60?text=NP"
                                        alt="Student"
                                    />
                                    <div>
                                        <h4>Neha Patel</h4>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="faq" id="faq">
                    <Container>
                        <h2 className="section-title text-center">
                            Frequently <span>Asked Questions</span>
                        </h2>
                        <p className="section-subtitle text-center">
                            Find answers to common questions about our CSS Masterclass
                        </p>
                        <div className="faq-container">
                            <div className={`faq-item ${activeFaq === 0 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
                                >
                                    <h3>Is this CSS Masterclass beginner-friendly?</h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        Yes! While the masterclass covers advanced topics, we start
                                        with a solid refresh of CSS fundamentals. This webinar is
                                        designed for frontend developers, web designers, and UI/UX
                                        designers who have basic knowledge of HTML and CSS and want
                                        to improve their skills.
                                    </p>
                                </div>
                            </div>
                            <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
                                >
                                    <h3>Do I need prior experience with CSS?</h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        Yes, you should have basic knowledge of CSS including
                                        selectors, properties, and simple layouts. We'll briefly
                                        review fundamentals before diving into advanced topics.
                                    </p>
                                </div>
                            </div>
                            <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
                                >
                                    <h3>
                                        Will I be able to build responsive websites after this
                                        Masterclass?
                                    </h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        Absolutely! Day 2 is dedicated to modern layout techniques
                                        and responsive design. You'll learn CSS Grid, Flexbox,
                                        Container Queries, and more. By the end of the masterclass,
                                        you'll be able to build fully responsive and interactive
                                        websites.
                                    </p>
                                </div>
                            </div>
                            <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
                                >
                                    <h3>Is this session recorded?</h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        Yes, all sessions will be recorded and shared with
                                        participants. However, we recommend attending live to
                                        participate in Q&A and get real-time feedback.
                                    </p>
                                </div>
                            </div>
                            <div className={`faq-item ${activeFaq === 4 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
                                >
                                    <h3>Will I receive a certificate?</h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        Yes, upon completion of all three sessions and submission of
                                        the final project, you will receive a certificate of
                                        completion that you can add to your portfolio and LinkedIn
                                        profile.
                                    </p>
                                </div>
                            </div>
                            <div className={`faq-item ${activeFaq === 5 ? "active" : ""}`}>
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}
                                >
                                    <h3>What tools or software will I need?</h3>
                                    <FaChevronDown className="arrow-icon" />
                                </div>
                                <div className="faq-answer">
                                    <p>
                                        You'll need a computer with a modern web browser and a code
                                        editor (like VS Code, Sublime Text, etc.). All required
                                        resources and starter files will be provided before the
                                        first session.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Register Section */}
                <section className="register" id="register">
                    <Container fluid="true" className="p-0">
                        <div className="register-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="section-badge">LIMITED TIME OFFER</div>
                                    <h2 className="section-title">
                                        Register Now & <span>Save 80%</span>
                                    </h2>
                                    <p className="highlight">
                                        Limited seats available! This batch is filling up fast.
                                    </p>
                                    <div className="price-container">
                                        <div className="price-tag">
                                            <div className="original-price">₹4999</div>
                                            <div className="current-price">₹999</div>
                                        </div>
                                        <span className="discount">80% OFF</span>
                                    </div>
                                    <div className="timer-container">
                                        <div className="timer-label">Offer ends in:</div>
                                        <div className="countdown">
                                            <div className="time-block">
                                                <span className="number">{countdown.days}</span>
                                                <span className="unit">Days</span>
                                            </div>
                                            <div className="time-block">
                                                <span className="number">{countdown.hours}</span>
                                                <span className="unit">Hours</span>
                                            </div>
                                            <div className="time-block">
                                                <span className="number">{countdown.minutes}</span>
                                                <span className="unit">Minutes</span>
                                            </div>
                                            <div className="time-block">
                                                <span className="number">{countdown.seconds}</span>
                                                <span className="unit">Seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="form-container">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="experience">
                                                    CSS Experience Level
                                                </label>
                                                <select
                                                    id="experience"
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                >
                                                    <option value="">
                                                        Select your experience level
                                                    </option>
                                                    <option value="beginner">
                                                        Beginner (0-1 years)
                                                    </option>
                                                    <option value="intermediate">
                                                        Intermediate (1-3 years)
                                                    </option>
                                                    <option value="advanced">
                                                        Advanced (3+ years)
                                                    </option>
                                                </select>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block pulse-btn"
                                            >
                                                SECURE YOUR SEAT NOW
                                            </button>
                                            <div className="seats-left">
                                                Only 10 seats left! Offer expires soon.
                                            </div>
                                        </form>
                                        <div className="form-footer">
                                            <p>
                                                For any queries, contact us at{" "}
                                                <a href={mailTo("support@frontendzone.com")}>
                                                    support@frontendzone.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </MasterclassWrapper>
        </>
    );
};

// Styled Component
const MasterclassWrapper = styled.div`
    --primary-color: #ffd700;
    --secondary-color: #ffd700;
    --accent-color: rgba(255, 215, 0, 0.1);
    --dark-color: #000000;
    --light-color: #111111;
    --success-color: #28a745;
    --text-color: #ffffff;
    --input-bg: #2a2a2a;
    --gradient-gold: linear-gradient(135deg, #ffd700 0%, #ffc107 100%);

    color: var(--dark-color);

    .section-badge {
        background-color: rgba(255, 215, 0, 0.15);
        color: #ffd700;
        font-weight: 700;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 auto 1rem;
        display: table;
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        text-align: center;
        position: relative;

        &:after {
            content: "";
            height: 4px;
            width: 80px;
            background: var(--gradient-primary);
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }
    }

    .section-subtitle {
        font-size: 1.25rem;
        text-align: center;
        max-width: 700px;
        margin: 2rem auto 3rem;
        opacity: 0.8;
    }

    section {
        padding: 4rem 0;
        background-color: #000000;
        color: var(--text-color);
    }

    .hero {
        background: linear-gradient(125deg, #000000, #0a0a0a) center/cover;
        color: white;
        padding: 7rem 0 6rem;
        position: relative;
        overflow: hidden;

        .hero-shapes {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;

            .shape {
                position: absolute;
                border-radius: 50%;

                &.shape-1 {
                    top: -150px;
                    right: -100px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(
                        circle,
                        rgba(0, 136, 255, 0.25) 0%,
                        rgba(0, 136, 255, 0.15) 50%,
                        transparent 70%
                    );
                    filter: blur(50px);
                }

                &.shape-2 {
                    bottom: -200px;
                    left: -150px;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(
                        circle,
                        rgba(255, 215, 0, 0.15) 0%,
                        rgba(255, 215, 0, 0.08) 50%,
                        transparent 70%
                    );
                    filter: blur(80px);
                }

                &.shape-3 {
                    top: 30%;
                    right: 20%;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(
                        circle,
                        rgba(0, 136, 255, 0.2) 0%,
                        rgba(0, 136, 255, 0.1) 50%,
                        transparent 70%
                    );
                    filter: blur(60px);
                }
            }
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .row {
            position: relative;
            z-index: 2;

            .hero-left,
            .hero-right {
                padding: 1rem;
            }
        }

        .badge-container {
            margin-bottom: 1.5rem;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(0, 136, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 136, 255, 0.3);
            border-radius: 2rem;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            letter-spacing: 0.5px;

            .star-icon {
                display: inline-block;
                margin-right: 0.5rem;
                color: #ffd700;
                font-size: 1rem;
            }
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: white;
            line-height: 1.2;
            letter-spacing: -0.5px;

            .highlight-text {
                background: linear-gradient(45deg, #ffd700, #ffc107);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-weight: 800;
            }

            @media (max-width: 992px) {
                font-size: 3rem;
            }

            @media (max-width: 768px) {
                font-size: 2.5rem;
                text-align: center;
            }
        }

        .hero-description {
            font-size: 1.25rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2.5rem;
            max-width: 540px;

            @media (max-width: 768px) {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-size: 1.15rem;
            }
        }

        .features-list {
            margin-bottom: 2.5rem;

            .feature-item {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;

                .check-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #ffd700, #ffc107);
                    color: #000000;
                    font-size: 0.8rem;
                    margin-right: 1rem;
                    flex-shrink: 0;
                }

                span {
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.9);
                }

                @media (max-width: 768px) {
                    justify-content: center;

                    span {
                        font-size: 1rem;
                    }
                }
            }
        }

        .highlight {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .tag {
            display: inline-block;
            background-color: var(--success-color);
            color: white;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .gradient-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .date-info {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            gap: 1.5rem;

            .date-badge {
                background-color: rgba(255, 255, 255, 0.1);
                padding: 0.75rem 1.25rem;
                border-radius: 0.5rem;
                font-weight: 500;
                display: inline-block;
                max-width: fit-content;

                i {
                    margin-right: 0.5rem;
                    color: var(--primary-color);
                }
            }

            .price-badge {
                display: flex;
                align-items: center;
                gap: 1rem;

                .price-tag {
                    .original {
                        text-decoration: line-through;
                        opacity: 0.7;
                        font-size: 1.2rem;
                    }

                    .current {
                        font-size: 2.5rem;
                        font-weight: 700;
                        background: var(--gradient-gold);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                    }
                }

                .discount-badge {
                    background: var(--gradient-gold);
                    color: #000020;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                    font-weight: 700;
                    font-size: 1.2rem;
                }
            }
        }

        .hero-cta {
            display: flex;
            gap: 1.25rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;

            @media (max-width: 768px) {
                justify-content: center;
            }

            .btn,
            a,
            Link {
                padding: 1rem 2rem;
                font-weight: 700;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
                text-decoration: none;
                min-width: 200px;

                &.btn-primary {
                    background: linear-gradient(135deg, #0088ff 0%, #0055bb 100%);
                    color: white;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 700;
                    position: relative;
                    overflow: hidden;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(255, 255, 255, 0.2),
                            transparent
                        );
                        transition: all 0.8s;
                    }

                    &:hover {
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);

                        &:before {
                            left: 100%;
                        }
                    }

                    &.pulse-btn {
                        animation: pulse 2s infinite;
                    }
                }

                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(0, 136, 255, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(0, 136, 255, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(0, 136, 255, 0);
                    }
                }

                &.btn-outline {
                    background-color: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(4px);
                    border: 2px solid rgba(0, 136, 255, 0.7);
                    color: white;
                    position: relative;
                    z-index: 1;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 0.1),
                            rgba(255, 255, 255, 0.2)
                        );
                        border-radius: inherit;
                        z-index: -1;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }

                    &:hover {
                        border-color: rgba(255, 255, 255, 0.8);
                        transform: translateY(-3px);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

                        &:before {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .hero-image {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow:
                0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);

            img {
                width: 100%;
                height: auto;
            }
        }

        .hero-right {
            .card-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;

                @media (max-width: 992px) {
                    margin-top: 3rem;
                }
            }

            .event-card {
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(0, 136, 255, 0.2);
                border-radius: 1rem;
                padding: 2rem;
                box-shadow:
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    0 0 15px rgba(0, 136, 255, 0.15);
                width: 100%;
                max-width: 450px;
                margin: 0 auto;

                .card-header {
                    margin-bottom: 1.5rem;
                }

                .date-badge,
                .time-badge {
                    background-color: rgba(255, 255, 255, 0.1);
                    padding: 0.7rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    display: inline-block;
                    margin-right: 1rem;
                    margin-bottom: 0.75rem;

                    i {
                        margin-right: 0.5rem;
                        color: #0088ff;
                    }
                }

                .price-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1.5rem;

                    .price-tag {
                        .original {
                            text-decoration: line-through;
                            opacity: 0.7;
                            font-size: 1.1rem;
                            color: #94a3b8;
                        }

                        .current {
                            font-size: 2.5rem;
                            font-weight: 700;
                            background: linear-gradient(135deg, #ffd700, #ffc107);
                            -webkit-background-clip: text;
                            background-clip: text;
                            color: transparent;
                            line-height: 1.2;
                        }
                    }

                    .discount-badge {
                        background: linear-gradient(135deg, #ffd700, #ffc107);
                        color: #000000;
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        font-weight: 700;
                        font-size: 1rem;
                    }
                }

                .seats-info {
                    margin-bottom: 1.5rem;

                    .progress-container {
                        width: 100%;
                        height: 8px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 4px;
                        margin-bottom: 0.75rem;

                        .progress-bar {
                            height: 100%;
                            width: 85%;
                            background: linear-gradient(to right, #0088ff, #0055bb);
                            border-radius: 4px;
                        }
                    }

                    .seats-text {
                        font-size: 0.95rem;
                        color: rgba(255, 255, 255, 0.9);
                        margin: 0;

                        .seats-highlight {
                            color: #0088ff;
                            font-weight: 600;
                        }
                    }
                }

                .hero-image {
                    border-radius: 0.75rem;
                    overflow: hidden;
                    margin-top: 1.5rem;

                    img {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                }
            }
        }
    }

    .what-youll-learn {
        background-color: #000;
        color: #fff;
        padding: 5rem 0;

        .section-title {
            color: #fff;
            margin-bottom: 1rem;
        }

        .section-subtitle {
            color: rgba(255, 255, 255, 0.7);
        }

        .section-badge {
            background-color: rgba(255, 215, 0, 0.15);
            color: #ffd700;
        }

        .days-container {
            display: flex;
            gap: 2rem;
            margin-top: 4rem;
            flex-wrap: wrap;
            justify-content: center;

            @media (max-width: 992px) {
                flex-direction: column;
                align-items: center;
            }

            .day-card {
                flex: 1;
                width: 100%;
                max-width: 400px;
                min-width: 300px;
                background: #111111;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 2rem;
                transition:
                    transform 0.3s ease,
                    box-shadow 0.3s ease;
                box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.2);

                @media (max-width: 1200px) {
                    min-width: 280px;
                }

                @media (max-width: 992px) {
                    margin-bottom: 2rem;
                }

                &:hover {
                    transform: translateY(-5px);
                    box-shadow:
                        0 20px 25px -5px rgba(0, 0, 0, 0.3),
                        0 10px 10px -5px rgba(0, 0, 0, 0.2);
                }

                .day-header {
                    margin-bottom: 1.25rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    .day-number {
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #ffd700;
                        color: #000;
                        border-radius: 50%;
                        font-weight: 700;
                        font-size: 1.5rem;
                        margin-bottom: 1.25rem;
                    }

                    h3 {
                        font-size: 1.6rem;
                        font-weight: 700;
                        color: #fff;
                        margin: 0;
                        line-height: 1.3;
                    }
                }

                .day-time {
                    font-size: 0.95rem;
                    color: #ffd700;
                    margin-bottom: 2rem;
                    font-weight: 500;
                    display: block;
                }

                .features-list {
                    list-style: none;
                    padding: 0;

                    li {
                        display: flex;
                        align-items: flex-start;
                        margin-bottom: 1rem;
                        color: rgba(255, 255, 255, 0.9);
                        padding: 0.5rem;
                        border-radius: 0.25rem;
                        font-size: 1rem;

                        &:hover {
                            background-color: rgba(255, 215, 0, 0.05);
                        }

                        svg {
                            color: #ffd700;
                            margin-right: 1rem;
                            flex-shrink: 0;
                            font-size: 1.1rem;
                            margin-top: 3px;
                        }
                    }
                }
            }
        }
    }

    .why-join {
        .benefits {
            display: grid;
            gap: 2rem;
            margin-top: 2rem;

            .benefit-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;

                .icon {
                    background: var(--gradient-gold);
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    color: #000020;
                    box-shadow: 0 10px 15px -3px rgba(255, 206, 0, 0.2);
                }

                .content {
                    h3 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                        color: var(--dark-color);
                    }

                    p {
                        opacity: 0.8;
                        margin: 0;
                    }
                }
            }
        }
    }

    .instructor {
        background: linear-gradient(180deg, #000000, #0a0a0a);
        padding: 7rem 0;
        position: relative;
        overflow: hidden;

        &:before {
            content: "";
            position: absolute;
            bottom: -15%;
            left: -10%;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(0, 136, 255, 0.08);
            filter: blur(100px);
            animation: float-slow 10s infinite alternate ease-in-out;
        }

        &:after {
            content: "";
            position: absolute;
            top: -10%;
            right: -10%;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.05);
            filter: blur(80px);
            animation: float-slow 15s infinite alternate-reverse ease-in-out;
        }

        @keyframes float-slow {
            0% {
                transform: translateY(0) scale(1);
            }
            100% {
                transform: translateY(30px) scale(1.05);
            }
        }

        .expert-badge {
            background: linear-gradient(135deg, #ffd700, #ffc107);
            color: #000000;
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 16px;
            display: inline-block;
            margin-bottom: 2.5rem;
            letter-spacing: 1.5px;
            position: relative;
            box-shadow: 0 8px 16px rgba(255, 215, 0, 0.25);
            animation: pulse-badge 3s infinite;

            &:before {
                content: "";
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.5), rgba(255, 165, 0, 0.5));
                border-radius: 50px;
                z-index: -1;
                filter: blur(8px);
                opacity: 0.7;
            }
        }

        @keyframes pulse-badge {
            0% {
                box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4);
            }
            70% {
                box-shadow: 0 0 0 15px rgba(255, 215, 0, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
            }
        }

        .section-title {
            color: white;
            font-size: 3rem;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;

            span {
                background: linear-gradient(135deg, #0088ff, #00aaff);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }

            &:after {
                content: "";
                position: absolute;
                bottom: -0.75rem;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 3px;
                background: linear-gradient(to right, transparent, #0088ff, transparent);
                border-radius: 2px;
            }
        }

        .instructor-card {
            background: linear-gradient(145deg, rgba(0, 0, 0, 0.7), rgba(10, 10, 10, 0.9));
            border-radius: 1.5rem;
            padding: 4rem 2rem;
            box-shadow:
                0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(0, 136, 255, 0.1);
            text-align: center;
            max-width: 950px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            border: 1px solid rgba(0, 136, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            &:before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 1.5rem;
                padding: 1px;
                background: linear-gradient(
                    145deg,
                    rgba(0, 136, 255, 0.3),
                    rgba(255, 215, 0, 0.1),
                    transparent
                );
                -webkit-mask:
                    linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                mask:
                    linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
            }

            .instructor-name {
                color: white;
                font-size: 2.2rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
                margin-top: 1.5rem;
            }

            .instructor-title {
                background: linear-gradient(135deg, #ffd700, #ffc107);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-weight: 700;
                font-size: 1.3rem;
                margin-bottom: 1.5rem;
                letter-spacing: 0.5px;
                text-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
            }

            .instructor-bio {
                color: rgba(255, 255, 255, 0.85);
                font-size: 1.1rem;
                line-height: 1.7;
                max-width: 750px;
                margin: 0 auto 1.5rem;
            }

            .social-links {
                display: flex;
                justify-content: center;
                gap: 1.2rem;
                margin-bottom: 2.5rem;

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(0, 136, 255, 0.3);
                    color: #0088ff;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

                    svg {
                        width: 1.2rem;
                        height: 1.2rem;
                    }

                    &:hover {
                        background-color: #0088ff;
                        color: #000000;
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                    }
                }
            }

            .instructor-image-container {
                text-align: center;
                margin-bottom: 1.5rem;
                position: relative;
                display: inline-block;

                &:after {
                    content: "";
                    position: absolute;
                    top: -15px;
                    left: -15px;
                    right: -15px;
                    bottom: -15px;
                    background: conic-gradient(
                        from 0deg,
                        rgba(0, 136, 255, 0.3),
                        rgba(255, 215, 0, 0.3),
                        rgba(0, 136, 255, 0.3)
                    );
                    border-radius: 50%;
                    z-index: -1;
                    filter: blur(20px);
                    opacity: 0.5;
                    animation: rotate 15s linear infinite;
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin: 0 auto;
                    border: 3px solid transparent;
                    background: linear-gradient(145deg, #0088ff, #ffd700) border-box;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                    transition: transform 0.5s ease;

                    &:hover {
                        transform: scale(1.05);
                    }
                }
            }

            .stats {
                display: flex;
                justify-content: center;
                gap: 5rem;
                margin-top: 4rem;
                flex-wrap: wrap;
                position: relative;

                &:before {
                    content: "";
                    position: absolute;
                    top: -30px;
                    left: 5%;
                    right: 5%;
                    height: 1px;
                    background: linear-gradient(
                        to right,
                        transparent,
                        rgba(0, 136, 255, 0.3),
                        transparent
                    );
                }

                .stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    padding: 1.5rem;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 1rem;
                    border: 1px solid rgba(0, 136, 255, 0.1);
                    min-width: 180px;
                    transition: all 0.3s ease;

                    &:hover {
                        transform: translateY(-10px);
                        box-shadow:
                            0 15px 30px rgba(0, 0, 0, 0.2),
                            0 0 15px rgba(0, 136, 255, 0.1);

                        .number {
                            transform: scale(1.1);
                        }
                    }

                    .number {
                        font-size: 3.5rem;
                        font-weight: 800;
                        background: linear-gradient(135deg, #ffd700, #ffc107);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        margin-bottom: 0.75rem;
                        line-height: 1;
                        text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
                        transition: transform 0.3s ease;
                    }

                    .label {
                        font-size: 1.1rem;
                        color: #0088ff;
                        text-align: center;
                        white-space: nowrap;
                        letter-spacing: 0.5px;
                        font-weight: 500;
                    }
                }
            }
        }
    }

    .testimonials {
        background-color: black;
        color: white;
        padding: 6rem 0;

        .section-title {
            color: white;
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .section-subtitle {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 3rem;
        }

        .expert-badge {
            background-color: #ffd700;
            color: #000;
            padding: 8px 25px;
            border-radius: 50px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 16px;
            display: inline-block;
            margin-bottom: 2rem;
            letter-spacing: 1px;
        }

        .testimonials-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            margin-top: 3rem;

            @media (max-width: 992px) {
                gap: 1.5rem;
            }
        }

        .testimonial-card {
            background: #111111;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.2);
            flex: 1;
            min-width: 280px;
            max-width: 370px;
            position: relative;
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;

            @media (max-width: 768px) {
                min-width: 100%;
                margin-bottom: 1rem;
            }

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
            }

            .quote {
                font-size: 4rem;
                position: absolute;
                top: 1rem;
                left: 1.5rem;
                color: var(--accent-color);
                font-family: serif;
                line-height: 1;
            }

            p {
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
                position: relative;
                z-index: 1;
            }

            .author {
                display: flex;
                align-items: center;
                gap: 1rem;

                img {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    object-fit: cover;
                }

                h4 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0;
                }

                p {
                    font-size: 0.875rem;
                    opacity: 0.8;
                    margin: 0;
                }
            }
        }
    }

    .faq {
        background-color: #000000;
        background-image:
            radial-gradient(circle at 20% 80%, rgba(0, 136, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 30%);
        color: white;
        padding: 6rem 0;
        position: relative;
        overflow: hidden;

        &:before {
            content: "";
            position: absolute;
            top: -10%;
            right: -5%;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: rgba(0, 136, 255, 0.08);
            filter: blur(70px);
            z-index: 0;
        }

        &:after {
            content: "";
            position: absolute;
            bottom: -10%;
            left: -5%;
            width: 350px;
            height: 350px;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.05);
            filter: blur(70px);
            z-index: 0;
        }

        .section-title {
            color: white;
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
            font-weight: 800;
            position: relative;
            z-index: 1;

            span {
                background: linear-gradient(135deg, #ffd700, #ffc107);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }

            &:after {
                content: "";
                position: absolute;
                bottom: -0.75rem;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 4px;
                background: linear-gradient(to right, #0088ff, #0055bb);
                border-radius: 2px;
            }
        }

        .section-subtitle {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 4rem;
            font-size: 1.15rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 1;
        }

        @keyframes faq-pulse {
            0% {
                box-shadow:
                    0 15px 30px rgba(0, 0, 0, 0.3),
                    0 0 5px rgba(0, 136, 255, 0.2);
            }
            100% {
                box-shadow:
                    0 15px 30px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(0, 136, 255, 0.4);
            }
        }

        .faq-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 15px;
            position: relative;
            z-index: 1;

            @media (max-width: 768px) {
                max-width: 95%;
                padding: 0 10px;
            }

            .faq-item {
                background-color: rgba(10, 10, 10, 0.7);
                border-radius: 1rem;
                margin-bottom: 1.5rem;
                overflow: hidden;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                transition: all 0.4s ease;
                border: 1px solid rgba(0, 136, 255, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);

                &:hover {
                    box-shadow:
                        0 10px 25px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(0, 136, 255, 0.2);
                    transform: translateY(-3px);
                }

                &.active {
                    box-shadow:
                        0 15px 30px rgba(0, 0, 0, 0.3),
                        0 0 15px rgba(0, 136, 255, 0.2);
                    border-color: rgba(0, 136, 255, 0.3);
                    animation: faq-pulse 2s infinite alternate;

                    .faq-question {
                        background-color: rgba(0, 0, 0, 0.4);

                        h3 {
                            color: #ffd700;
                            font-weight: 700;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                        }

                        .arrow-icon {
                            transform: rotate(180deg) scale(1.2);
                            color: #ffd700;
                            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
                            animation: glow 1.5s infinite alternate;
                        }

                        @keyframes glow {
                            from {
                                filter: drop-shadow(0 0 1px rgba(255, 215, 0, 0.5));
                            }
                            to {
                                filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
                            }
                        }
                    }

                    .faq-answer {
                        max-height: 500px;
                        padding: 1.2rem 1.8rem 1.8rem;
                        position: relative;

                        &:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 1.8rem;
                            right: 1.8rem;
                            height: 1px;
                            background: linear-gradient(
                                to right,
                                transparent,
                                rgba(0, 136, 255, 0.2),
                                transparent
                            );
                        }
                    }
                }

                .faq-question {
                    padding: 1.5rem 2rem;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(10, 10, 10, 0.5);
                    transition: all 0.4s ease;
                    position: relative;

                    &:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 1.5rem;
                        right: 1.5rem;
                        height: 1px;
                        background: linear-gradient(
                            to right,
                            transparent,
                            rgba(0, 136, 255, 0.15),
                            transparent
                        );
                    }

                    @media (max-width: 576px) {
                        padding: 1.2rem 1.5rem;
                    }

                    h3 {
                        font-size: 1.1rem;
                        font-weight: 600;
                        margin: 0;
                        color: white;
                        transition: all 0.3s ease;
                        line-height: 1.5;

                        @media (max-width: 576px) {
                            font-size: 1rem;
                        }
                    }

                    .arrow-icon {
                        color: #0088ff;
                        transition: all 0.4s ease;
                        font-size: 1.1rem;
                        margin-left: 15px;
                        flex-shrink: 0;
                        width: 22px;
                        height: 22px;
                        opacity: 0.8;
                    }

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.6);

                        h3 {
                            color: #0088ff;
                        }

                        .arrow-icon {
                            color: #0088ff;
                            opacity: 1;
                            transform: translateX(2px);
                        }
                    }
                }

                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    padding: 0 2rem 0;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.7;
                    background-color: rgba(0, 0, 0, 0.3);

                    p {
                        margin: 0;
                        line-height: 1.8;
                        color: rgba(255, 255, 255, 0.85);
                        font-size: 1rem;

                        a {
                            color: #0088ff;
                            text-decoration: none;
                            font-weight: 500;
                            position: relative;
                            transition: all 0.3s ease;

                            &:after {
                                content: "";
                                position: absolute;
                                bottom: -2px;
                                left: 0;
                                right: 0;
                                height: 1px;
                                background-color: #ffd700;
                                transform: scaleX(0);
                                transform-origin: right;
                                transition: transform 0.3s ease;
                            }

                            &:hover {
                                color: #ffd700;

                                &:after {
                                    transform: scaleX(1);
                                    transform-origin: left;
                                }
                            }
                        }
                    }

                    ul,
                    ol {
                        margin: 1rem 0;
                        padding-left: 1.5rem;

                        li {
                            margin-bottom: 0.5rem;
                            color: #475569;
                        }
                    }
                }
            }
        }
    }

    .register {
        background: linear-gradient(to right, #000000, #0a0a0a);
        color: white;
        position: relative;
        overflow: hidden;

        .section-title {
            color: white;
            margin-bottom: 1rem;

            span {
                background: linear-gradient(135deg, #ffd700, #ffc107);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }

        &::before {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: rgba(0, 136, 255, 0.1);
            filter: blur(100px);
            top: -100px;
            right: -100px;
            z-index: 0;
        }

        &::after {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.08);
            filter: blur(80px);
            bottom: -100px;
            left: -50px;
            z-index: 0;
        }

        .register-container {
            background-color: rgba(10, 10, 10, 0.6);
            color: white;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow:
                0 25px 50px -12px rgba(0, 0, 0, 0.35),
                0 0 15px rgba(0, 136, 255, 0.1);
            padding: 3rem;
            border: 1px solid rgba(0, 136, 255, 0.1);
            position: relative;
            z-index: 1;
            box-sizing: border-box;

            @media (max-width: 768px) {
                padding: 2rem 0.5rem;
                width: 100%;
                max-width: 100%;
                margin: 0;
                border-radius: 0.75rem;

                .row {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                }
            }
            .highlight {
                font-size: 1.25rem;
                margin-bottom: 2rem;
                opacity: 0.9;
            }

            .price-container {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                margin-bottom: 2.5rem;
                position: relative;

                .price-tag {
                    .original-price {
                        text-decoration: line-through;
                        opacity: 0.7;
                        font-size: 1.3rem;
                        margin-bottom: 0.3rem;
                        position: relative;
                        color: #ffc0cb;

                        &:after {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 0;
                            right: 0;
                            height: 2px;
                            background-color: #ef4444;
                            transform: rotate(-5deg);
                        }
                    }

                    .current-price {
                        font-size: 3.2rem;
                        font-weight: 800;
                        background: linear-gradient(135deg, #ffd700, #ffc107);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        line-height: 1;
                        text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
                        letter-spacing: -1px;
                    }
                }

                .discount {
                    background: linear-gradient(135deg, #ffd700, #ffc107);
                    color: #000000;
                    padding: 0.6rem 1.2rem;
                    border-radius: 0.5rem;
                    font-weight: 700;
                    font-size: 1.3rem;
                    transform: rotate(5deg);
                    box-shadow: 0 6px 10px rgba(255, 206, 0, 0.4);
                    position: relative;

                    &:before {
                        content: "";
                        position: absolute;
                        top: -5px;
                        left: -5px;
                        right: -5px;
                        bottom: -5px;
                        background: linear-gradient(
                            135deg,
                            rgba(255, 215, 0, 0.4),
                            rgba(255, 165, 0, 0.4)
                        );
                        border-radius: inherit;
                        filter: blur(8px);
                        z-index: -1;
                    }
                }
            }

            .timer-container {
                margin-bottom: 2rem;

                .timer-label {
                    font-size: 1rem;
                    opacity: 0.8;
                    margin-bottom: 0.5rem;
                }

                .countdown {
                    display: flex;
                    gap: 1.25rem;

                    .time-block {
                        background: rgba(0, 0, 0, 0.5);
                        color: white;
                        border-radius: 0.75rem;
                        padding: 1.2rem 1rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid rgba(0, 136, 255, 0.2);
                        min-width: 5.5rem;
                        box-shadow:
                            0 8px 16px rgba(0, 0, 0, 0.2),
                            inset 0 1px 1px rgba(255, 255, 255, 0.05);
                        position: relative;
                        overflow: hidden;
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);

                        &:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            height: 1px;
                            background: linear-gradient(
                                90deg,
                                transparent,
                                rgba(0, 136, 255, 0.3),
                                transparent
                            );
                        }

                        .number {
                            font-size: 2.2rem;
                            font-weight: 800;
                            background: linear-gradient(135deg, #ffd700, #ffc107);
                            -webkit-background-clip: text;
                            background-clip: text;
                            color: transparent;
                            text-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
                            margin-bottom: 0.2rem;
                        }

                        .unit {
                            font-size: 0.9rem;
                            color: #0088ff;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                            font-weight: 600;
                        }
                    }
                }
            }

            .form-container {
                background: rgba(0, 0, 0, 0.7);
                border: 1px solid rgba(0, 136, 255, 0.15);
                border-radius: 1rem;
                padding: 2.5rem;
                box-shadow:
                    0 25px 50px rgba(0, 0, 0, 0.25),
                    0 10px 20px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                position: relative;
                overflow: hidden;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                box-sizing: border-box;

                @media (max-width: 768px) {
                    padding: 1.8rem;
                    width: 100%;
                    max-width: 100%;
                    margin: 0;
                    border-radius: 0.75rem;
                }

                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #0088ff, #0055bb);
                }

                .form-group {
                    margin-bottom: 1.75rem;

                    @media (max-width: 768px) {
                        margin-bottom: 2rem;
                    }

                    label {
                        display: block;
                        margin-bottom: 0.6rem;
                        font-weight: 600;
                        color: #ffffff;
                        font-size: 0.95rem;

                        @media (max-width: 768px) {
                            margin-bottom: 0.4rem;
                            font-size: 0.9rem;
                        }
                    }

                    .form-control {
                        width: 100%;
                        padding: 0.9rem 1.2rem;
                        font-size: 1rem;
                        border: 1px solid rgba(0, 136, 255, 0.3);
                        box-sizing: border-box;

                        @media (max-width: 768px) {
                            padding: 1.1rem 1.2rem;
                            font-size: 1.05rem;
                            width: 100% !important;
                            max-width: none !important;
                            display: block;
                        }
                        border-radius: 0.5rem;
                        background-color: rgba(20, 20, 30, 0.9);
                        transition: all 0.3s ease;
                        color: #ffffff;

                        &:focus {
                            outline: none;
                            border-color: #0088ff;
                            box-shadow: 0 0 0 4px rgba(0, 136, 255, 0.15);
                            background-color: rgba(0, 0, 0, 0.7);
                        }

                        &::placeholder {
                            color: rgba(255, 255, 255, 0.5);
                            opacity: 0.7;
                        }

                        @media (max-width: 768px) {
                            padding: 0.8rem 1rem;
                            font-size: 0.95rem;
                            -webkit-appearance: none; /* Better styling on iOS */
                        }
                    }
                }

                @keyframes pulse-blue {
                    0% {
                        box-shadow: 0 0 0 0 rgba(0, 136, 255, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(0, 136, 255, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(0, 136, 255, 0);
                    }
                }

                .btn-block {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.125rem;
                    font-weight: 700;
                    text-align: center;
                    background: linear-gradient(135deg, #0088ff, #0055bb);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(0, 136, 255, 0.4);
                    position: relative;
                    overflow: hidden;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    animation: pulse-blue 2s infinite;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(255, 255, 255, 0.3),
                            transparent
                        );
                        transition: all 0.8s;
                    }

                    &:hover {
                        background: linear-gradient(135deg, #0088ff, #0066cc);
                        box-shadow: 0 6px 12px rgba(0, 136, 255, 0.5);
                        transform: translateY(-2px);

                        &:before {
                            left: 100%;
                        }
                    }

                    &:active {
                        transform: translateY(0);
                        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
                    }

                    @media (max-width: 768px) {
                        padding: 0.9rem;
                        font-size: 1rem;
                    }
                }

                .seats-left {
                    font-size: 0.875rem;
                    background: linear-gradient(135deg, #ffd700, #ffc107);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    font-weight: 700;
                    text-align: center;
                    margin-top: 1.2rem;
                    padding: 0.6rem;
                    border-radius: 0.5rem;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                    background-color: rgba(0, 0, 0, 0.3);
                    animation: pulse-yellow 2s infinite;

                    @media (max-width: 768px) {
                        font-size: 0.8rem;
                        margin-top: 0.8rem;
                    }
                }

                @keyframes pulse-yellow {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4);
                        transform: scale(1);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
                        transform: scale(1.02);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
                        transform: scale(1);
                    }
                }

                .form-footer {
                    margin-top: 1.5rem;
                    text-align: center;
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.7);

                    @media (max-width: 768px) {
                        margin-top: 1.2rem;
                        font-size: 0.8rem;
                    }

                    a {
                        color: #0088ff;
                        text-decoration: none;
                        transition: all 0.3s ease;

                        &:hover {
                            color: #ffd700;
                            text-decoration: underline;
                        }
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        .days-container {
            flex-direction: column;
            align-items: center;

            .day-card {
                width: 95%;
                max-width: 500px;
                margin-bottom: 2rem;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .instructor {
            .instructor-card {
                padding: 2rem 1.5rem;
                max-width: 95%;
                margin: 0 auto;
            }

            .stats {
                flex-wrap: wrap;
                justify-content: center;
                gap: 2rem 3rem;

                .stat-item {
                    width: 45%;
                    min-width: 160px;
                }
            }
        }

        .testimonials {
            .row {
                flex-direction: column;
                align-items: center;

                .col-md-4 {
                    width: 95%;
                    max-width: 400px;
                    margin-bottom: 2rem;

                    .testimonial-card {
                        height: auto;
                        min-height: 240px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1rem;
            width: 100%;
            max-width: 100%;
        }

        .section-title {
            font-size: 2rem;
            max-width: 95%;
            margin: 0 auto 1.5rem;
        }

        .section-subtitle {
            font-size: 1rem;
            max-width: 95%;
            margin: 0 auto 2rem;
        }

        .hero {
            padding: 4rem 0;

            h1 {
                font-size: 2.5rem;
                line-height: 1.3;
                text-align: center;
                max-width: 100%;
                margin-left: auto;
                margin-right: auto;
            }

            .hero-description {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                max-width: 95%;
                font-size: 1.1rem;
            }

            .badge-container {
                text-align: center;
            }

            .features-list {
                .feature-item {
                    justify-content: center;
                }
            }

            .hero-cta {
                justify-content: center;
                flex-direction: column;
                gap: 1rem;

                .btn,
                a,
                Link {
                    width: 100%;
                }
            }

            .hero-right {
                .card-container {
                    margin-top: 3rem;
                }

                .event-card {
                    padding: 1.5rem;

                    .price-container {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                }
            }
        }

        @media (max-width: 576px) {
            .hero {
                padding: 3rem 0;

                h1 {
                    font-size: 2rem;
                }

                .hero-description {
                    font-size: 1rem;
                }

                .features-list {
                    .feature-item {
                        .check-icon {
                            width: 1.25rem;
                            height: 1.25rem;
                            margin-right: 0.75rem;
                        }

                        span {
                            font-size: 0.95rem;
                        }
                    }
                }

                .hero-right {
                    .event-card {
                        padding: 1.25rem;
                        margin: 0 auto;
                        max-width: 100%;
                        width: 95%;

                        .date-badge,
                        .time-badge {
                            padding: 0.6rem 0.8rem;
                            font-size: 0.8rem;
                            width: 100%;
                            text-align: center;
                            margin-right: 0;
                            margin-bottom: 0.5rem;
                        }

                        .price-container {
                            .price-tag {
                                .current {
                                    font-size: 2rem;
                                }

                                .original {
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }
            }
        }

        .instructor {
            padding: 3rem 0;

            .section-title {
                margin-bottom: 2rem;
            }

            .instructor-card {
                padding: 2rem 1rem;

                .instructor-title {
                    font-size: 1.1rem;
                    margin: 1.5rem 0;
                }

                .stats {
                    gap: 1.5rem !important;

                    .stat {
                        .number {
                            font-size: 2rem;
                        }

                        .label {
                            font-size: 0.9rem;
                        }
                    }
                }
            }
        }

        .what-youll-learn {
            padding: 3rem 0;

            .day-card {
                padding: 1.5rem;

                .day-header {
                    h3 {
                        font-size: 1.3rem;
                    }
                }
            }
        }

        .testimonials {
            padding: 3rem 0;
        }

        .register {
            padding: 2rem 0;

            .register-container {
                padding: 1.5rem;

                .section-title {
                    font-size: 1.75rem !important;
                    text-align: center;
                }

                .section-badge {
                    display: inline-block;
                    margin: 0 auto 1rem;
                    text-align: center;
                }

                .highlight {
                    font-size: 1rem;
                    text-align: center;
                    margin-bottom: 1.5rem;
                }

                .price-container {
                    justify-content: center;
                    flex-wrap: wrap;

                    .price-tag {
                        text-align: center;
                    }

                    .discount {
                        font-size: 1rem;
                        padding: 0.4rem 0.8rem;
                    }
                }

                .timer-container {
                    .timer-label {
                        text-align: center;
                    }

                    .countdown {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 0.75rem;

                        .time-block {
                            min-width: 3.5rem;
                            padding: 0.5rem;

                            .number {
                                font-size: 1.5rem;
                            }

                            .unit {
                                font-size: 0.7rem;
                            }
                        }
                    }
                }

                .col-lg-6 {
                    margin-bottom: 2rem;
                    width: 100% !important;
                    flex: 0 0 100% !important;
                    max-width: 100% !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }

                .form-container {
                    padding: 1.5rem 0.5rem;
                    margin-top: 0.5rem;
                    width: 100%;
                    max-width: 100%;
                    border-radius: 0.5rem;
                }
            }
        }

        .faq {
            padding: 3rem 0;

            .faq-question {
                h3 {
                    font-size: 1rem;
                }
            }
        }
    }

    @media (max-width: 576px) {
        .instructor {
            .stats {
                flex-direction: column;
                gap: 1.5rem !important;

                .stat {
                    text-align: center;
                }
            }
        }

        .day-card {
            min-width: unset !important;
        }

        .register {
            .register-container {
                padding: 1.2rem 0.5rem;
                width: 100%;
                max-width: 100%;

                .section-title {
                    font-size: 1.5rem;
                }

                .price-container {
                    .price-tag {
                        .current-price {
                            font-size: 2.5rem;
                        }

                        .original-price {
                            font-size: 1.1rem;
                        }
                    }
                }

                .timer-container {
                    .countdown {
                        gap: 0.5rem;

                        .time-block {
                            min-width: 3rem;
                            padding: 0.4rem;
                        }
                    }
                }

                .form-container {
                    padding: 2rem 1rem;
                    margin: 0;
                    width: 100%;
                    max-width: 100%;
                    border-radius: 0.5rem;
                }

                .form-group {
                    margin-bottom: 2rem;
                }

                .form-control {
                    padding: 1.2rem 1rem;
                    font-size: 1rem;
                    width: 100% !important;
                    max-width: 100% !important;
                    box-sizing: border-box;
                    height: auto;
                    width: 100%;
                    box-sizing: border-box;
                }

                label {
                    font-size: 1rem;
                    margin: 0 0 0.8rem;
                }

                .btn-block {
                    font-size: 1rem;
                    padding: 1rem;
                    margin-top: 1rem;
                    width: 100%;
                    box-sizing: border-box;
                }
            }
        }
    }

    @media (max-width: 380px) {
        .section-title {
            font-size: 1.8rem;
            line-height: 1.3;
            margin: 0 auto 1rem;
        }

        .section-subtitle {
            font-size: 0.9rem;
            margin: 0 auto 1.5rem;
        }

        .day-card {
            width: 98%;
            padding: 1.2rem;

            .day-header {
                h3 {
                    font-size: 1.3rem;
                }
            }

            ul.features-list li {
                font-size: 0.9rem;
                padding: 0.5rem 0;
            }
        }

        .instructor-card {
            padding: 1.5rem 1rem;
            width: 98%;
            margin: 0 auto;
        }

        .testimonial-card {
            padding: 1.2rem;
        }

        .faq-container {
            padding: 0 0.5rem;

            .faq-item {
                padding: 1rem;
                margin-bottom: 1rem;

                .faq-question {
                    font-size: 1rem;
                }

                .faq-answer {
                    font-size: 0.9rem;
                    padding: 0.8rem 0;
                }
            }
        }

        .register {
            .register-container {
                padding: 1.5rem;

                .timer-container .countdown .time-block {
                    min-width: 2.5rem;
                    padding: 0.3rem;

                    .number {
                        font-size: 1.2rem;
                    }

                    .unit {
                        font-size: 0.65rem;
                    }
                }

                .form-container {
                    padding: 1.8rem 0.8rem;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 100%;
                    box-sizing: border-box;
                }

                .form-group {
                    margin: 0 0 1.8rem;
                }
            }
        }
    }
`;

export default CSSMasterclass;
export async function getStaticProps() {
    return {
        props: {
            config: {
                type: "default",
            },
        },
    };
}
