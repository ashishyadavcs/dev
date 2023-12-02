import { media } from "config/device";
import React, { useEffect, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import styled from "styled-components";

const Page = () => {
    var recorder;
    var chunks = [];
    const [files, setFiles] = useState([]);
    const [state, setState] = useState(false);
      if(typeof document=='undefined') return
        const video = document.querySelector("video");
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: true,
            })
            .then(stream => {
                video.srcObject = stream;
                recorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp9" });
                recorder.start()
                recorder.onstart = e => {
                    chunks = [];
                };
                recorder.ondataavailable = e => {
                    console.log(e);
                    chunks.push(e.data);
                };
                recorder.onstop = e => {
                    console.log("stop", e);
                    const blob = new Blob(chunks, { type: "video/mp4" });
                    setFiles(prev => [...prev, blob]);
                };
            });


    const record = () => {
        if (typeof recorder == "undefined") return;
       recorder.stop()
        setState(!state)
    };
    return (
        <Pagestyle className="vrc">
            <div className="saved">
                <div className="header">
                    <span>Recorded files</span>
                </div>
                <ul className="files">
                    {files.map(el => (
                        <li>
                            <video controls autoPlay src={URL.createObjectURL(el)}></video>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="camera">
                <div className="header">
                    <h2>recorder</h2>
                </div>
                <div className="recorder">
                    <video autoPlay src="https://www.youtube.com/watch?v=F2t5Ji8hsD4"></video>
                </div>
            </div>
            <div className="action">
                <button
                    className="theme-btn"
                    onClick={e => {
                        e.currentTarget.classList.toggle("active");
                        record();
                    }}
                    title="capture"
                >
                    {state ? "start" : "Stop"}
                </button>
            </div>
        </Pagestyle>
    );
};

export default Page;
const Pagestyle = styled.div`
    background: #4fffb0;
    box-sizing: border-box;
    height: 90vh;
    .header {
        position: sticky;
        top: 0;
        background: #fff;
        padding: 10px;
        z-index: 2;
        font-size: 18px;
    }
    * {
        transition: all 0.3s;
    }
    --gap: 20px;
    display: grid;
    grid-template-columns: 20% calc(60% - var(--gap) * 2) 20%;
    align-items: center;
    gap: var(--gap);

    .camera {
        .header {
            text-align: center;
            color: red;
        }
        .recorder {
            border-radius: 10px;
            overflow: hidden;
            min-height: 500px;
            max-width: 100%;
        }
    }
    .saved {
        overflow: auto;
        height: 100%;
        ul {
            padding: 10px;
        }
        video {
            width: 100%;
        }
    }
    .action {
    }
    ${media.sm}{
        grid-template-columns: auto;
    }
`;
