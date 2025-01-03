import { media } from "config/device";
import Link from "next/link";
import styled from "styled-components";

const PostStyle = styled(Link)`
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
    position: relative;
    cursor: pointer;
    margin-bottom: 25px;
    text-decoration: none;
    display: grid;
    grid-template-columns: 250px calc(100% - 250px);
    justify-content: space-between;
    transition: all 0.3s;
    color: #0f052f;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    ${media.sm} {
        & {
            height: unset;
            display: block;
        }
        .thumbnail {
            width: 100%;
            height: 200px;
            min-width: 100%;
        }
    }
    .date {
        color: #888;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-style: italic;
    }
    .thumbnail {
        position: relative;
        display: block;
        min-height: 200px;
    }

    .content {
        padding: 1rem;
        z-index: 2;
    }
`;
export default PostStyle;
