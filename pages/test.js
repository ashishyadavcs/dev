import Image from "next/image";
import React, { useEffect, useState } from "react";
const Test = () => {
  useEffect(() => {
    const video = document.querySelector("video");
    // Navigator video stream
    async function videoStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        // Set video source
        video.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    }
    videoStream();
  }, []);

  return (
    <>
      <div className="container">
        <video autoPlay></video>
      </div>
    </>
  );
};

export default Test;
