import { media } from "config/device";
import { shadow } from "config/shadow";
import styled from "styled-components";
import { clickToCopy } from "utils/common";

const Page = () => {
    return (
        <Vipbio className="container py-4">
            <h1 className="text-center d-flex align-items-center">
                <img src="/images/insta.svg" />
                Instagram VIP Bio
                <img src="/images/insta.svg" />
            </h1>
            <p className="sub-heading">
                A VIP bio on Instagram is a personal or professional description in the bio section
                of an Instagram profile that conveys a sense of exclusivity, importance, or
                uniqueness.{" "}
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
        </Vipbio>
    );
};

export default Page;
const Vipbio = styled.div`
    body:has(.bio){
        background: red;
    }
    h1 {
        width: max-content;
        margin: 0 auto 40px;
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
`;
