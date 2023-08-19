import { media } from "config/device";
import styled from "styled-components";

export const Styled = {
    cards: styled.div`
        display: grid;
        margin: 2rem 0;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `,
    card: styled.div`
        box-shadow: 0 4px 4px rgb(155, 152, 152);
        overflow: hidden;
        border-radius: 4px;
        min-height: 370px;
        background: #fff;
        > div:first-child {
            overflow: hidden;
            height: 45%;
            min-height: 200px;
            position: relative;
        }
        > div:last-child {
            padding: 1.5rem;
            height: 55%;
            min-height: 150px;
        }
    `,
    hero: styled.div`
        padding: 2rem 0;
        color: #fff;
        position: relative;
        background: linear-gradient(87.1deg, #253059 37.01%, #1a2346 98.89%);
        .cta-btn {
            margin-top: 30px;
        }
        .heroimg {
            pointer-events: none;
            z-index: -1;
            ${media.sm} {
                opacity: 0.3;
            }
        }
    `,
};
