import Chatimg from "@/components/chat/image";
import socket from "@/components/chat/socket";
import { sounds } from "@/components/chat/sounds";
import { FaFile, FaFilePdf } from "react-icons/fa";

export const record = (e, setmsg) => {
    let chunks = [];
    navigator.mediaDevices
        .getUserMedia({
            audio: true,
            video: false,
        })
        .then(stream => {
            var recorder = new MediaRecorder(stream);
            if (!e.target.classList.contains("recording")) {
                e.target?.classList.add("recording");
                recorder.start();
            } else {
                recorder.stop();
                e.target?.classList.remove("recording");
            }

            recorder.ondataavailable = ({ data }) => {
                chunks.push(data);
            };
            recorder.onstop = () => {
                const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" });
                chunks = [];
                const url = URL.createObjectURL(blob);
                setmsg(prev => [
                    ...prev,
                    {
                        msg: "",
                        audio: url,
                        time: "12:00pm",
                        sender: "ashish",
                        senderimg: "/ashish.jpg",
                    },
                ]);
                return url;
            };
        });
};
const ss = new Audio();
export const playSound = src => {
    ss.src = src;
    ss.play();
    setTimeout(() => {
        ss.pause();
    }, 5000);
};
export const stopSound = () => {
    ss.pause();
};

export const savemessage = async (setList, data) => {
    const messageFromat = {
        reciever: false,
        type: "message",
        msg: "",
        file: "",
        audio: "",
        time: new Date().getTime(),
        sender: "ashish",
        senderimg: "/images/profile.jpg",
    };
    await setList(prev => [...prev, { ...messageFromat, ...data }]);
};

export const sendMSG = async (setmsg, data) => {
    socket.emit(eventsType.message, data);
    playSound(sounds.send);
    document.querySelector(".inputs .msg").innerHTML = "";
    savemessage(setmsg, data);
};

export const openChat = () => {
    document.querySelector("#chat .head").classList.remove("active");
};
export const closeChat = () => {
    document.querySelector("#chat .head").classList.add("active");
};

export const eventsType = {
    join: "join",
    message: "message",
    typing: "typing",
    profile_update: "profile",
    videocall: "videocall",
};

export const convertFileToURL = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
};

export const setMessage = async (e, setmsg) => {
    const file = e.target.files[0];
    const url = await convertFileToURL(e.target.files[0]);
    setmsg(p => ({
        ...p,
        file: { name: file.name, url, type: file.type },
    }));
};

export const download = (src, name) => {
    const da = document.createElement("a");
    da.href = src || "";
    da.download = name || "downloadchatfile";
    da.click();
    try {
        document.removeChild(da);
    } catch (er) {}
};
export const checkLinkType = msg => {
    if (!msg) return;
    if (msg.includes("http")) {
        return (
            <a rel="noreferrer" target="_blank" href={msg}>
                {msg}
            </a>
        );
    } else {
        return msg;
    }
};
export const ShowMessageData = data => {
    return (
        <>
            {data.file && data.file.type.includes("image") && <Chatimg src={data.file.url} />}
            {data.file && data.file.type.includes("video") && (
                <video width={"100%"} controls type="video/mp4" src={data.file.url} />
            )}
            {data.file &&
            !data.file.type.includes("application") &&
            data.file.type.includes("application/pdf") ? (
                <FaFilePdf
                    onClick={e => download(data.file.url, data.file.name)}
                    size={40}
                    color="red"
                />
            ) : (
                data.file &&
                data.file.type.includes("application") && (
                    <FaFile onClick={e => download(data.file.url, data.file.name)} size={40} />
                )
            )}
            {data.audio && <audio controls src={data.audio} />}

            {checkLinkType(data.msg)}
        </>
    );
};
