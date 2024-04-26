import { NextSeo } from "next-seo";
import { useState } from "react";
import styled from "styled-components";

const Page = () => {
    const [shadow, setshadow] = useState({
        x: "0",
        y: "1",
        color: "red",
        spread: "4",
        blur: "10",
        radius: 8,
    });

    return (
        <Pages className="container">
            <NextSeo
                title="CSS BOX Shadow Generator 👨‍💻"
                description="Generate css box shadow online with this free css box shadow generator"
            />
            <h1 className="text-center title">CSS BOX Shadow Generator 👨‍💻</h1>
            <style jsx>{`
                .box {
                    box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px
                        ${shadow.color};
                    border-radius: ${shadow.radius}px;
                }
            `}</style>
            <div className="p">
                <form>
                    <label>
                        <span>color</span>
                        <input
                            onChange={e => setshadow(p => ({ ...p, color: e.target.value }))}
                            value={shadow.color}
                            className="color"
                            type="color"
                        />
                    </label>

                    <label>
                        <span>horizontal spread</span>
                        <input
                            min={0}
                            max={200}
                            onChange={e => setshadow(p => ({ ...p, x: e.target.value }))}
                            value={shadow.x}
                            type="range"
                        />
                    </label>
                    <label>
                        <span>vertical spread</span>
                        <input
                            min={0}
                            max={200}
                            onChange={e => setshadow(p => ({ ...p, y: e.target.value }))}
                            value={shadow.y}
                            type="range"
                        />
                    </label>
                    <label>
                        <span>blur</span>
                        <input
                            min={0}
                            max={200}
                            onChange={e => setshadow(p => ({ ...p, blur: e.target.value }))}
                            value={shadow.blur}
                            type="range"
                        />
                    </label>
                    <label>
                        <span>spread</span>
                        <input
                            onChange={e => setshadow(p => ({ ...p, spread: e.target.value }))}
                            value={shadow.spread}
                            type="range"
                            min={0}
                            max={200}
                        />
                    </label>
                    <label>
                        <span>border radius</span>
                        <input
                            onChange={e => setshadow(p => ({ ...p, radius: e.target.value }))}
                            value={shadow.radius}
                            type="range"
                            min={0}
                            max={200}
                        />
                    </label>
                    <textarea
                        value={`.box{
box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}p ${shadow.color};
border-radius: ${shadow.radius}px;
}`.trim()}
                    ></textarea>
                </form>

                <div className="preview">
                    <div className="box"></div>
                </div>
            </div>
        </Pages>
    );
};

export default Page;
const Pages = styled.div`
    padding: 50px 0;
    .title {
        margin-bottom: 40px;
    }
    .p {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 50px;
    }
    .box {
        height: 300px;
        width: 400px;
        background: #fff;
        max-width: 100%;
        margin: auto;
    }
    .preview {
        max-width: 100%;
        padding: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        input[type="color"] {
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            background: none;
            border: 0;
            cursor: pointer;
            height: 50px;
            padding: 0;
            width: 2em;
        }
        textarea {
            min-height: 100px;
            outline: none;
            padding: 10px;
        }
        label {
            span {
                text-transform: capitalize;
            }
            display: flex;
            padding-right: 30px;
            gap: 10px;
            align-items: center;
            background: #f1f1f17d;
            margin: 8px 0;
            width: 300px;
            justify-content: space-between;
            border: 1px solid #ddd;
            border-collapse: collapse;

            span {
                padding: 10px;
                min-width: max-content;
            }
            input,
            select {
                padding: 10px;
                outline: none;
                font-size: 18px;
                border: 1px solid #ddd;
                margin: 0 !important;
                /* max-width: 80px; */
            }
            select {
                cursor: pointer;
            }
        }
        input {
            ::-webkit-slider-thumb {
                -webkit-appearance: none; /* Override default look */
                appearance: none;
                width: 25px; /* Set a specific slider handle width */
                height: 5px; /* Slider handle height */
                background: #04aa6d; /* Green background */
                cursor: pointer; /* Cursor on hover */
            }
            &.color {
                height: 20px;
            }
        }
    }
`;
