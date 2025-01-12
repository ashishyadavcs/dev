import { media } from "config/device";
import { shadow } from "config/color";
import styled from "styled-components";
import { clickToCopy } from "utils/common";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { bios } from "public/data/instagrambio";
import Banner from "@/components/web/banner";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
    ssr: true,
});

const Page = () => {
    const [bio, setbio] = useState(`🌟 VIP Lifestyle Influencer 🌟
✨ Curator of Exclusivity | Luxury Enthusiast ✨
📍 [Your Location]
🔗 Founder, [Your Company/Brand]
📸 Creating Moments, Making Memories
🚀 Elevate Your Lifestyle with My Journey
💌 DM for Exclusive Collaborations
    `);
    useEffect(() => {
        document.querySelector(".bio-input").focus();
    }, [bio]);

    const setEmoji = e => {
        setbio(v => v + e.emoji);
    };

    return (
        <Vipbio>
            <Banner
                description={`   If you are looking for an Instagram vip bio to edit your bio. Then friends you
                    are in the right place here I will provide a premium Instagram vip bio with
                    which you can set your Instagram profile to look like waw.
              `}
                overlay={false}
                title={"Instagram VIP Bio generator"}
            />
            <div className="container py-4">
                <NextSeo
                    title="Best 540+ Instagram Bio For Boys (2024) | Attitude & Stylish Bio 🔥"
                    description=" A VIP bio on Instagram is a personal or professional description in the bio section
                of an Instagram profile that conveys a sense of exclusivity, importance, or
                uniqueness."
                />

                <div className="generator">
                    <span className="label">edit your instagram bio</span>
                    <div className="input">
                        <textarea
                            placeholder="Write your instagram bio..."
                            className="bio-input"
                            value={bio}
                            onChange={e => {
                                setbio(e.target.value);
                            }}
                        ></textarea>
                        <button
                            className="copy"
                            onClick={e => {
                                clickToCopy(e, e.currentTarget.previousElementSibling.innerText);
                            }}
                        >
                            copy
                        </button>
                    </div>
                    <EmojiPicker
                        lazyLoadEmojis
                        emojiStyle="facebook"
                        onEmojiClick={e => setEmoji(e)}
                        className="picker"
                    />
                </div>

                <div className="bios">
                    {bios.map(bio => (
                        <div className="bio">
                            <div className="">{bio.template}</div>
                            <div className="action">
                                <button onClick={e => setbio(bio.template)}>edit</button>
                                <button
                                    onClick={e =>
                                        clickToCopy(
                                            e,
                                            e.currentTarget.parentElement.previousElementSibling
                                                .innerText
                                        )
                                    }
                                >
                                    copy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Vipbio>
    );
};
export default Page;
const Vipbio = styled.div`
    background: #f1f1f1;
    .banner {
        background: linear-gradient(to right, #f33df8, #6060ff);

        ${media.sm} {
            p {
                display: none;
            }
        }
    }
    .image {
        border-radius: 8px;
        overflow: hidden;
    }
    body:has(.bio) {
        background: red;
    }

    --column: 3;

    /* .gradient-box:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: linear-gradient(to right, red, orange);
    } */

    .bios {
        margin: 10px 0 40px;
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(var(--column), 1fr);
        ${media.sm} {
            grid-template-columns: auto;
        }
    }
    .bio {
        width: minmax(330px, calc(100% / var(--column)));
        max-width: minmax(330px, calc(100% / var(--column)));
        overflow: hidden;
        padding: 18px;
        background: #fff;
        box-shadow: ${shadow.card};
        position: relative;
        line-height: 1.6;
        .action {
            margin: 20px 0 0;
            display: flex;
            gap: 20px;
            justify-content: center;
            button {
                background: #ff01f3;
                color: #fff;
                padding: 10px 20px;
                border-radius: 10px 10px 0;
            }
        }
    }
    .generator {
        ${media.xs} {
            min-height: 650px;
        }
        position: relative;
        width: 100%;
        margin: auto;
        box-shadow: ${shadow.card};
        display: flex;
        .copy {
            background: #ff01f3;
            color: #fff;
            padding: 10px 20px;
            border-radius: 10px 10px 0;
            position: absolute;
            left: 10px;
            bottom: 10px;
            ${media.sm} {
                border-radius: 0;
                left: 0;
                width: 100%;
            }
        }
        ${media.sm} {
            flex-direction: column;
        }
        margin: 50px 0;
        .img {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .label {
            position: absolute;
            bottom: 100%;
            left: 0;
            color: #fff;
            background: linear-gradient(to left, #fa5313, #fd00ff);
            padding: 5px;
            font-size: 14px;
            border-radius: 10px 10px 0 0;
        }
        .input {
            position: relative;
            width: 70%;
            textarea {
                width: 100%;
                height: calc(100% - 60px);
                ${media.sm} {
                    height: 300px;
                    padding-bottom: 70px;
                }
                resize: none;
                outline: none;
                padding: 20px;
                border: 2px solid #ddd;
                font-size: 18px;
                &::placeholder {
                    font-style: italic;
                }
            }

            ${media.sm} {
                width: 100%;
                min-height: 311px;
            }
        }
        aside {
            flex: 1;
            border-radius: 0;
            max-width: 100%;
            z-index: 1;
            ${media.sm} {
                max-height: 405px;
            }
        }
    }
`;
