import React, { memo, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";

const Select = ({ options = [], label = "select option", onchange, defaultValue }) => {
    const [value, setvalue] = useState(defaultValue || "");
    const closeOut = e => {
        if (!e.target.closest(".custom-select")) {
            document.querySelector(".custom-select").classList.remove("active");
        }
    };
    useEffect(() => {
        document.body.onclick = e => {
            closeOut(e);
        };
        return () => {
            document.body.removeEventListener("onclick", closeOut);
        };
    }, []);

    return (
        <Selectstyle
            onClick={e => e.currentTarget.classList.toggle("active")}
            className="custom-select"
        >
            <span>
                {value ? value : label} <MdKeyboardArrowDown size={20} />
            </span>
            <ul>
                {options.map((li, i) => {
                    return (
                        <>
                            <li
                                onClick={e => {
                                    setvalue(v => li.value);
                                    onchange && onchange(value);
                                }}
                                value={li.value}
                                key={i}
                            >
                                {li.name}
                            </li>
                        </>
                    );
                })}
            </ul>
        </Selectstyle>
    );
};
export default memo(Select);
const Selectstyle = styled.div`
    user-select: none;
    background: #fff;
    min-width: 100px;
    position: relative;
    width: max-content;
    cursor: pointer;
    border: 1px solid #ddd;
    transition: all 1s;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.3);
    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 10px;
        margin-bottom: 0;
    }

    ul {
        z-index: 1;
        pointer-events: none;
        background: inherit;
        list-style: none;
        position: absolute;
        width: 100%;
        opacity: 0;
        li {
            padding: 10px;
            border-top: 1px solid #ddd;
            &:hover {
                background: blue;
                color: #fff;
            }
        }
    }
    &.active {
        ul {
            opacity: 1;
            pointer-events: all;
            top: 100%;
        }
    }
`;
