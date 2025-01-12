import { media } from "config/device";
import Image from "next/image";
import styled from "styled-components";

const Banner = ({ title, overlay = true, image, description, height = "30vh" }) => {
    return (
        <Mybanner overlay={overlay} className="banner">
            <div className="container">
                {image && <Image priority {...image} layout="fill" />}
                {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
                {description && <p>{description}</p>}
            </div>
        </Mybanner>
    );
};

export default Banner;
const Mybanner = styled.div`
    position: relative;
    padding: 1rem;
    min-height: 30vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #ccc;
    background: rgb(10 31 72);
    img {
        pointer-events: none;
    }
    h1 {
        position: relative;
        text-align: center;
        z-index: 2;
        color: azure;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(30px, 4vw, 70px) !important;
        text-shadow: 0px 1px 1px #000;
        & + * {
            z-index: 2;
            position: relative;
        }
    }
    p {
        color: #fff;
        text-align: center;
        width: 60%;
        margin: auto;
        ${media.sm} {
            width: 80%;
        }
    }

    ${({ overlay }) =>
        overlay &&
        ` &:before {
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
    }`}
`;
