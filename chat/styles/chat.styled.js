import {media} from "config/device";
import styled from "styled-components";

const Chatlayout = styled.div`
    --headheight: 55px;
    z-index: 112;
    height: 550px;
    width: 320px;
    background: linear-gradient(teal -60%, #f2f2ff 30% 67%, teal 155%);
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    position: fixed;
    bottom: 0px;
    right: 100px;
    transition: all 0.3s;
    ${media.xs} {
        width: 100%;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: 20;
        border-radius: 0px;
    }
    &:has(.head.active) {
        height: var(--headheight);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        bottom: 150px;
        ${media.minsm} {
            bottom: 250px;
        }
        right: 20px;
        .action,
        .body {
            display: none;
        }
    }
    .head {
        background: linear-gradient(blue, transparent);
        cursor: pointer;
        z-index: 3;
        height: 60px;
        padding: 10px;
        display: flex;
        align-items: center;
        color: #fff;
        .back {
            margin-right: 10px;
        }
        &.active .dp {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
        .dp {
            position: relative;
            height: 35px;
            width: 35px;
            border-radius: 50%;
            overflow: hidden;
        }
        .name {
            display: flex;
            margin-left: 10px;
            margin-right: 60px;
            flex-direction: column;
            width: 43%;
            .lastseen {
                font-size: 10px;
            }
        }
        .menu-icon {
            --size: 4px;
            display: flex;
            flex-direction: column;
            span {
                height: var(--size);
                width: var(--size);
                border-radius: 50%;
                background: #fff;
                display: inline-block;
                margin-bottom: 2px;
            }
        }
    }
    .body {
        position: relative;
        display: flex;
        flex-direction: column;
        height: calc(100% - 117px);
        padding: 40px 10px;
        overflow: auto;
        &:has(.videocall) {
            padding: 0 10px;
        }
        &::-webkit-scrollbar {
            background: transparent;
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: #8989f2;
            width: 5px;
            border-radius: 10px;
        }
    }
    .action {
        position: absolute;
        left: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        width: 95%;
        bottom: 10px;
        align-items: center;
        justify-content: space-around;
        .inputfile {
            position: absolute;
            bottom: 100%;
            left: 0;
            width: 100%;
        }
        .inputs {
            position: relative;
            background: #fff;
            border-radius: 20px;
            width: 80%;
            .msg {
                padding: 10px 15px;
                outline: none;
                width: 78%;
                &::before {
                    content: "";
                    pointer-events: none;
                    color: #888;
                }
                &:empty::before {
                    content: "Type your message...";
                }
                max-height: 100px;
                overflow: auto;
            }
            .tools {
                display: flex;
                gap: 10px;
                background: #fff;
                /* border-radius: 16px;
                padding: 8px 16px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
                height: max-content;
                position: absolute;
                right: 20px;
                bottom: 5px;
                .attach {
                    transform: rotate(-45deg);
                }
            }
        }
    }
    .sender {
        cursor: pointer;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: teal;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .videocall {
        position: sticky;
        top: -20px;
        height: 100%;
        z-index: 2;
        video {
            border-radius: 10px;
            overflow: hidden;
            object-fit: cover;
            height: 430px;
            width: 100%;
            transform: rotateY(180deg);
            &.sender {
                position: absolute;
                top: 30px;
                left: 20px;
                height: 60px;
                width: 60px;
                border-radius: 50%;
                z-index: 1;
            }
        }
        .call-helper {
            padding: 5px;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            position: absolute;
            bottom: 0;
            width: 100%;
            .muted {
                opacity: 0.5;
            }
            .drop {
                border-radius: 50%;
                height: 50px;
                width: 50px;
                background: red;
                color: #fff;
            }
        }
    }
    @keyframes pulse-animation {
        0% {
            box-shadow: 0 0 0 0px rgb(7, 3, 42);
        }
        100% {
            box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
        }
    }
    .incomming {
        border-radius: 50%;
        animation: pulse-animation 0.4s infinite;
    }
`;

export default Chatlayout