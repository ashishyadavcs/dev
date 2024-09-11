import Image from "next/image";
import { convertFileToURL, ShowMessageData } from "chat/utils/index";
import Styledmsg from "chat/styles/message.styled";

const Message = ({ data, setuserinfo }) => {
    const updateImage = async src => {
        await setuserinfo(p => ({ ...p, senderimg: src }));
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
                            accept="image/*"
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
                        <span className="username">{data.sender?.substring(10)}</span>
                        {ShowMessageData(data)}
                        <span className="time">
                            {new Date(data.time).toLocaleTimeString(navigator.language, {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                    </div>
                </div>
            ) : (
                <span className="chat-join">{data.msg}</span>
            )}
        </Styledmsg>
    );
};

export default Message;

