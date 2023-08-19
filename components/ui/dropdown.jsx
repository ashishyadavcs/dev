import { media } from "config/device";
import Link from "next/link";
import { styled } from "styled-components";

const Dropdown = ({ links }) => {
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
    right: 0;
    overflow: hidden;
    opacity: 0;
    left: 0;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    color: rgb(136, 136, 136);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    ${media.minsm} {
        border-radius: 0 0 8px 8px;
    }
    ${media.sm} {
        background: unset;
        left:0;
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
        cursor: pointer;
        ${media.sm}{
            &:last-child {
                &::before{
                content:none;
            }
            }
        }
        ${media.minsm} {
            background: #fff;
            padding: 5px 10px;
            &:hover {
                background: #f1f1f1;
            }
        }
    }
`;
