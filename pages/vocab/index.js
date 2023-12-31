import { media } from "config/device";
import React from "react";
import styled from "styled-components";

const Page = () => {
    return (
        <Vocab className="container">
            <h1>Spending</h1>
            <p>
                He was spending way too much on her. She's coming for dinner and spending the night.
            </p>
        </Vocab>
    );
};

export default Page;
const Vocab = styled.div`
    --borderwidth: 40px;
    --pading: 80px;
    --margin: 40px;
    color: #fff;
    background: #000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    border: var(--borderwidth) solid #ccc;
    border-radius: 4px;
    padding: var(--pading);
    margin: var(--margin) auto;
    box-shadow: 0 0 0 4px #999, inset 0 0 0 calc(var(--borderwidth) / 2) #555;
    p{color:#ddd}
    ${media.sm} {
        --pading: 10px;
        --borderwidth: 10px;
        --margin: 0;
    }
`;
