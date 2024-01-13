import { media } from "config/device";
import { shadow } from "config/shadow";

import { NextSeo } from "next-seo";
import styled from "styled-components";
import { clickToCopy } from "utils/common";
import dynamic from 'next/dynamic';
import {useEffect, useState} from "react";
import Image from "next/image";

const EmojiPicker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);
const Page = () => {
    const [bio, setbio] = useState(`🌟 VIP Lifestyle Influencer 🌟
✨ Curator of Exclusivity | Luxury Enthusiast ✨
📍 [Your Location]
🔗 Founder, [Your Company/Brand]
📸 Creating Moments, Making Memories
🚀 Elevate Your Lifestyle with My Journey
💌 DM for Exclusive Collaborations
    `)
    useEffect(() => {
      document.querySelector('.bio-input').focus()
    }, [bio])
    
    const setEmoji=(e)=>{
        setbio(v=>v+e.emoji)
    }

    return (
        <Vipbio className="container py-4">
            <NextSeo
                title="103+ Instagram VIP Bio for Your Profile"
                description=" A VIP bio on Instagram is a personal or professional description in the bio section
                of an Instagram profile that conveys a sense of exclusivity, importance, or
                uniqueness."
            />
            <h1 className="text-center d-flex align-items-center">
                <img src="/images/insta.svg" />
                Instagram VIP Bio generator
               
            </h1>
            
            <div className="generator">
                <span className="label">your insta bio</span>
                <textarea placeholder="Write your instagram bio..." className="bio-input" value={bio} onChange={e=>setbio(e.target.value)}></textarea>
                <EmojiPicker emojiStyle="facebook" onEmojiClick={e=>setEmoji(e)} className="picker" />

            </div>
            <p className="sub-heading">
                If you are looking for an Instagram vip bio to edit your bio. Then friends you are
                in the right place here I will provide a premium Instagram vip bio with which you
                can set your Instagram profile to look like waw.
            </p>

            <div className="bios">
                {[...Array(10)].map(bio => (
                    <div className="bio gradient-box">
                        🌟 VIP Lifestyle Influencer 🌟<br></br>✨ Curator of Exclusivity | Luxury
                        Enthusiast ✨<br></br>
                        📍 [Your Location]<br></br>
                        🔗 Founder, [Your Company/Brand]<br></br>
                        📸 Creating Moments, Making Memories<br></br>
                        🚀 Elevate Your Lifestyle with My Journey<br></br>
                        💌 DM for Exclusive Collaborations
                        <button
                            onClick={e => clickToCopy(e, e.currentTarget.parentElement.innerText)}
                        >
                            copy
                        </button>
                    </div>
                ))}
            </div>
            <Image  layout="responsive" objectFit="contain" height={500} width={300} alt="instagram vip bio generator"  src="/images/instagram-vip-bio.jpg"/>
        </Vipbio>
    );
};

export default Page;
const Vipbio = styled.div`
    body:has(.bio) {
        background: red;
    }
    h1 {
        width: max-content;
        max-width: 100%;
        margin: 0 auto 40px;
        img{width:30px}
    }
    --column: 3;
    .gradient-box {
        display: flex;
        align-items: center;
        width: 90%;
        margin: auto;
        max-width: 22em;
        position: relative;
        padding: 30% 2em;
        box-sizing: border-box;
        color: #fff;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
        border: solid 5px transparent;
        border-radius: 1em;
    }
    .gradient-box:before {
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
    }

    .sub-heading {
        font-weight: 700;
        ${media.minsm} {
            width: 60%;
        }
        margin: 0 auto 50px;
        border: 2px solid red;
        border-radius: 8px;
        padding: 10px;
    }
    .bios {
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(var(--column), 1fr);
        ${media.sm} {
            grid-template-columns: auto;
        }
    }
    .bio {
        height: 300px;
        width: minmax(330px, calc(100% / var(--column)));
        max-width: minmax(330px, calc(100% / var(--column)));
        overflow: hidden;
        padding: 10px;
        box-shadow: ${shadow.card};
        position: relative;
        line-height: 1.6;
        padding-bottom: 80px;
        button {
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translateX(50%);
            padding: 10px 30px;
            border-radius: 10px 10px 0 0;
            background: #000;
            color: #fff;
        }
    }
    .generator{
        position: relative;
        width: 100%;
        margin: auto;
        box-shadow: ${shadow.card};
        display: flex;
        ${media.sm}{
            flex-direction: column;
        }
        margin: 50px 0;
        .img{
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .label{
            position: absolute;
            bottom: 100%;
            left: 0;
            color: #fff;
            background: linear-gradient(to left,#fa5313,#fd00ff);
            padding:5px;
            font-size: 10px;
            border-radius: 10px 10px 0 0;

        }
        textarea{
            ${media.minsm}{
                min-height: 500px;
            }
            width:70%;
            ${media.sm}{width:100%;
            min-height:250px}
            resize: none;
            outline: none;
            padding: 20px;
            border: 2px solid #ddd;
            font-size: 18px;
            &::placeholder{font-style:italic}
        }
        aside{
            border-radius: 0;
            max-width: 100%;
            z-index: 1;
        }
        
    }
`;
