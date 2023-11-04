import { media } from "config/device";
import styled from "styled-components";
const Styled = {
    Banner: styled.div`
        background: linear-gradient(rgb(247 239 239), rgb(217 240 237));
        height: 100vh;
        max-height: 700px;
        position: relative;
        display: flex;
        align-items: center;
        ${media.md} {
            &:before {
                content: "";
                height: 100%;
                width: 60%;
                transition: all 1s;
                position: absolute;
                right: 0;
                top: 0;
                clip-path: polygon(27% 0, 100% 0, 100% 100%, 0% 100%);
                background: linear-gradient(to left, red, #ffecb300);
            }
        }
        ${media.sm} {
            padding: 2rem 0;
            display: block;
            height: unset;
            max-height: unset;
            h1 br {
                display: none;
            }
        }
        ${media.xs} {
            padding: 2rem 0;
            display: block;
            height: unset;
            max-height: unset;
        }
        @keyframes hiw {
            97% {
                width: 100%;
            }
        }

        .img {
            animation: imgleft 4s linear infinite forwards;
        }
        .hiw {
            --color: blue;
            li {
                transition: all 0.3s;
                position: relative;
                overflow: hidden;
                width: max-content;
                padding-bottom: 10px;
                &:last-child {
                    visibility: hidden;
                    &.active {
                        visibility: visible;
                    }
                }
                display: none;
                &.active {
                    display: block;
                    svg {
                        fill: var(--color);
                    }
                    padding-left: 10px;
                    font-weight: bold;
                    color: var(--color);
                    &:before {
                        content: "";
                        height: 4px;
                        width: 0%;
                        position: absolute;
                        top: 95%;
                        left: 6%;
                        background: var(--color);
                        display: inline-block;
                        transition: all 1s;
                        animation: hiw 2s linear;
                    }
                }
            }
        }
    `,
    Landing: styled.div`
        padding: 2rem 0;
        background: rgb(245 252 255);
        ${media.xs} {
            [class*="row"]:nth-child(3) {
                flex-direction: column-reverse;
            }
        }
        h2 {
            font-size: clamp(26px, 3vw, 50px) !important;
            text-transform: capitalize;
        }
    `,
    Cta: styled.a`
        display: inline-block;
        padding: 15px 30px;
        background: red;
        color: aliceblue;
        border-radius: 8px;
        text-align: center;
        margin: 40px 0;
        font-weight: 600;
        width: 260px;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
            text-decoration: none;
            color: #fff;
            ${media.md} {
                transform: translateY(-6px) scale(1.1);
            }
        }

        ${media.xs} {
            width: 100%;
        }
    `,
};
export default Styled;
