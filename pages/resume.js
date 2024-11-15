import { media } from "config/device";
import Image from "next/image";
import { contact } from "public/data/contact";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";
import Printbtn from "@/components/web/printbtnt";

const Resume = () => {
    const [data, setdata] = useState({
        info: {
            name: "Ashish Kumar",
            profile: "Frontend developer",
            mobile: contact.mobile,
            address: "Noida",
            email: contact.email,
            image: "/github-profile.jpg",
        },
        social: {
            linkedin: "https://linkedin.com/in/ashishyadavcs",
            github: "https://github.com/ashish221306",
            website: "https://www.frontendzone.com",
        },
        summary: `Passionate web developer with
        around 3 years of experience
        working in Product based
        organizations & having expertise
        in frontend development.
        `,
        education: [
            {
                course: "BTech - CSE",
                college: "Feroze Gandhi Institute of Engineering & Technology",
                time: "2016-2020",
                score: "75%",
            },
        ],
        experience: [
            {
                company: "BOLD Technology",
                profile: "Associate Software Engineer - UI",
                period: "oct 2022 - Present",
                address: "Noida",
            },
            {
                company: "Tutorbin",
                profile: "Frontend Developer",
                period: "March 2021 - oct 2022",
                address: "Gurgaon",
            },
        ],
        skills: {
            tech: [
                "HTML",
                "CSS",
                "javascript",
                "React js",
                "Next js",
                "SEO",
                "Tailwind CSS",
                "Styled Component",
                "Node.js",
                "Express.js",
                "Mongodb",
            ],
        },
    });
    function convertHTMLtoPDF() {
        const { jsPDF } = window.jspdf;
        if (typeof jsPDF == "undefined") return;

        let doc = new jsPDF("1", "mm", [window.innerHeight * 2, window.innerWidth * 2]);
        let pdfjs = document.querySelector("#divID");

        doc.html(pdfjs, {
            callback: function (doc) {
                doc.save("newpdf.pdf");
            },
            x: 12,
            y: 12,
        });
    }
    const iconsize = 18;
    return (
        <>
            <Resumeui className="container" id="divID">
                <div className="top">
                    <div className="info">
                        <Image
                            className="img"
                            src={data.info.image}
                            alt="Ashish frontend developer cv  resume"
                            height={100}
                            width={100}
                        />

                        <h1>
                            {data.info.name}
                            <span>{data.info.profile}</span>
                        </h1>
                    </div>
                </div>
                <div className="left">
                    <h2>Summary</h2>
                    <p>{data.summary}</p>
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <IoCall size={iconsize} />
                            {data.info.mobile}
                        </li>
                        <li>
                            <MdEmail size={iconsize} />
                            {data.info.email}
                        </li>
                        <li>
                            <BsGithub size={iconsize} />
                            {data.social.github}
                        </li>
                        <li>
                            <FaLinkedin size={iconsize} />
                            <a href={data.social.linkedin}>{data.social.linkedin}</a>
                        </li>
                        <li>
                            <BiWorld size={iconsize} />
                            {data.social.website}
                        </li>
                    </ul>
                    <div className="skills">
                        <h2>Technical skills</h2>
                        <ul>
                            {data.skills.tech.map(s => (
                                <li>{s}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="education">
                        <h2>Education</h2>
                        <ul>
                            {data.education.map(ed => (
                                <li>
                                    {Object.keys(ed).map(el => (
                                        <div>{ed[el]}</div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="exp">
                        <h2>experiences</h2>
                        <ul>
                            {data.experience.map(exp => (
                                <li>
                                    {Object.keys(exp).map(el => (
                                        <div>{exp[el]}</div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Resumeui>
            <div className="container">
                <Printbtn
                    style={{
                        color: "black",
                        padding: "10px",
                    }}
                    filename="myresume"
                    title="download"
                    classname="download"
                />
            </div>
        </>
    );
};

export default Resume;
const BTN = styled.button`
    padding: 10px;
    position: fixed;
    z-index: 10;
    top: 65px;
    right: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
const Resumeui = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    ul {
        list-style: none;
    }
    > div {
        border: 1px solid #f1f1f1;
        padding: 2rem;
    }
    .info {
        display: flex;
        gap: 20px;
        align-items: center;
        h1 {
            font-size: clamp(24px, 4vw, 60px) !important;
            span {
                display: block;
                font-size: clamp(16px, 2vw, 30px);
                opacity: 0.7;
            }
        }
    }
    h2 {
        background: #555;
        color: #fff;
        padding: 10px;
        margin: 20px 0;
    }
    .top {
        grid-area: 1/1 / span 2 / span 2;
    }
    .skills ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        gap: 10px;
        li {
            padding: 2px 10px;
            background: #ddd;
        }
    }
    .img {
        border-radius: 50%;
        object-fit: cover;
    }
    .left {
        li {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
    .right {
        li {
            margin-bottom: 10px;
        }
    }
    ${media.sm} {
        display: block;
        > div {
            padding: 1rem;
        }
    }
`;
