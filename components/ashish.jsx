import { media } from "config/device";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { styled } from "styled-components";

const Ashish = ({ style }) => {
    const techs = [
        "HTML5",
        "CSS3",
        "javascript",
        "react js",
        "Redux.js",
        "wordpress",
        "Next js",
        "SEO",
        "express js ",
        "node js",
        "mongodb",
    ];
    return (
        <Profile
            className="ashish"
            style={style}
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
        >
            <div className="hero d-flex align-items-center mb-4">
                <Image src="/ashish-lkd.jpg" alt="" height={90} width={90}></Image>
                <strong>
                    <span>
                        <a
                            title="click to see on linkedin"
                            itemProp="url"
                            target="_blank"
                            rel="noreferrer"
                            href="https://linkedin.com/in/ashishyadavcs"
                        >
                            <span itemProp="name">Ashish Yadav</span>
                        </a>
                        <br></br>
                        <small>Software Engineer</small>
                    </span>
                    <a
                        target="_blank"
                        className="follow"
                        href="https://linkedin.com/in/ashishyadavcs"
                    >
                        <FaLinkedin size={18} color="#0a66c2" /> Follow
                    </a>
                </strong>
            </div>
            <p>
                Ashish Yadav is a passionate <strong>Software Engineer</strong> and technology
                enthusiast having <b>{new Date().getFullYear() - 2021} years</b> of experience in
                web development with a deep interest in the ever-evolving world of technology.
                <br></br>
                <br></br> With a background in computer science and extensive experience in{" "}
                <strong>software development</strong>, Ashish brings a unique perspective to his
                writing in the tech blogosphere & love to learn and work on technologies
            </p>
            <div className="techs">
                {techs.map((t, i) => (
                    <strong key={i}>{t}</strong>
                ))}
            </div>
        </Profile>
    );
};

export default Ashish;
const Profile = styled.div`
    max-width: 100%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 8px;
    z-index: 5;
    text-align: left;
    background: #fff;
    img {
        border-radius: 50%;
        object-fit: cover;
    }
    .follow {
        display: flex;
        gap: 10px;
        font-weight: 600;
        transition: all 0.3s;
        color: #3873b4;
        margin-top: 7px;
    }
    .hero {
        gap: 20px;
        strong {
            small {
                color: #666;
            }
            ${media.minsm} {
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
    }

    .techs {
        strong {
            color: #1b263b;
            margin: 5px;
            display: inline-block;
            border-radius: 30px;
            padding: 2px 10px;
            background: #f1f1f1;
        }
    }
`;
