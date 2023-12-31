import styled from "styled-components";
import Message from "./message";
import Image from "next/image";
import { MdArrowBack, MdKeyboardVoice, MdOutlineAttachFile } from "react-icons/md";
import { draghtml } from "utils/graghtml";
import { media } from "config/device";
import { FaCamera } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useRouter } from "next/router";
import { record } from "utils/chat";
import Members from "./contacts";
import { io } from "socket.io-client";

const Chat = () => {
    const router = useRouter();
    const isbhoj = router.asPath.includes("bhojpuri");
    const [msgList, setmsgList] = useState([
        {
            msg: "hi how are you",
            audio: "",
            time: "12:00pm",
            sender: "ashish",
            senderimg: "/ashish.jpg",
        },
    ]);
    const [msg, setmsg] = useState({
        text: "",
        file: "",
        voice: "",
    });
    const playSound = src => {
        const ss = new Audio(src);
        ss.play();
        setTimeout(() => {
            ss.pause();
        }, 5000);
    };
    const savemessage = msg => {
        setmsgList(prev => [
            ...prev,
            {
                msg: msg,
                audio: "",
                time: "12:00pm",
                sender: "ashish",
                senderimg: "/ashish.jpg",
            },
        ]);
    };
    /*chat */

    const socket = io("http://localhost:4000");
    /*chat */
    const sendMSG = () => {
        document.querySelector(".inputs .msg").innerHTML = "";
        socket.emit("message", msg.text);
        setmsg(prev => ({ ...prev, text: "" }));
        playSound(`/dev/sound/${isbhoj ? "bhj" : "msg"}.mp3`);
    };
    useEffect(() => {
        document.querySelector(".inputs .msg").innerHTML = "";
    }, [msgList]);
    return (
        <>
            <Chatlayout onDrag={e => draghtml("chat")} id="chat" className="chat-container">
                {0 ? (
                    <Members />
                ) : (
                    <>
                        <div
                            className="head active"
                            onClick={e => e.currentTarget.classList.toggle("active")}
                        >
                            <MdArrowBack
                                onClick={e => {
                                    e.stopPropagation();
                                    e.currentTarget.parentElement.nextElementSibling.classList.toggle(
                                        "home"
                                    );
                                }}
                                className="back"
                                size={25}
                            />
                            <Image
                                className="dp"
                                objectFit="cover"
                                height={35}
                                width={35}
                                alt=""
                                src={"/ashish.jpg"}
                            />
                            <div className="name">
                                <span className="title">Ashish Yadav</span>
                                <span className="lastseen">last seen today at 9:23 pm</span>
                            </div>
                            <span className="menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        <div className="body">
                            {msgList.map(msg => (
                                <Message data={msg} />
                            ))}
                        </div>
                        <div className="action">
                            <form className="inputs">
                                <div
                                    autoFocus
                                    spellCheck="false"
                                    onKeyDown={e => {
                                        if (e.key == "Enter") {
                                            sendMSG();
                                            e.preventDefault();
                                        }
                                    }}
                                    onInput={e => {
                                        setmsg(prev => ({ ...prev, text: e.target.innerText }));
                                    }}
                                    className="msg"
                                    contentEditable
                                ></div>
                                <div className="tools">
                                    <MdOutlineAttachFile
                                        className="attach"
                                        color="#888"
                                        size={20}
                                    />
                                    <FaCamera size={18} color="#888" />
                                </div>
                            </form>
                            <div
                                className="sender"
                                onClick={e => {
                                    msg.text.length > 0 ? sendMSG() : record(e, setmsgList);
                                }}
                            >
                                {msg.text?.length > 0 ? (
                                    <IoMdSend color="#fff" size={22} />
                                ) : (
                                    <MdKeyboardVoice color="#fff" size={22} />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </Chatlayout>
        </>
    );
};
export default Chat;
const Chatlayout = styled.div`
    --headheight: 55px;
    z-index: 2;
    height: 550px;
    width: 320px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    background: linear-gradient(teal -60%, #f2f2ff 30% 67%, teal 155%);
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    position: fixed;
    bottom: 0px;
    right: 100px;
    ${media.xs} {
        width: 100%;
        right: 0;
        bottom: var(--headheight);
        z-index: 20;
        border-radius: 0px;
    }
    transition: all 0.6s;
    &:has(.head.active) {
        height: var(--headheight);
        .action,
        .body {
            display: none;
        }
    }
    .head {
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
        .dp {
            border-radius: 50%;
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
        background: blue;
    }
    .body {
        position: relative;
        display: flex;
        flex-direction: column;
        height: calc(500px - 70px);
        padding: 40px 10px;
        overflow: auto;
        .message-container:nth-of-type(3n) {
            justify-content: flex-end;
        }
        &:-webkit-scrollbar-thumb {
            background: #ddd !important;
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
                bottom: 10px;
                .attach {
                    transform: rotate(-45deg);
                }
            }
        }
    }
    .sender {
        svg {
            pointer-events: none;
        }
        cursor: pointer;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: teal;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
