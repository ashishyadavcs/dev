import Chatimg from "@/components/chat/image";
import socket from "@/components/chat/socket";
import { sounds } from "@/components/chat/sounds";

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
export const playSound = src => {
    const ss = new Audio(src);
    ss.play();
    setTimeout(() => {
        ss.pause();
    }, 5000);
};

export const savemessage = async (setList, data) => {
    await setList(prev => [
        ...prev,
        {
            reciever: false,
            type: "message",
            msg: "",
            file: "",
            audio: "",
            time: "12:00pm",
            sender: "ashish",
            senderimg: "/ashish.jpg",
            ...data,
        },
    ]);
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

export const ShowMessageData = data => {
    return (
        <>
            {data.file && data.file.type.includes("image") && <Chatimg src={data.file.url} />}
            {data.file && data.file.type.includes("video") && (
                <video width={"100%"} controls type="video/mp4" src={data.file.url} />
            )}
            {data.audio && <audio controls src={data.audio} />}

            <p>{data.msg}</p>
        </>
    );
};
