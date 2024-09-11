import Message from "./message";
import { MdCall } from "react-icons/md";
import { FaMicrophone, FaVideo } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import { eventsType, openChat, playSound, savemessage } from "chat/utils";
import socket from "chat/socket";
import { sounds } from "chat/sounds";
import peer, { callTo, endcall, mute, switchPlace } from "chat/utils/call";
import Header from "./header";
import ChatInput from "./input";
import Chatlayout from "chat/styles/chat.styled";

const Chat = () => {
    const [msgList, setmsgList] = useState([]);
    const [callerId, setcallerId] = useState("");
    const [incomming, setincomming] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
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
            playSound(sounds.call, 1);
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
            setIsConnected(true);
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
        socket.on("disconnect", function () {
            setIsConnected(false);
        });
        return () => {
            Object.keys(eventsType).forEach(key => {
                socket.off(eventsType[key]);
            });
        };
    }, []);

    return (
        <>
            <Chatlayout id="chat" className="chat-container">
                <>
                    <Header />
                    <>
                        <div className="body">
                            {incomming && (
                                <div className="videocall">
                                    <video
                                        onClick={e => switchPlace(e)}
                                        className="sender video"
                                        ref={senderVideo}
                                    ></video>
                                    <video
                                        onClick={e => switchPlace(e)}
                                        className="receiver video"
                                        ref={receiverVideo}
                                    ></video>
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
                        <ChatInput setmsgList={setmsgList} userinfo={userinfo}/>
                    </>
                </>
            </Chatlayout>
        </>
    );
};
export default Chat;
