import styled from "styled-components";
export const Styled = {
    footer: styled.footer`
        color: var(--color);
        background: #010921f2;
        color: rgb(170, 167, 167);
        background-position: center;
        background-blend-mode: overlay;
        p {
            color: #fff;
        }
        a {
            color: #ddd;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            &:hover {
                text-decoration: none;
                color: #04ff04;
            }
        }
        li {
            margin-bottom: 10px;
        }

        .social-links {
            a {
                font-size: 18px;
                display: inline-block;
                background: #2a2a2a;
                color: #fff;
                line-height: 1;
                padding: 8px 0;
                margin-right: 4px;
                border-radius: 50%;
                text-align: center;
                width: 36px;
                height: 36px;
                transition: 0.3s;
            }
        }
        .smallheading {
            color: #fff;
            margin: 10px 0;
            font-size: 20px;
            &:not(:first-child) {
                margin-top: 30px;
            }
        }
        .sub-footer {
            background: #010921f2;
            color: #ccc;
        }
    `,
};
