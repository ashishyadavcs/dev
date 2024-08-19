import styled from "styled-components";
import Message from "./message";
import Image from "next/image";
import { MdArrowBack, MdKeyboardVoice, MdOutlineAttachFile } from "react-icons/md";
import { draghtml } from "utils/draghtml";
import { media } from "config/device";
import { FaCamera } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import {
    eventsType,
    openChat,
    playSound,
    record,
    savemessage,
    sendMSG,
    setMessage,
    ShowMessageData,
} from "utils/chat";
import Members from "./contacts";
import socket from "./socket";
import { sounds } from "./sounds";

const Chat = () => {
    const [msgList, setmsgList] = useState([]);
    const [userinfo, setuserinfo] = useState({
        name: "",
        id: "",
        image: "",
    });
    const [msg, setmsg] = useState({
        text: "",
        file: "",
        voice: "",
    });

    useEffect(() => {
        document.querySelector(".inputs .msg").innerHTML = "";
        setmsg(p => ({}));
    }, [msgList]);

    useEffect(() => {
        socket.on(eventsType.join, data => {
            console.log("you joined in room", data);
            setuserinfo(p => ({ ...p, id: data.chatId }));
            openChat();
            savemessage(setmsgList, {
                msg: data.roomid,
                type: "join",
            });
        });

        socket.on(eventsType.message, data => {
            playSound(sounds.receive);
            document.title = `💬 ${data}`;
            openChat();
            savemessage(setmsgList, {
                ...data,
                reciever: true,
            });
        });

        socket.emit(eventsType.join, socket.id);

        return () => {
            // socket.off("join");
            // socket.off("message");
            // socket.off("typing")
            Object.keys(eventsType).forEach(key => {
                socket.off(eventsType[key]);
            });
        };
    }, []);

    return (
        <>
            <Chatlayout id="chat" className="chat-container">
                {0 ? (
                    <Members />
                ) : (
                    <>
                        <div
                            id="mydivheader"
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
                                <span className="title">Frontendzone</span>
                                <span className="lastseen">last seen today at 9:23 pm</span>
                            </div>
                            <span className="menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        <div className="body">
                            {console.log(msgList)}
                            {msgList.map(msg => (
                                <Message setuserinfo={setuserinfo} key={3} data={msg} />
                            ))}
                        </div>
                        <div className="action">
                            <div className="inputfile">{ShowMessageData(msg)}</div>
                            <form className="inputs">
                                <div
                                    autoFocus
                                    spellCheck="false"
                                    onKeyDown={e => {
                                        if (e.key == "Enter") {
                                            document.querySelector(".sender").click();
                                            e.preventDefault();
                                        }
                                    }}
                                    onInput={e => {
                                        setmsg(prev => ({ ...prev, text: e.target.innerText }));
                                        socket.emit("typing", msg.text);
                                    }}
                                    className="msg"
                                    contentEditable
                                />
                                <div className="tools">
                                    <label>
                                        <input
                                            onChange={async e => {
                                                await setMessage(e, setmsg);
                                            }}
                                            type="file"
                                            hidden
                                        />
                                        <MdOutlineAttachFile
                                            className="attach"
                                            color="#888"
                                            size={20}
                                        />
                                    </label>

                                    <FaCamera size={18} color="#888" />
                                </div>
                            </form>
                            <div
                                className="sender"
                                onClick={async e => {
                                    if (msg.text?.length > 0 || msg.file) {
                                        await sendMSG(setmsgList, {
                                            msg: msg.text,
                                            ...(msg.file && msg),
                                            sender: userinfo.id,
                                            ...(userinfo.image && {
                                                senderimg: userinfo.image,
                                            }),
                                        });
                                    }
                                }}
                            >
                                {msg.text?.length > 0 || msg.file ? (
                                    <IoMdSend color="#fff" size={22} />
                                ) : (
                                    <MdKeyboardVoice
                                        onClick={e => record(e, setmsg)}
                                        color="#fff"
                                        size={22}
                                    />
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
    z-index: 112;
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
`;
