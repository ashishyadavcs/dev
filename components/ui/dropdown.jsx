import { media } from "config/device";
import Link from "next/link";
import { useEffect } from "react";
import { styled } from "styled-components";

const Dropdown = ({ links }) => {
    useEffect(() => {
        //outclick dropdown close
        const dropdown = document.querySelector(".dropdown");
        if (!dropdown) return;
        document.body.onclick = e => {
            if (e.target == document.querySelector(".user")) return;
            if (!e.target.closest(".dropdown")) {
                dropdown.classList.remove("active");
            }
        };
    }, []);

    return (
        <Dopdown className="dropdown">
            <ul className="list-unstyled mb-0">
                {links.map(el => (
                    <li key={el.text}>
                        <Link href={el.link}>
                            <a>{el.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Dopdown>
    );
};

export default Dropdown;
const Dopdown = styled.div`
    position: absolute;
    top: 80%;
    width: max-content;
    min-width: 200px;
    right: -50px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    color: rgb(136, 136, 136);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    ${media.minsm} {
        border-radius: 0 0 8px 8px;
    }
    ${media.sm} {
        background: unset;
        left: 0;
        width: 100%;
        max-height: 0;
        position: relative;
        transition: all 0.3s;
        box-shadow: unset;
        &.active {
            max-height: 100vh;
            overflow: auto;
        }
    }
    &.active {
        opacity: 1;
        top: 100%;
        pointer-events: all;
    }

    li {
        a {
            width: 100%;
            display: block;
        }
        cursor: pointer;
        ${media.sm} {
            &:last-child {
                &::before {
                    content: none;
                }
            }
        }
        ${media.minsm} {
            background: #fff;
            padding: 0 !important;
            &:hover {
                background: #f1f1f1;
            }
        }
    }
`;
