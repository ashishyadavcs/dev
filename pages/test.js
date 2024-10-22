import { NextSeo } from "next-seo";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
    const [video, setvideo] = useState("");
    useEffect(() => {
        navigator.getUserMedia(
            { video: true, audio: true },
            function (stream) {
                setvideo(stream);
            },
            function (err) {
                console.log("Failed to get local stream", err);
            }
        );
    }, []);

    return (
        <video autoPlay muted src={URL.createObjectURL(video)} height={500} width={"100%"}></video>
    );
};

export default Page;
