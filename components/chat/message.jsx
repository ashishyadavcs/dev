import Image from "next/image";
import styled from "styled-components";
import { convertFileToURL, ShowMessageData } from "utils/chat";

const Message = ({ data, setuserinfo }) => {
    const updateImage = async src => {
        await setuserinfo(p => ({ ...p, image: src }));
    };
    return (
        <Styledmsg onLoad={e => e.currentTarget.scrollIntoView()} className="message-container">
            {data.type === "message" ? (
                <div className={`message ${data.reciever && "recieved"}`}>
                    <label className="profile">
                        <input
                            hidden
                            type="file"
                            onChange={async e => {
                                const url = await convertFileToURL(e.target.files[0]);
                                await updateImage(url);
                            }}
                            accept="images/*"
                        />
                        <Image
                            objectFit="cover"
                            layout="fixed"
                            className="dp"
                            height={30}
                            width={30}
                            alt={data.sender}
                            src={data.senderimg}
                        />
                    </label>
                    <div className="content">
                        <span>{data.sender}</span>
                        {ShowMessageData(data)}
                        <span className="time">{new Date(data.time).toLocaleTimeString()}</span>
                    </div>
                </div>
            ) : (
                <span className="chat-join">new student joined chat</span>
            )}
        </Styledmsg>
    );
};

export default Message;
const Styledmsg = styled.div`
    display: flex;
    &:has(.recieved) {
        justify-content: flex-end;
    }
    &:has(.chat-join) {
        justify-content: center;
    }
    .chat-join {
        border-radius: 10px;
        padding: 3px 10px;
        background: #f1f1f1;
        font-size: 10px;
        margin-bottom: 4px;
        &:last-child {
            margin-bottom: 10px;
        }
    }
    .message {
        position: relative;
        margin: 0 0 20px 10px;
        --fcolor: blue;
        filter: drop-shadow(0 1px 2px var(--fcolor));
        width: 100%;
        max-width: 70%;
        &:has(audio) {
            max-width: 90%;
        }
        &:before,
        &:after {
            border-radius: 5px;
            content: "";
            display: inline-block;
            position: absolute;
            border: 10px solid #fff;
            border-bottom-color: transparent;
            border-left-color: transparent;
            right: 97%;
            z-index: -1;
            top: 0;
        }
        &:after {
            right: 97%;
            z-index: 3;
            filter: none;
        }
        &.recieved {
            --fcolor: red;
            margin: 0 10px 20px 0;
            border-top-left-radius: 16px;
            border-top-right-radius: 0;
            &::before,
            &:after {
                left: 97%;
                right: unset;
                transform: rotate(267deg);
            }
        }

        background: #fff;
        border-radius: 16px;
        border-top-left-radius: 0;
        padding: 10px;
        display: flex;
        gap: 10px;
        .dp {
            border-radius: 50%;
        }
        .content {
            width: calc(100% - 50px);
            font-size: 13px;
            display: flex;
            flex-direction: column;
            audio {
                margin: 5px 0;
                transform: scale(0.6) translateX(-40%);
            }
            p {
                word-wrap: break-word;
                font-size: 18px;
            }
            .time {
                margin-top: 7px;
                float: right;
                font-size: 10px;
                color: #888;
            }
        }
    }
`;
