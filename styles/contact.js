import styled from "styled-components";
export const Styled = {
    contact: styled.div`
        background: radial-gradient(rgb(248, 238, 218), white);
        min-height: 90vh;
        padding: 2rem 0;
        form {
            box-shadow: 0 1px 2px #ddd;
            background: #fff;
            padding: 1rem;
            border-radius: 8px;
        }
        .whatsapp-text {
            animation: blink 1s linear infinite alternate;
        }
        .right {
            padding: 20px;
            border-radius: 4px;
            background: radial-gradient(rgb(253, 239, 232), #fff);
            box-shadow: 0 1px 2px beige;
        }
        input,
        textarea {
            border: 2px solid #ddd;
            border-radius: 4px;
        }
        &:where(input, textarea):focus {
            border: 2px solid rgb(4, 4, 22);
        }
        @keyframes blink {
            0% {
                margin-left: 10px;
                font-weight: bold;
                color: rgb(120, 43, 228);
            }

            100% {
                margin-left: 0;
                color: rgb(3, 54, 37);
            }
        }
    `,
};
