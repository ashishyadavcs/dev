import { media } from "config/device";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const Page = ({ data }) => {
    return (
        <>
            <NextSeo title="Ashish Yadav | Software Engineer at Bold Technology" description="I am Ashish Yadav, a seasoned frontend developer with a dynamic and enriching journey spanning three years in the ever-evolving landscape of web development."/>
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
                        <h1 className="title">Ashish Yadav</h1>
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

                    </div>
                </div>
            </Pagestyle>
        </>
    );
};
export async function getServerSideProps({ req }) {
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
h2{font-size:20px!important;}
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
        gap: 60px;
        max-width: 100%;
        .dp {
            position: relative;
            overflow: hidden;
            width: 400px;
            height: 400px;
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
        .description{font-weight:600}
        .college{margin-top:40px}
    }
    .skills {
        margin-top: 20px;
       ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        li {
            padding: 10px 20px;
            background:blue;
            color: #fff;
            min-width: max-content;
            border-radius: 8px;
        }
       }
    }
`;
