import { media } from "config/device";
import { NextSeo } from "next-seo";
import Image from "next/image";
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

const Page = ({ data }) => {
    return (
        <>
            <NextSeo
                title="Ashish Yadav | Software Engineer at Bold Technology"
                description="I am Ashish Yadav, a seasoned software engineer with a dynamic and enriching journey spanning three years in the ever-evolving landscape of web development."
            />
            <Pagestyle className="container my-4">
                <div className="banner">
                    <span className="dp">
                        <Image
                            objectFit="cover"
                            layout="fill"
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
                        <span className="description">
                            Software Engineer | Blogger | Content Creator
                        </span>

                        <div className="skills">
                            <h2>Technical Skills</h2>
                            <ul>
                                {data.skills.map(skill => {
                                    return <li>{skill}</li>;
                                })}
                            </ul>
                        </div>
                        <div className="college">
                            <h2>{data.education.degree} -2020</h2>
                            <p>{data.education.college}</p>
                        </div>
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
                        <h2 className="mt-3">services</h2>
                        <ul className="services">
                            <li>SEO Optimization</li>
                            <li>Website performance <strong style={{color:"green"}}>90+</strong></li>
                            <li>Website design and development</li>
                            <li>Wordpress website</li>
                        </ul>
                        <a className="theme-btn connect" href={`tel:${contact.mobile}`}>
                            contact for your project / website <FaPhone />
                        </a>
                    </div>
                </div>
            </Pagestyle>
        </>
    );
};
export async function getStaticProps({ req }) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/data/ashish.json`).then(res =>
        res.json()
    );
    return {
        props: {
            data,
        },
    };
}
export default Page;
const Pagestyle = styled.div`
    padding: 0 0 50px;
    .connect {
        background: linear-gradient(to left, teal, #126e9a);
        margin-top: 30px;
        display: inline-flex;
        max-width: 90%;
        align-items: center;
        gap: 10px;
    }
    h2 {
        font-size: 20px !important;
        width: max-content;
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
            height: 84vh;
            max-width: 100%;
            background: linear-gradient(var(--degree), red, violet);
            padding: 5px;
            border-radius: 16px;
            transition: all 0.6s;
            animation: rotateBorder 1s linear infinite alternate;
        }
        ${media.sm} {
            flex-wrap: wrap;
        }
    }
    .info {
        ${media.minsm} {
            width: calc(100% - 400px);
        }
        .services {
            padding-left: 15px;
        }
        .description {
            font-weight: 600;
            ${media.sm} {
                font-size: 14px;
            }
        }
        .college {
            margin-top: 40px;
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
                border: 2px solid teal;
                font-weight: bold;
                font-size: 14px;
                min-width: max-content;
                border-radius: 50px;
            }
        }
    }
`;
