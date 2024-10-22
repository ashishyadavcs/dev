import { media } from "config/device";
import { cv } from "public/data/cv";
import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";
import Template from "./template";

const CVcreater = () => {
    const [data, setdata] = useState(cv);
    const changeFieldValue = (b_index, f_index, l_index, value) => {
        const arr = data;
        arr[b_index].data[f_index].fields[l_index].value = value;
        setdata([...arr]);
    };
    const addBlock = async block_index => {
        const arr = data;
        const toduplicate = arr[block_index].data[0];
        arr[block_index].data = arr[block_index].data.concat(toduplicate);
        await setdata([...arr]);

        const el = document.querySelector(".details");
        const scrollH = el.parentElement.firstChild.clientHeight;
        el.scrollBy(0, scrollH);
    };

    return (
        <CVStyles>
            <div className="details">
                {[...data].map((b, block_index) => (
                    <div className="block">
                        <h3>{b.block}</h3>
                        {b.data.map((fs, fi) => (
                            <div className="fields">
                                <span>
                                    {b.block}-{fi + 1}
                                </span>
                                {fs.fields.map((f, li) => (
                                    <label>
                                        <span>{f.label}</span>
                                        <input
                                            value={f.value}
                                            onChange={e =>
                                                changeFieldValue(
                                                    block_index,
                                                    fi,
                                                    li,
                                                    e.target.value
                                                )
                                            }
                                            type={f.type}
                                        />
                                    </label>
                                ))}
                            </div>
                        ))}
                        {block_index > 0 && (
                            <button onClick={e => addBlock(block_index)}>
                                add more {b.block}
                                <FaPlusCircle />
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className="preview">
                <Template data={data} />
            </div>
        </CVStyles>
    );
};

export default CVcreater;
const CVStyles = styled.section`
    display: flex;
    .preview {
        padding: 20px;
        overflow: hidden;
    }
    .details {
        scroll-behavior: smooth;
        ${media.minsm} {
            width: 30%;
            flex-shrink: 0;
        }
        padding: 10px;
        background: #f1f1f1;
        height: 90vh;
        overflow: auto;

        .block {
            border: 1px solid;
            margin-bottom: 20px;
            padding: 10px;
            .fields {
                &:not(:first-child) {
                    margin-top: 10px;
                }
            }
            label {
                display: flex;
                flex-direction: column;
                gap: 5px;
                textarea {
                    border: 2px solid #ddd;
                    outline: none;
                    min-height: 100px;
                    padding: 10px;
                    font-size: inherit;
                }
            }
        }
    }
`;
