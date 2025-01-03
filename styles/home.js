import { media } from "config/device";
import styled from "styled-components";
const Styled = {
    Banner: styled.div`
        background: linear-gradient(rgb(247 239 239), rgb(217 240 237));
        min-height: 100vh;
        padding: 80px 0;
        position: relative;
        display: flex;
        align-items: center;
        h1 {
            margin: 20px 0;
        }
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
            100% {
                left: 100%;
                width: 60%;
            }
            97% {
                width: 100%;
            }
        }

        .img {
            z-index: 2;
            animation: imgleft 4s linear infinite forwards;
        }
        .hiw {
            --color: blue;
            li {
                transition: all 0.6s;
                position: relative;
                overflow: hidden;
                align-items: flex-start;
                padding-bottom: 10px;
                margin-bottom: 10px;
                width: max-content;
                cursor: pointer;
                &:hover {
                    &::before {
                        animation-play-state: paused;
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
                        height: 2px;
                        width: 0%;
                        position: absolute;
                        top: 90%;
                        left: 6%;
                        background: var(--color);
                        display: inline-block;
                        transition: all 1s;
                        animation: hiw 2s linear;
                    }
                }
            }
        }
        a {
            margin: 20px 0;
        }
    `,
    Landing: styled.div`
        ul {
            padding-left: 15px;
        }
        padding: 2rem 0;

        ${media.xs} {
            [class*="row"]:nth-child(3) {
                flex-direction: column-reverse;
            }
        }
        h2 {
            font-size: clamp(19px, 2vw, 30px) !important;
            text-transform: capitalize;
        }
    `,
    Cta: styled.a`
        display: inline-block;
        padding: 15px 30px;
        background: #ff0707;
        color: aliceblue;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 40px;
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
