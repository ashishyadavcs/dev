import { NextSeo, ProductJsonLd } from "next-seo";
import React, { useState } from "react";
import { fontStyles } from "fontmap/fontmap";
import styled from "styled-components";
const BoldFontGenerator = () => {
    const [inputText, setInputText] = useState("Linkedin post");
    const [copiedText, setCopiedText] = useState("");

    // Predefined font maps for A-Z and a-z

    // Function to transform text using a given font map
    const transformText = (text, map) => {
        return text
            .split("")
            .map(char => map[char] || char) // Replace with mapped character or keep original
            .join("");
    };

    const handleCopy = text => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 1500);
    };

    return (
        <Pagestyle
            style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "2rem" }}
        >
            <NextSeo
                title="LinkedIn Bold text Formatter 🚀 copy & paste"
                description="Generate linkedin bold text online for your linkedin post to make font bold , italic and other styles "
            />
            <ProductJsonLd
                productName={"LinkedIn Bold text Formatter 🚀"}
                type="Product"
                brand="frontendzone"
                description={`Generate linkedin bold text online for your linkedin post to make font bold , italic and other styles`}
                aggregateRating={{
                    worstRating: "1",
                    bestRating: "5",
                    ratingValue: "4.5",
                    ratingCount: "1871",
                }}
            />
            <div className="banner">
                <h1>LinkedIn Bold text Formatter</h1>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Type your text here..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        marginBottom: "20px",
                        fontSize: "16px",
                    }}
                />
            </div>
            <div style={{ marginTop: "20px" }}>
                {fontStyles.map(({ name, map }) => {
                    const styledText = transformText(inputText, map);
                    return (
                        <div key={name} style={{ marginBottom: "10px" }}>
                            <h3>{name}</h3>
                            <p
                                style={{
                                    padding: "10px",
                                    background: "#f4f4f4",
                                    borderRadius: "5px",
                                    display: "inline-block",
                                    maxWidth: "80%",
                                    wordWrap: "break-word",
                                }}
                            >
                                {styledText || "Your styled text will appear here..."}
                            </p>
                            <button
                                onClick={() => handleCopy(styledText)}
                                style={{
                                    marginLeft: "10px",
                                    padding: "5px 10px",
                                    border: "none",
                                    borderRadius: "3px",
                                    background: "#0073b1",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >
                                {copiedText === styledText ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </Pagestyle>
    );
};

export default BoldFontGenerator;
const Pagestyle = styled.div`
    .banner {
        padding: 10px 0 0;
        position: sticky;
        top: 59px;
        background: #fff;
        z-index: 2;
    }
`;
