import Container from "@/components/Container";
import { prettify } from "htmlfy";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import styled from "styled-components";
import { clickToCopy } from "utils/common";

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
                <Container classname="py-4">
                    <h1>HTML formatter</h1>
                    <textarea
                        placeholder="paste your html code..."
                        value={html}
                        onChange={e => sethtml(e.target.value)}
                    />
                    <button onClick={formatHtml} className="theme-btn">
                        format HTML
                    </button>
                    <button onClick={e => clickToCopy(e, html)} className="theme-btn copy">
                        copy code
                    </button>
                </Container>
            </PageStyle>
        </>
    );
};

export default HtmlFormatter;
const PageStyle = styled.div`
    .copy {
        background: #555;
        margin: 0 0 0 20px;
    }
    textarea {
        min-height: 200px;
        width: 100%;
        padding: 10px;
        outline: none;
        border: 2px solid blue;
        margin: 0 0 20px;
    }
`;
