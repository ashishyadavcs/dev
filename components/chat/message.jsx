import Image from "next/image";
import styled from "styled-components";

const Message = ({ data }) => {
    return (
        <Styledmsg onLoad={e=>e.currentTarget.scrollIntoView()} className="message">
            <Image
                objectFit="cover"
                className="dp"
                height={40}
                width={40}
                alt={data.sender}
                src={data.senderimg}
            />
            <div className="content">
                <span>{data.sender}</span>
                <p>{data.msg}</p>
                <span className="time">{data.time}</span>
            </div>
        </Styledmsg>
    );
};

export default Message;
const Styledmsg = styled.div`
    position: relative;
    margin: 0 0 20px 10px;
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
    width: max-content;
    border-radius: 0px 8px 8px 8px;
    padding: 10px;
    display: flex;
    gap: 20px;
    .dp {
        border-radius: 50%;
    }
    .content {
        font-size: 13px;
        .time {
            margin-top: 7px;
            float: right;
            font-size: 10px;
            color: #888;
        }
    }
`;
