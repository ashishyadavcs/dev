import { media } from "config/device";
import { NextSeo } from "next-seo";
import Image from "next/image";
import {data} from "public/data/ashish";
import { contact } from "public/data/contact";
import React from "react";

import {
    FaExternalLinkAlt,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";

const Page = () => {
    return (
        <>
            <NextSeo
                title="Ashish Yadav 👨‍💻 | Software Engineer at Bold Technology"
                description="I am Ashish Yadav, a seasoned software engineer with a dynamic and enriching journey spanning three years in the ever-evolving landscape of web development."
            />
            <Pagestyle className="container my-4">
                <div className="banner">
                    <span className="dp">
                        <Image
                            objectFit="cover"
                            layout="fill"
                            objectPosition="center"
                            priority
                            src="/github-profile.jpg"
                            height="400"
                            width="400"
                            alt="ashish yadav"
                        />
                    </span>
                    <div className="info">
                        <h1 className="title">
                            Ashish Yadav{" "}
                            <FaExternalLinkAlt
                                className="pointer"
                                onClick={e => window.open(`${data.social.linkedin}`)}
                                size={18}
                                color="blue"
                            />
                        </h1>
                        <span
                            className="description"
                            dangerouslySetInnerHTML={{ __html: data.interoduction.short }}
                        ></span>

                        <div className="skills">
                            <h2>Technical Skills</h2>
                            <ul>
                                {data.skills.map(skill => {
                                    return <li>{skill}</li>;
                                })}
                            </ul>
                        </div>
                       
                        <h2 className="d-flex justify-content-between">Experience <span>({data.totalexp}years)</span></h2>
                        <ul className="exp">
                            {[...data.exp].map(exp => (
                                <li className="exp">
                                    <div className="company">
                                        <a href={exp.company.link}>{exp.company.name}</a>
                                        <small>{exp.duration}</small>
                                    </div>
                                    <strong>{exp.profile}</strong>
                                    <ul className="desc">
                                        {exp.description.map(desc=><li>{desc}</li>)}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <h2>Projects</h2>
                        <ul className="projects">
                            {data.projects.map(p=><li>
                                <a href={p.link} referrerPolicy="noreferrer" target="_blank">{p.text}</a>
                            </li>)}
                        </ul>
                        <div className="college">
                            <h2>Education</h2>
                            <p className="duration">{data.education.degree} <span>2016-2020</span></p>
                            <p>{data.education.college}</p>
                        </div>
                        
                       
                        <a className="theme-btn cv mr-2" href="/ashishcv.pdf">
                            download resume
                        </a>
                        <a className="theme-btn connect" href={`tel:${contact.mobile}`}>
                            contact <FaPhone />
                        </a>
                        <ul className="social">
                            <strong>social profiles</strong>
                            <li>
                                <a
                                    href="https://www.facebook.com/ashish.15101997"
                                    aria-label="instagram"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="instagram"
                                >
                                    <FaFacebook color="blue" size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    aria-label="instagram"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={data.social.instagram}
                                    className="instagram"
                                    color="pink"
                                >
                                    <FaInstagram color="#f402bf" size={20} />
                                </a>
                            </li>

                            <li>
                                <a
                                    aria-label="linkedin"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={data.social.linkedin}
                                    className="linkedin"
                                >
                                    <FaLinkedinIn color="blue" size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    aria-label="github"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={data.social.github}
                                    className="linkedin"
                                >
                                    <FaGithub size={20} />
                                </a>
                            </li>
                            <li>
                                <a
                                    title="youtube"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={contact.youtube}
                                    className="linkedin"
                                    aria-label="youtube"
                                >
                                    <FaYoutube color="red" size={25} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Pagestyle>
        </>
    );
};

export default Page;
const Pagestyle = styled.div`
    .cv {
        margin-top: 20px;
    }
    .connect {
        background: green;
        margin-top: 30px;
        display: inline-flex;
        max-width: 90%;
        align-items: center;
        gap: 10px;
    }
    h2 {
        font-size: 20px !important;
        width: max-content;
        margin:40px 0 10px;
       
    }
    .projects{
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        gap: 10px;
        a{
            display: inline-block;
            padding: 5px;
            text-transform: capitalize;
            border-radius: 4px;
            color: teal;
            box-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }
    }
    --degree: 120deg;
    @keyframes rotateBorder {
        0% {
            --degree: 0deg;
        }
        100% {
            --degree: 120deg;
        }
    }
    .banner {
        display: flex;
        gap: 40px;
        max-width: 100%;
        .dp {
            position: relative;
            ${media.minsm} {
                position: sticky;
                top: 80px;
            }

            overflow: hidden;
            width: 400px;
            height: 77vh;
            max-width: 100%;
            background: linear-gradient(var(--degree), red, violet);
            padding: 5px;
            border-radius: 16px;
            transition: all 0.6s;
            animation: rotateBorder 1s linear infinite alternate;
            ${media.sm} {
                height: 40vh;
            }
        }
        ${media.sm} {
            flex-wrap: wrap;
        }
    }
    .exp{
        
        list-style: none;
        a{color:#000;
        text-decoration:dotted;
        font-weight:600;
        color: blue;
        }
        >li{
            margin-bottom: 20px;
        }
        .company{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          
        }
        .desc{
            padding-left: 20px;
            list-style:square;
          }
    }
    .info {
        ${media.minsm} {
            width: calc(100% - 400px);
        }
        .services {
            
            list-style: none;
            display: flex;
            flex-wrap: wrap;
          
            gap:10px;
            li{
                width: max-content;
                padding: 6px 12px;
                background: #f2f2ff;
                border-radius: 4px;
                box-shadow: 0 1px 2px rgba(0,0,0,0.4);
            }
        }
        .description {
            ${media.sm} {
                font-size: 14px;
            }
        }
        .college {
            margin-top: 40px;
            .duration{
                display: flex;
            justify-content: space-between;
            }
        }
        .social {
            display: flex;
            margin: 20px 0 0;
            list-style: none;
            gap: 10px;
        }
    }
    .skills {
        margin-top: 20px;
        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            li {
                padding: 6px 12px;
                background: #f2f2ff;
                box-shadow: 0 1px 2px rgba(0,0,0,0.4);
                font-weight: bold;
                font-size: 14px;
                min-width: max-content;
                border-radius: 4px;
                text-transform: capitalize;
            }
        }
    }
`;
