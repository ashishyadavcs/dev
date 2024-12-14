import { media } from "config/device";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { ismobile } from "utils/device";

const VideoAds = ({ vid }) => {
    if (ismobile()) return "";
    const [close, setclose] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setclose(p => false);
        }, 3000);
    }, []);

    return (
        <>
            {!close && (
                <Pagestyles id="vid">
                    <a
                        target="_blank"
                        className="link gradient"
                        href={`https://www.youtube.com/watch?v=${vid}`}
                    >
                        👨‍💻 watch on youtube
                    </a>
                    <span onClick={e => setclose(true)} className="closebtn">
                        &times;
                    </span>
                    <iframe
                        src={`https://www.youtube.com/embed/${vid}?si=agzj4i36VhSGpvtB&autoplay=1`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen={true}
                    />
                </Pagestyles>
            )}
        </>
    );
};

export default memo(VideoAds);

const Pagestyles = styled.div`
    z-index: 20;
    position: fixed;
    bottom: 10px;
    ${media.sm} {
        bottom: 30%;
    }
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    iframe {
        border-radius: 8px;
        z-index: 20;
    }
    .link {
        display: block;
        width: max-content;
        font-size: 12px;
        padding: 3px 10px;
        background: #fff;
        border-radius: 10px;
        color: blue;
        margin: 0 0 10px;
    }
    .closebtn {
        cursor: pointer;
        position: absolute;
        right: 100%;
        bottom: 100%;
        background: #fff;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        text-align: center;
        place-content: center;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }
`;
