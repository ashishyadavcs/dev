import React, { useRef } from "react";
import Orderpop from "./orderpop";
import { styled } from "styled-components";
const SetTheme = () => {
    const setbtn = useRef();
    const Dropdown = () => (
        <select
            onChange={e => {
                setbtn.current.click();
            }}
        >
            <option value="">default</option>
            <option>white</option>
        </select>
    );
    return (
        <Themebutton className="setting">
            <Orderpop Comp={Dropdown} />
            <button
                ref={setbtn}
                onClick={e => {
                    e.currentTarget.previousElementSibling.classList.toggle("active");
                }}
            >
                set theme
            </button>
        </Themebutton>
    );
};

export default SetTheme;
const Themebutton = styled.div`
    button {
        position: fixed;
        top: 300px;
        left: 0;
        background: red;
    }
`;
