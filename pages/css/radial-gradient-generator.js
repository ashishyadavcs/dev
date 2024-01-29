import Banner from "@/components/web/banner";
import { useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { media } from "config/device";
import {NextSeo} from "next-seo";
import {clickToCopy} from "utils/common";

const Page = () => {
    const [gradient, setgradient] = useState({
        color1: "red",
        color2: "green",
        angle: "",
    });
    return (
        <>
        <NextSeo title="CSS Radial Gradient Generator" description="Generate css radial gradient online with this css tool - online css radial gradient generator"/>
            <style jsx>{`
                .preview {
                    background-image: radial-gradient(${gradient.color1}, ${gradient.color2});
                }
            `}</style>
            <Banner title="CSS radial gradient generator" />
            <Radient className="container my-3">
                <div className="inputs">
                    <div className="field">
                        <label>
                            <span>color1</span>
                            <SketchPicker className="picker"
                                color={gradient.color1}
                                onChange={(color, e) => {
                                    setgradient(p => ({ ...p, color1: color.hex }));
                                }}
                            />
                        </label>
                        <label>
                            <span>color2</span>
                            <SketchPicker className="picker"
                                color={gradient.color2}
                                onChange={(color, e) => {
                                    setgradient(p => ({ ...p, color2: color.hex }));
                                }}
                            />
                        </label>
                    </div>
                    <div className="code">
                        <span>{`
                    background-image:radial-gradient(
                        ${gradient.color1},
                        ${gradient.color2}
                    );
                    `}</span>
                    <button className="theme-btn" onClick={e=>clickToCopy(e,e.currentTarget.previousElementSibling.textContent)}> copy css</button>
                    </div>
                </div>
                <div className="preview"></div>
            </Radient>
        </>
    );
};

export default Page;
const Radient = styled.section`
    display: flex;
    ${media.sm} {
        flex-wrap: wrap;
    }
    .inputs {
        width: 50%;
        ${media.sm} {
            width: 100%;
        }
        label {
            span {
                margin-bottom: 10px;
                display: block;
                ${media.sm}{
                    text-align: center;
                }
            }
        }
        .field {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            ${media.sm}{
                .picker{width:91%!important}
            }
        }
        .code {
            position: sticky;
            display: flex;
            bottom: 0;
            box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
            z-index: 2;
            margin-top: 20px;
            background: #fff;
            padding: 10px;
            ${media.sm}{
                flex-direction: column;
                align-items: center;
                gap: 20px;
                bottom: 60px;
            }
        }
    }
    gap: 50px;
    input::-webkit-slider-thumb {
        padding: 30px;
    }
    .preview {
        height: 400px;
        width: 50%;
        ${media.sm} {
            width: 100%;
        }
    }
`;
