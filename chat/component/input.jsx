import socket from "chat/socket";
import {record, sendMSG, ShowMessageData} from "chat/utils";
import React, {useState} from "react";
import {FaCamera} from "react-icons/fa";
import {IoMdSend} from "react-icons/io";
import {MdKeyboardVoice, MdOutlineAttachFile} from "react-icons/md";

const ChatInput = ({setmsgList,userinfo}) => {
    const [msg, setmsg] = useState({
        text: "",
        file: "",
        voice: "",
    });
    return (
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

                        <MdOutlineAttachFile className="attach" color="#888" size={20} />
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
                    <MdKeyboardVoice onClick={e => record(e, setmsg)} color="#fff" size={22} />
                )}
            </div>
        </div>
    );
};

export default ChatInput;
