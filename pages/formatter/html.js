import { prettify } from "htmlfy";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import styled from "styled-components";

const HtmlFormatter = () => {
    const [html, sethtml] = useState("");
    const formatHtml = () => {
        const formatted = prettify(html, { ignore: ["style"], tab_size: 4 });
        sethtml(formatted);
    };
    return (
        <>
            <NextSeo
                title="html formatter"
                description="prettify your html code with html formatter"
            />
            <PageStyle>
                <div className="container py-4">
                    <textarea
                        placeholder="paste your html code..."
                        value={html}
                        onChange={e => sethtml(e.target.value)}
                    />
                    <button onClick={formatHtml} className="theme-btn">
                        format
                    </button>
                </div>
            </PageStyle>
        </>
    );
};

export default HtmlFormatter;
const PageStyle = styled.div`
    textarea {
        min-height: 200px;
        width: 100%;
        padding: 20px;
        outline: none;
        border: 2px solid #ddd;
        margin: 0 0 20px;
    }
`;
