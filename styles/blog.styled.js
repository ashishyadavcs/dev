import styled from "styled-components";

const Blogstyle = styled.div`
    article {
        max-width: 100%;
        overflow: hidden;
    }

    article code {
        position: relative;
    }

    :not(pre) > code {
        color: blue;
        background: aliceblue;
        padding: 2px 5px;
        border-radius: 5px;
    }
    article code [class="copy"] {
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: 2;
    }

    .tag a {
        padding: 5px 20px;
        display: inline-block;
        color: aliceblue;
        background: #03072d;
        font-size: 15px;
        font-weight: 600;
        margin: 0 10px 10px 0;
        box-shadow: 2px 7px 5px 1px rgba(0, 0, 0, 0.2);
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.3s;
    }

    video {
        width: 800px !important;
    }
    .tag a:hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    figure {
        width: 100%;
    }

    img {
        max-width: 100%;
        background: #f1f1f1;
    }

    .newsletter {
        margin-top: 30px;
        border-radius: 1rem;
    }

    .newsletter input {
        border: 2px solid teal;
        box-shadow: 0 1px 2px rgba(254, 230, 230, 0.4);
    }

    .sticky {
        position: sticky;
        z-index: 2;
        top: 20px;
    }

    .post:active {
        box-shadow: none;
    }

    .post .thumbnail {
        position: relative;
        display: block;
        min-height: 200px;
    }

    .post .content {
        padding: 1rem;
        z-index: 2;
    }

    .addpost {
        padding: 10px;
        border: 1px dashed;
    }

    .addpost input,
    .addpost textarea {
        border: 2px solid teal;
        padding: 5px;
    }

    .addpost label {
        margin: 10px;
    }

    .addpost .content {
        min-height: 500px;
    }

    .addpost form .left {
        display: flex;
        flex-direction: column;
    }

    .post .action {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 3;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table tr:hover {
        background: #f1f1f1;
    }

    td,
    th {
        padding: 10px;
        border: 2px solid #ddd;
    }

    .addpost .faq {
        border: 1px dashed teal;
    }

    .postbanner {
        position: relative;
        padding: 1rem;
        min-height: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        color: #ccc;
        background: rgb(10 31 72);
    }

    .postbanner img {
        pointer-events: none;
    }

    .postbanner h1 {
        position: relative;
        text-align: center;
        z-index: 2;
        color: azure;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(30px, 4vw, 70px) !important;
        text-shadow: 0px 1px 1px #000;
    }

    .postbanner h1 + * {
        z-index: 2;
    }

    .postbanner::before {
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    .article figure img {
        object-fit: contain;
        height: auto;
        margin: 1rem 0;
        width: 100%;
    }

    pre {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        font-family: "roboto";
        font-size: 15px;
        margin: 2rem 0;
    }

    ol {
        padding-left: 20px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        scroll-margin-top: 80px;
    }
    [class="theme-btn"] {
        margin: 40px auto;
    }
    h1:not(.postbanner h1) {
        font-size: clamp(20px, 8vw, 40px) !important;
        margin-bottom: 30px;
        color: darkblue;
    }

    h2 {
        margin-top: 2rem;
    }

    .catlist {
        list-style: none;
        display: flex;
        flex-direction: row;
    }

    .catlist li a {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgb(233 233 246);
        color: blue;
        width: max-content;
        border-radius: 4px;
        padding: 5px 10px;
    }

    pre {
        max-width: 100%;
        overflow: auto;
    }

    code::-webkit-scrollbar {
        height: 3px;
        width: 3px;
    }

    pre code {
        line-height: 1.7;
        color: #fff;
        font-size: 16px;
        padding: 20px;
    }

    pre::-webkit-scrollbar {
        width: 8px;
        height: 3px;
        background: #ccc;
    }

    pre::-webkit-scrollbar-thumb {
        background: #636577;
    }

    article ul:not(nav ul) {
        padding-top: 10px;
        padding-left: 18px;
    }

    article :not(.sticky):where(ol, ul) li {
        margin-bottom: 10px;
    }

    [class="download-btn-group"] {
        display: flex;
        gap: 18px;
        justify-content: center;
    }

    .category {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
    }

    .category label {
        border: 2px solid #ddd;
        display: flex;
        justify-content: space-between;
    }

    .category b {
        font-size: 20px;
        display: inline-block;
        ul {
            display: flex;
            list-style: none;
            padding-left: 0 !important;
            gap: 10px;
            a {
                display: flex;
                align-items: center;
                text-transform: lowercase;
                gap: 10px;
                color: #d0f8f0;
            }
        }
    }

    @media (max-width: 767px) {
        .download-btn-group {
            flex-direction: column;
            gap: 0px;
            margin: 10px 0;
            a {
                text-align: center;
                margin: 5px 0;
            }
            .theme-btn:last-child {
                margin-top: 0;
            }
        }

        .postbanner {
            min-height: 175px;
        }

        .post {
            height: unset;
            display: block;
        }

        .post .thumbnail {
            width: 100%;
            height: 200px;
            min-width: 100%;
        }
    }

    @media (max-width: 576px) {
        article object[class*="wp-block-file"] {
            display: none;
        }

        article div[class*="wp-block-file"] {
            background: #d0f8f0;
            padding: 10px;
            box-shadow: 0 1px 2px #ddd;
            text-decoration: none;
            border-radius: 4px;
        }
    }
`;

export default Blogstyle;
