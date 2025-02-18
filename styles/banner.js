import { media } from "config/device";
import styled from "styled-components";

export const Bannerstyle = styled.div`
    position: relative;
    text-align: center;
    background: linear-gradient(#15f5ba, #dcf2f1);
    padding: 50px 0;
    .emoji {
        font-size: 40px;
    }

    ul {
        list-style: none;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            margin: 10px;
            background: #4a6ee014;
            border: 2px solid;
            width: max-content;
            color: blue;
            border-radius: 8px;
            a {
                display: block;
                width: 100%;
                padding: 10px;
                min-width: 200px;
            }
        }
    }
    ${media.sm} {
        p {
            padding: 0 20px;
        }
        text-align: center;
    }
`;
