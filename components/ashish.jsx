import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const Ashish = ({ style }) => {
    const techs = [
        "html",
        "css",
        "javascript",
        "react js",
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
            <div title="click to see on linkedin" className="hero d-flex align-items-center mb-4">
                <Image src="/ashish-lkd.jpg" alt="" height={90} width={90}></Image>
                <strong className="ml-4">
                    <a
                        itemProp="url"
                        target="_blank"
                        rel="noreferrer"
                        href="https://linkedin.com/in/ashishfgiet"
                    >
                        <span itemProp="name">Ashish Yadav</span>
                    </a>
                    <br></br>
                    <small>Software Engineer</small>
                </strong>
            </div>
            <p>
                Ashish Yadav is a passionate software engineer and technology enthusiast having{" "}
                {new Date().getFullYear() - 2020} years of experience in web development with a deep
                interest in the ever-evolving world of technology. With a background in computer
                science and extensive experience in software development, Ashish brings a unique
                perspective to his writing in the tech blogosphere & love to learn and work on
                technologies
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
