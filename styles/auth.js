import styled from "styled-components";
export const Styled = {
    login: styled.div`
        position: fixed;
        z-index: 20;
        top: 0;
        min-height: 100vh;
        min-width: 100vw;
        left: 0;
        background: linear-gradient(
            45deg,
            #000000 30%,
            #666666 30%,
            #666666 60%,
            #cccccc 60%,
            #cccccc 90%
        );
        button {
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 10px;
            justify-content: center;
            border-radius: 8px;
            margin: 10px 0 25px;
            padding: 10px 8px;
        }
        .btn-default {
            padding: 10px 20px;
        }
        .btn-default:hover {
            background: #ddd;
        }
        p {
            margin-top: 10px;
        }
        a {
            color: #0000ffd9;
        }
        > div {
            width: 400px;
            background: #fff;
            max-width: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
            z-index: 23;
            transform: translate(-50%, -50%);
            padding: 2rem;
            border-radius: 8px;
        }
        .register-as{
            width: 100%;
            outline: none;
            padding: 10px;
        }
    `,
};
