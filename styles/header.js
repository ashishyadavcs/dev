import { media } from "config/device";
import styled from "styled-components";
export const Styled = {
    header: styled.header`
        text-transform: capitalize;
        background: #fff;
        position: sticky;
        z-index: 10;
        top: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

        a {
            text-decoration: none;
            color: #333;
            font-weight: 600;
        }
        ${media.sm} {
            min-height: 60px;
            .innermenu {
                overflow: hidden;
                background: #19e6ba;
            }
            &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 100vh;
                transition: all 0.4s;
                opacity: 0;
                background: rgba(0, 0, 0, 0.7);
                pointer-events: none;
            }
            ul {
                width: 100%;
                transition: all 0.3s ease-in-out;
                flex-direction: column;
                left: 0;
            }
            a {
                width: 100%;
                display: block;
                color: #fff;
            }
        }

        .menu {
            display: none;
            outline: none;
            border: none;
            width: 25px;
            background: transparent;
            span {
                height: 2.6px;
                width: 25px;
                transition: all 0.2s;
                display: block;
                margin-bottom: 3px;
                background: #000;
            }
            ${media.sm} {
                display: block;
            }
        }
        &.active {
            .menu {
                span {
                    &:nth-of-type(2) {
                        opacity: 0;
                        width: 0px;
                    }
                    &:first-child {
                        transform: rotate(45deg);
                        transform-origin: left;
                    }
                    &:last-child {
                        transform: translateY(7px) rotate(-45deg);
                        transform-origin: left;
                    }
                }
            }
            .mobilelinks {
                left: 0;
                z-index: 1;
            }

            &:after {
                ${media.sm} {
                    opacity: 1;
                }
            }
        }

        li {
            position: relative;
            padding-bottom: 1px;
            a {
                padding: 0.7rem 1rem;
            }
            ${media.sm} {
                width: 100%;
            }
            ${media.minsm} {
                padding: 18px 0;
            }
            &:before {
                content: "";
                width: 100%;
                position: absolute;
                background: linear-gradient(to right, #fff, transparent);
                top: 99%;
                transition: all 0.3s;
                transition-delay: 1s;
                height: 1px;
                z-index: 2;
            }
        }
        b {
            font-size: 20px;
            animation: blink 2s linear infinite alternate;
            transition: all 0.4s;
        }
        nav {
            &:has(.innermenu) {
                min-width: 65%;
            }
            ${media.md} {
                justify-content: space-between;
            }
            ${media.sm} {
                flex-direction: column-reverse;
                justify-content: flex-end;
                &.mobilelinks {
                    width: 70%;
                    max-width: 400px;
                    background: #000;
                    position: absolute;
                    transition: all 0.2s ease-in-out;
                    top: 100%;
                    left: -100%;
                    height: 100vh;
                    overflow: hidden;
                }
            }
        }
    `,
};
