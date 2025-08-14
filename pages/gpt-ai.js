import Container from "@/components/Container";
import { media } from "config/device";
import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import styled from "styled-components";

const Test = () => {
    const [answer, setanswer] = useState(false);

    const generateResponse = useCallback(async e => {
        try {
            e.preventDefault();

            let submitter = e.target.querySelector(".btn");
            submitter.textContent = "Generating...";
            const formData = new FormData(e.target);
            const prompt = formData.get("prompt");
            const response = await fetch("/api/openai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });
            if (!response.ok) {
                throw Error("Failed to generate response. Please try again.");
            }
            const { data } = await response.json();
            setanswer(data);
            submitter.textContent = "Generate";
            e.target.reset();
        } catch (err) {
            setanswer(null);
            submitter.textContent = "Generate";
            toast.error(err.message);
        }
    }, []);

    return (
        <Styledpage>
            <Container classname="py-4">
                {answer && <ReactMarkdown>{answer}</ReactMarkdown>}
                <form className="form" onSubmit={generateResponse}>
                    <textarea
                        name="prompt"
                        className="textarea"
                        required
                        placeholder="enter your prompt"
                    ></textarea>
                    <button className="btn">Generate</button>
                </form>
            </Container>
        </Styledpage>
    );
};

export default Test;

const Styledpage = styled.div`
    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }
    ol,
    ul {
        list-style-position: inside;
        margin: 0 0 20px;
        li {
            margin: 0 0 10px;
        }
    }

    .textarea {
        min-height: 150px;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ddd;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        background: #0070f3;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: bold;
        align-self: flex-start;
        ${media.sm} {
            width: 100%;
        }

        &:hover {
            background: #0060df;
        }
    }
`;
