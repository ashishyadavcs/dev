import styled from "styled-components";
import Message from "./message";
import Image from "next/image";
import { MdArrowBack, MdCall, MdKeyboardVoice, MdOutlineAttachFile } from "react-icons/md";
import { media } from "config/device";
import { FaCamera, FaMicrophone, FaVideo } from "react-icons/fa";
import { memo, useEffect, useRef, useState } from "react";
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
import socket from "./socket";
import { sounds } from "./sounds";
import peer, { callTo, endcall, mute, switchPlace } from "utils/chat/call";

const Chat = () => {
    const [msgList, setmsgList] = useState([]);
    const [callerId, setcallerId] = useState("");
    const [incomming, setincomming] = useState(false);
    const [userinfo, setuserinfo] = useState({
        sender: "ashish",
        senderimg: "/images/profile.jpg",
    });
    const [msg, setmsg] = useState({
        text: "",
        file: "",
        voice: "",
    });
    const senderVideo = useRef();
    const receiverVideo = useRef();
    useEffect(() => {
        peer.on("open", id => {
            setcallerId(id);
        });
        socket.on(eventsType.videocall, id => {
            playSound(sounds.call);
            setincomming(true);
            callTo(senderVideo, receiverVideo, id);
        });
        try {
            document.querySelector(".inputs .msg").innerHTML = "";
        } catch (err) {}
        setmsg(p => ({}));
    }, []);

    useEffect(() => {
        socket.on("connect", () => {
            savemessage(setmsgList, {
                msg: `connected`,
                type: "join",
            });
        });
        socket.on(eventsType.join, data => {
            setuserinfo(p => ({ ...p, id: data.chatId }));
            openChat();
            savemessage(setmsgList, {
                msg: `${data.chatId} joined`,
                type: "join",
            });
        });

        socket.on(eventsType.message, data => {
            console.log(data);
            playSound(sounds.receive);
            if (data.msg) {
                document.title = `💬 ${data.msg}`;
            }
            openChat();
            savemessage(setmsgList, {
                ...data,
                reciever: true,
            });
        });
        socket.on(eventsType.profile_update, data => {
            setmsgList(p => p.map(c => ({ ...c, senderimg: data.senderimg })));
        });
        socket.on("leave", id => {
            savemessage(setmsgList, {
                msg: `${id} leaved chat`,
                type: "join",
                reciever: true,
            });
        });

        socket.emit(eventsType.join, socket.id); //to tell server to join me in room

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
                        <span className="dp">
                            <Image objectFit="cover" layout="fill" alt="" src={"/ashish.jpg"} />
                        </span>

                        <div className="name">
                            <span className="title">Frontendzone</span>
                            <span className="lastseen">last seen today at 9:23 pm</span>
                        </div>
                        <FaVideo
                            onClick={e => {
                                e.stopPropagation();
                                e.target.classList.add("ongoing")
                                socket.emit(eventsType.videocall, callerId);
                            }}
                            size={20}
                        />
                        {/* <span className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span> */}
                    </div>

                    <>
                        <div className="body">
                            {incomming && (
                                <div className="videocall">
                                    <video onClick={e=>switchPlace(e)} className="sender video" ref={senderVideo}></video>
                                    <video onClick={e=>switchPlace(e)} className="receiver video" ref={receiverVideo}></video>
                                    <div className="call-helper">
                                        <FaMicrophone onClick={e => mute(e, senderVideo)} />{" "}
                                        <button
                                            onClick={e => {
                                                endcall();
                                            }}
                                            className="drop"
                                        >
                                            <MdCall />
                                        </button>
                                        <FaVideo />
                                    </div>
                                </div>
                            )}
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
                                            multiple
                                            hidden
                                        />

                                        <MdOutlineAttachFile
                                            className="attach"
                                            color="#888"
                                            size={20}
                                        />
                                    </label>
                                    <label>
                                        <input
                                            onChange={async e => {
                                                await setMessage(e, setmsg);
                                            }}
                                            type="file"
                                            accept="image/*"
                                            capture
                                            hidden
                                        />

                                        <FaCamera size={18} color="#888" />
                                    </label>
                                </div>
                            </form>
                            <div
                                className="sender"
                                onClick={async e => {
                                    if (msg.text?.length > 0 || msg.file) {
                                        await sendMSG(setmsgList, {
                                            msg: msg.text,
                                            ...(msg.file && msg),
                                            ...(userinfo.senderimg && {
                                                senderimg: userinfo.senderimg,
                                            }),
                                            ...(userinfo.sender && {
                                                sender: userinfo.sender,
                                            }),
                                        });
                                        setmsg(p => ({}));
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
                </>
            </Chatlayout>
        </>
    );
};
export default memo(Chat);
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
