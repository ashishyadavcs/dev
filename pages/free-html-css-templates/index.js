import { media } from "config/device";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Page = () => {
    const templates = [
        {
            url: "/demo/website-templates/hospital/index.html",
            zip: "/demo/website-templates/hospital.zip",
            image: "/demo/website-templates/hospital/img/hero.png",
        },
        {
            url: "/demo/website-templates/wedding/index.html",
            zip: "/demo/website-templates/wedding.zip",
            image: "/demo/website-templates/wedding/images/b1.jpg",
        },
        {
            url: "/portfolio/dark.html",
            zip: "/portfolio/dark.html",
            image: "/portfolio/portfolio.png",
        },
    ];
    return (
        <Pages className="container my-4">
            <h1 className="text-center">
                Grab Exclusive Free HTML & CSS Website Templates Now! 🔥
            </h1>
            <p className="text-center">
                Revolutionize Your Web Presence with Our Exclusive Free HTML & CSS Website Template!
                🌐✨ Elevate your site's aesthetics and functionality with a single click. This
                template isn't just free; it's a game-changer for your online identity. Download now
                and embark on a journey of limitless possibilities. Your dream website is just a
                click away! 💻🚀 #WebDev #FreeTemplate #HTMLCSSMagi
            </p>
            <NextSeo
                title="Grab Exclusive Free HTML & CSS Website Templates Now! 🔥"
                description="Dive into our vast collection of stunning, free website templates designed with HTML and CSS."
            />
            <div className="templates">
                {[...templates].map(el => (
                    <div className="card">
                        <div className="preview">
                            <Image
                                objectFit="cover"
                                objectPosition="top"
                                src={el.image || "/dev/website-service.jpg"}
                                layout="fill"
                                alt=""
                            />
                        </div>
                        <a href={el.url}>Demo</a>
                        <a href={el.zip} download>
                            source code
                        </a>
                    </div>
                ))}
            </div>

            <Link href="/ashish-yadav">
                <a className="theme-btn mx-auto mt-5"> contact for custom website design</a>
            </Link>
        </Pages>
    );
};

export default Page;
const Pages = styled.div`
    display: flex;
    flex-wrap: wrap;
    h1 {
        margin: 0 auto 20px;
    }
    .templates {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        margin: 20px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: 300px;
        max-width: 100%;
        height: 400px;
        .preview {
            position: relative;
            height: 80%;
            &:hover img {
                object-position: bottom;
            }
        }
        ${media.sm} {
            margin: 20px 0;
        }
        a {
            width: 100%;
            background: blue;
            color: #fff;
            text-align: center;
            padding: 10px 20px;
            border-radius: 4px;
        }
    }
`;
