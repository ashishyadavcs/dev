import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import styled from "styled-components";

const Geminiai = () => {
    const [data, setdata] = useState("");
    const [propmt, setpropmt] = useState("");
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const getresult = async e => {
        e.preventDefault();
        const btn = e.target.querySelector(".ai-sub");
        btn.innerText = "generating...";

        try {
            const result = await fetch("/api/ai", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    query: propmt,
                }),
            }).then(res => res.json());

            setdata(result.data);
            btn.innerText = "generate answer";
            if (!result.success) {
                toast.error("model is busy try after sometimes...");
            }
        } catch (err) {
            btn.innerText = "generate answer";
            toast.error("model is busy try afetr sometimes...");
        }
    };

    return (
        <AIStyle>
            {data && (
                <div
                    className="result"
                    
                >
                    <ReactMarkdown>
                        {data.response.candidates[0].content.parts[0].text}
                    </ReactMarkdown>
                </div>
            )}
            <form className="ai" onSubmit={getresult}>
                <input
                    required
                    value={propmt}
                    placeholder="write your propmt..."
                    onChange={e => {
                        setpropmt(e.target.value);
                    }}
                    type="text"
                />
                <button type="submit" className="ai-sub">
                    generate answer
                    <FaArrowUp />
                </button>
            </form>
        </AIStyle>
    );
};

export default Geminiai;
const AIStyle = styled.div`
    form {
        margin: 20px auto;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: 2px solid blue;
        overflow: hidden;
        &:invalid {
            button {
                pointer-events: none;
            }
        }
        input {
            height: 100%;
            background: transparent;
            border: none;
            margin: 0 !important;
        }
        button {
            background: transparent;
            display: flex;
            gap: 10px;
            align-items: center;
            background: blue;
            color: #fff;
            height: 100%;
            padding: 5px 10px;
            min-height: 45px;
        }
    }
    .result {
        background: #f1f1f1;
        padding: 20px;
        border-radius: 20px 40px;
        ul {
            list-style: inside;
           &,li{
             list-style-position: inside;
           }
        }
    }
`;
