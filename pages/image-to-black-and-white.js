import Inpostad from "@/components/ads/inpostad";
import { media } from "config/device";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import styled from "styled-components";

const Page = () => {
    const [image, setimage] = useState({
        original: "",
        converted: "",
        type: "",
    });
    function convertToBlackAndWhite() {
        document.querySelector(".convertbtn").innerHTML = "converting...";

        const input = document.getElementById("imageInput");
        const canvas = document.getElementById("canvas");
        const downloadBtn = document.getElementById("downloadBtn");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = brightness;
                    data[i + 1] = brightness;
                    data[i + 2] = brightness;
                }

                ctx.putImageData(imageData, 0, 0);
                setimage(p => ({ ...p, converted: canvas.toDataURL(image.type) }));
                document
                    .querySelector(".converted")
                    ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                downloadBtn.href = canvas.toDataURL(image.type);
                toast.success("converted");
                document.querySelector(".convertbtn").innerHTML = "converted";
            };
        };

        if (input.files[0]) {
            reader.readAsDataURL(input.files[0]);
        }
    }
    return (
        <PageStyle className="container py-4">
            <NextSeo
                title="Convert color image / photo to black and white"
                description="Frontendzone black and white image converter is ther tool to convert image to black & white"
                canonical={`${process.env.NEXT_PUBLIC_APP_URL}/image-to-black-and-white`}
                openGraph={{
                    type: "software",
                    url: process.env.NEXT_PUBLIC_APP_URL + "/image-to-black-and-white",
                    title: `Convert color image / photo to black and white`,
                    description: `Frontendzone black and white image converter is ther tool to convert image to black & white`,

                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_APP_URL}/images/image-black-and-white-converter.webp`,
                            width: 1280,
                            height: 860,
                            alt: "black and white image converter",
                            type: "image/webp",
                        },
                    ],
                    siteName: "black and white image converter",
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: "image to black and white, black and white image converter",
                    },
                ]}
            />
            <input
                onChange={e => {
                    if (!e.target.files[0]) return;
                    try {
                        setimage(p => ({
                            converted: "",
                            type: e.target.files[0].type,
                            original: URL.createObjectURL(e.target.files[0]),
                        }));
                    } catch {}
                }}
                type="file"
                accept="image/*"
                id="imageInput"
            />
            <div className="row">
                <div className="col-md-6">
                    {image.original && <img alt="original" width="100%" src={image.original} />}
                </div>
                <div className="col-md-6">
                    <img className="converted" width="100%" src={image.converted} />
                </div>
            </div>
            <canvas id="canvas"></canvas>
            <Inpostad />
            <div className="d-flex action justify-content-center gap-10">
                <button
                    className={`theme-btn convertbtn a ${image.original && "active"}`}
                    onClick={e => convertToBlackAndWhite()}
                >
                    {image.converted ? "converted" : "convert"}
                </button>

                <a
                    id="downloadBtn"
                    className={`a theme-btn ${image.converted && "active"}`}
                    download="converted.png"
                    href="#"
                >
                    Download
                    <FaCloudDownloadAlt />
                </a>
            </div>

            <h1>convert Image to black and white</h1>
            <p>
                Frontendzone black and white image converter is ther tool to convert image to black
                & white
            </p>
            <h2>How to use this tool</h2>
            <p>
                This tool is very easy to use, just upload image and click convert button and your
                color image will be converted into black and white image. Now you can download your
                image.
            </p>
            <img
                layout="responsive"
                width={1280}
                height={860}
                src="/images/image-black-and-white-converter.webp"
                alt="image to black and white converter"
            />
        </PageStyle>
    );
};

export default Page;
const PageStyle = styled.div`
    img {
        max-width: 100%;
        height: auto;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    .action {
        gap: 20px;
        position: sticky;
        bottom: 0;
        width: max-content;
        max-width: 100%;
        background: #fff;
        border-radius: 50px;
        ${media.sm} {
            bottom: 72px;
            border-radius: 0;
            width: 100%;
        }
        padding: 10px;

        margin: 30px auto;
    }
    @keyframes ging {
        0% {
            transform: translateY(2px);
        }
        100% {
            transform: translateY(-2px);
        }
    }
    .action .a {
        display: flex;
        align-items: center;
        gap: 7px;
    }
    .action a.active {
        svg {
            animation: ging 1s linear infinite alternate;
        }
    }
    .action .a:not(.active) {
        opacity: 0.5;
        pointer-events: none;
    }
    #canvas {
        display: none;
    }
    input {
        width: max-content;
        margin: 20px auto !important;
        display: block;
        max-width: 100%;
        cursor: pointer;
        border-radius: 50px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
`;
