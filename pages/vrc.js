import { media } from "config/device";
import React, {useState} from "react";
import styled from "styled-components";

const Page = () => {
    var recorder;
    const [chunks, setchunks] = useState([])
    try {
        const video = document.querySelector("video");
        if (typeof navigator == "undefined") return;
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: true,
            })
            .then(stream => {
                video.srcObject = stream;
                recorder=new MediaRecorder(stream)
                recorder.addEventListener('dataavailable',e=>{
                    setchunks(prev=>[...prev,e.data])
                })
            });
    } catch {}
    const startRecord=()=>{
        recorder.start()
    }
    const stopRecord=()=>{
        recorder.stop()
    }
    return (
        <Pagestyle className="vrc container">
            <ul className="filter">
                {[...Array(3)].map(el => {
                    return <li></li>;
                })}
            </ul>
            <video autoPlay src="https://www.youtube.com/watch?v=F2t5Ji8hsD4"></video>
            <ul className="action">
                {[...Array(2)].map(el => {
                    return (
                        <li>
                            <button title="capture"></button>
                        </li>
                    );
                })}
            </ul>
        </Pagestyle>
    );
};

export default Page;
const Pagestyle = styled.div`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        flex-direction: column;

        &.filter {
            height: 100%;
            li {
                border-radius: 10px;
                height: 150px;
                width: 200px;
                background: #ddd;
                margin-bottom: 10px;
            }
        }
        li {
            display: inline-block;
            button {
                height: 50px;
                width: 50px;
                background: red;
                border-radius: 50%;
                border: 10px solid #ddd;
            }
        }
        &.action {
            gap: 20px;
            li:last-child {
                background: #fff;
            }
        }
    }
    video {
        height: 500px;
        width: 100%;
    }
    ${media.sm} {
        flex-direction: column;
        ul{
            flex-direction: row;
            flex-wrap: wrap;
            li{width:100%}
        }
    }
`;
