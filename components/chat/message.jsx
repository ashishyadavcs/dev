import Image from "next/image";
import styled from "styled-components";

const Message = ({ data }) => {
    return (
        <Styledmsg onLoad={e => e.currentTarget.scrollIntoView()} className="message-container">
            <div className="message">
                <Image
                    objectFit="cover"
                    layout="fixed"
                    className="dp"
                    height={30}
                    width={30}
                    alt={data.sender}
                    src={data.senderimg}
                />
                <div className="content">
                    <span>{data.sender}</span>
                    <p>{data.msg}</p>
                    <span className="time">{data.time}</span>
                </div>
            </div>
        </Styledmsg>
    );
};

export default Message;
const Styledmsg = styled.div`
display: flex;
    .message {
        position: relative;
        margin: 0 0 20px 10px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        width: 100%;
        max-width: 70%;
        &:before {
            border-radius: 5px;
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
            border: 7px solid #fff;
            border-bottom-color: transparent;
            border-left-color: transparent;
            right: 97%;
        }
        background: #fff;
        border-radius: 0px 8px 8px 8px;
        padding: 10px;
        display: flex;
        gap: 10px;
        .dp {
            border-radius: 50%;
        }
        .content {
            width: calc(100% - 50px);
            font-size: 13px;
            p {
                word-wrap: break-word;
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
