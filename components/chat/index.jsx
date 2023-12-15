import styled from "styled-components";
import Message from "./message";
import Image from "next/image";
import { MdArrowBack, MdKeyboardVoice, MdOutlineAttachFile } from "react-icons/md";
import { draghtml } from "utils/graghtml";
import { media } from "config/device";
import { FaCamera } from "react-icons/fa";
import {useState} from "react";
import {IoMdSend} from "react-icons/io";

const Chat = () => {
    const [msgList, setmsgList] = useState([{
        msg: "hi how are you",
        time: "12:00pm",
        sender: "ashish",
        senderimg: "/ashish.jpg"
    }])
    const [msg, setmsg] = useState({
        text:'',
        file:'',
        voice:''
    })
    return (
        <>
            <Chatlayout onDrag={e => draghtml("chat")} id="chat" className="chat-container">
                <div className="head active" onClick={e => e.currentTarget.classList.toggle("active")}>
                    <MdArrowBack size={20} />
                    <Image
                        className="dp"
                        objectFit="cover"
                        height={40}
                        width={40}
                        alt=""
                        src={"/ashish.jpg"}
                    />
                    <div className="name">
                        <span className="title">Ashish Yadav</span>
                        <span className="lastseen">last seen today at 9:23 pm</span>
                    </div>
                </div>

                <div className="body">
                    {msgList.map(msg => (
                        <Message data={msg} />
                    ))}
                </div>
                <div className="action">
                    <form className="inputs">
                        <div autoFocus value={msg.text} spellCheck="false" onInput={e=>{
                            setmsg(prev=>({...prev,text:e.target.innerText}))
                        }} className="msg" contentEditable></div>
                        <div className="tools">
                            <MdOutlineAttachFile className="attach" color="#888" size={18} />
                            <FaCamera size={18} color="#888" />
                        </div>
                    </form>
                    <div className="sender" onClick={e=>{
                        setmsgList( prev=> [...prev,{msg:msg.text,time: "12:00pm",
                        sender: "ashish",
                        senderimg: "/ashish.jpg"}])
                        document.querySelector('.inputs .msg').innerText=''
                    }}>
                        {msg.text?.length>0?
                         <IoMdSend color="#fff" size={22} />:
                        <MdKeyboardVoice color="#fff" size={22} />
                       }
                    </div>
                </div>
            </Chatlayout>
        </>
    );
};
export default Chat;
const Chatlayout = styled.div`
    z-index:2;
    height: 550px;
    width: 320px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    background: #ddd;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    position: fixed;
    bottom: 0px;
    right: 100px;
    ${media.xs} {
        width: 100%;
        right: 0;
        bottom: 70px;
        z-index: 20;
    }
    transition: all 0.6s;
    &:has(.head.active) {
        height: 60px;
        .action,.body {
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
        .dp {
            border-radius: 50%;
        }
        .name {
            display: flex;
            margin-left: 10px;
            flex-direction: column;
            .lastseen {
                font-size: 10px;
            }
        }
        background: teal;
    }
    .body {
        display: flex;
        flex-direction: column;
        height: calc(500px - 70px);
        padding: 40px 10px;
        overflow: auto;
        .message-container:nth-of-type(3n) {
            justify-content: flex-end;
        }
        &:-webkit-scrollbar-thumb{
            background: #ddd!important;
        }
    }
    .action {
        position: absolute;
        left: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        width:95%;
        bottom:10px;
        align-items: center;
        justify-content: space-around;
        .inputs {
            position: relative;
            background: #fff;
            border-radius: 20px;
            width:80%;
            .msg {
                padding: 10px 15px;
                outline: none;
                width:78%;
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
