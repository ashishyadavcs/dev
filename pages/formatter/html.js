import Container from "@/components/Container";
import { media } from "config/device";
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
                title="HTML formatter online 🔥"
                description="prettify your html code with html formatter"
            />
            <PageStyle>
                <Container classname="py-4">
                    <div className="tool">
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
                    </div>

                    <h2>HTML Formatter Online</h2>
                    <p>
                        HTML Formatter Online Tool – Beautify Your Code Instantly! Are you
                        struggling with messy and unorganized HTML code? Our HTML Formatter tool is
                        here to help! Whether you're a web developer, designer, or coding
                        enthusiast, this free online tool makes your code clean, readable, and
                        error-free in just a few clicks.
                    </p>
                    <h2>What is an HTML Formatter?</h2>
                    <p>
                        An HTML Formatter, also known as an HTML beautifier or code prettifier,
                        organizes your HTML code into a clear, structured, and indented format. It
                        improves code readability, making it easier to debug and maintain.
                    </p>

                    <h2>Key Features of Our HTML Formatter</h2>
                    <ul>
                        <li>
                            <strong>Code Beautification:</strong> Automatically adds proper
                            indentation and spacing for better readability.
                        </li>
                        <li>
                            <strong>Minification Support:</strong> Compress your HTML code to reduce
                            file size for faster website loading.
                        </li>
                        <li>
                            <strong>Error Detection:</strong> Identifies and highlights common HTML
                            syntax errors.
                        </li>
                        <li>
                            <strong>Customizable Formatting:</strong> Choose your desired
                            indentation style and size (tabs or spaces).
                        </li>
                        <li>
                            <strong>Copy and Download Options:</strong> Easily copy formatted code
                            or download it as an HTML file.
                        </li>
                    </ul>
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
    .tool {
        margin: 0 0 100px;
    }
    ul {
        list-style-position: inside;
        line-height: 1.5;
        ${media.sm} {
            li {
                margin: 0 0 10px;
            }
        }
    }
    textarea {
        min-height: 200px;
        width: 100%;
        padding: 10px;
        outline: none;
        border: 2px solid blue;
        margin: 0 0 20px;
    }
    h2 {
        margin: 50px 0 10px;
    }
`;
