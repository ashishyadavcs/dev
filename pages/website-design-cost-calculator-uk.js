import Ashish from "@/components/ashish";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPoundSign } from "react-icons/fa";
import styled from "styled-components";

const Page = () => {
    const [inputs, setinputs] = useState({
        ppc: 47.3,
        pages: 1,
    });
    const perc = [...Array(10)];
    return (
        <Pages className="container my-4">
            <NextSeo title="website design cost calculator uk | calculate website cost online 🔥" />
            <div className="row">
                <div className="col-md-4 save">
                    <form onSubmit={e => e.preventDefault()}>
                        <label>
                            <span>Pages Required</span>
                            <select
                                onChange={e => {
                                    setinputs(p => ({ ...p, pages: e.target.value }));
                                }}
                                value={inputs.pages}
                            >
                                {perc.map((p, i) => (
                                    <option value={i + 1}>{`${i + 1}`}</option>
                                ))}
                            </select>
                        </label>
                        <label className="price">
                            <FaPoundSign />
                            <span>Price per page</span>
                            <input
                                value={inputs.ppc}
                                onChange={e => {
                                    setinputs(p => ({ ...p, ppc: e.target.value }));
                                }}
                                type="number"
                            />
                        </label>
                        <label className="price">
                            <span> Total cost</span>
                            <FaPoundSign />
                            <input value={(inputs.pages * inputs.ppc).toFixed(2)} type="number" />
                        </label>
                        <button>automatic calculated</button>
                    </form>
                    <Link href="/ashish-yadav" className="theme-btn">
                        contact for website development 👨‍💻
                    </Link>
                    <div className="webd">
                        <Image
                            objectPosition={"left"}
                            objectFit="cover"
                            src="/images/company/github-profile.png"
                            layout="fill"
                            alt="website design cost calculator uk"
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <h1>💻 Website Design Cost Calculator UK 💷</h1>
                    <p>
                        🔥 Website design costs are like a box of chocolates; you never know what
                        you're going to get. The complexity of your project, desired features,
                        customizations, and the skills of your designer all play a role in the grand
                        cost symphony.
                    </p>
                    <ol>
                        <li>
                            <p>
                                <strong>Project Scope:</strong>
                            </p>
                            <ul>
                                <li>
                                    Size matters! A simple, few-paged website costs less than a
                                    sprawling e-commerce extravaganza.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Design Complexity:</strong>
                            </p>
                            <ul>
                                <li>
                                    Is your website a Picasso or a delightful doodle? Custom designs
                                    with unique graphics might break the piggy bank more than a
                                    template-based affair.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Functionality and Features:</strong>
                            </p>
                            <ul>
                                <li>
                                    The more bells and whistles you want (think e-commerce magic),
                                    the more coins you'll need in your digital piggy bank.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Responsive Design:</strong>
                            </p>
                            <ul>
                                <li>
                                    A website that dances on every screen size? That's called
                                    responsive design, and it's cool but might add a bit more
                                    cha-ching to the bill.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Content Creation:</strong>
                            </p>
                            <ul>
                                <li>
                                    Content is king, they say. And good content comes at a price,
                                    especially if you want pros handling your words and images.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>SEO Integration:</strong>
                            </p>
                            <ul>
                                <li>
                                    Wanna be the king of Google? SEO integration during design comes
                                    at an additional cost - the price of playing in the big leagues.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h2>How the Website Design Cost Calculator UK Works:</h2>
                    <ol>
                        <li>
                            <p>
                                <strong>Selecting Project Type:</strong>
                            </p>
                            <ul>
                                <li>
                                    Start by choosing your adventure - business website, portfolio,
                                    or maybe an e-commerce bonanza.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Customization Options:</strong>
                            </p>
                            <ul>
                                <li>
                                    Get your creative juices flowing! The calculator lets you pick
                                    features, design flair, and any extra goodies you fancy.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Project Details:</strong>
                            </p>
                            <ul>
                                <li>
                                    Spill the beans! Enter details like the number of pages, desired
                                    functionalities, and any special requests you have.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                <strong>Estimation:</strong>
                            </p>
                            <ul>
                                <li>
                                    Drumroll, please! The calculator works its magic and poof! A
                                    cost estimate pops up, giving you a sneak peek into your digital
                                    future.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </Pages>
    );
};

export default Page;
const Pages = styled.div`
    ul,
    ol {
        padding-left: 20px;
        margin-bottom: 20px;
    }
    strong {
        border-bottom: 3px solid teal;
        width: max-content;
        padding-bottom: 5px;
    }
    h2 {
        margin-top: 30px;
    }
    .result {
        opacity: 0.2;
        transition: all 0.3s;
        width: 300px;
        margin: 30px auto;
        color: #047840;
        font-size: 18px;
        line-height: 2;
    }
    .result.active {
        opacity: 1;
    }
    form {
        width: max-content;
        background: #fff;
        z-index: 2;
        padding: 5px 0 2rem;
    }
    .save {
        position: sticky;
        top: 60px;
        height: max-content;
    }
    button {
        border-radius: 10px;
        display: block;
        width: 92%;
        padding: 10px;
        text-align: center;
        background: linear-gradient(to left, #96e9c6, teal);
        color: #fff;
    }
    label {
        display: flex;
        gap: 10px;
        align-items: center;
        background: #f1f1f17d;
        margin: 8px 0;
        width: 300px;
        justify-content: space-between;
        border: 1px solid #ddd;
        border-collapse: collapse;
        &.price {
            margin-right: 30px;
            padding-right: 30px;
            position: relative;
            svg {
                position: absolute;
                right: 5px;
                margin: 5px;
            }
        }
        span {
            padding: 10px;
            min-width: max-content;
        }
        input,
        select {
            padding: 10px;
            outline: none;
            font-size: 18px;
            border: 1px solid #ddd;
            margin: 0 !important;
            /* max-width: 80px; */
        }
        select {
            cursor: pointer;
        }
    }
    .content {
        h1 {
            font-size: 20px !important;
            margin-bottom: 30px;
        }
        h2 {
            margin-top: 20px;
            font-size: 19px !important;
        }
        ul {
            margin-bottom: 20px;
        }
    }
    .webd {
        position: relative;
        height: 400px;
        width: 300px;
        margin: 1rem 0;
        border-radius: 8px;
        overflow: hidden;
    }
`;
