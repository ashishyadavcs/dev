import Geminiai from "@/components/geminiai";
import styled from "styled-components";

const Page = () => {
    return (
        <StyledAI className="container">
            <h1 className="text-center">Ask your question with AI</h1>
            <Geminiai />
        </StyledAI>
    );
};

export default Page;
const StyledAI=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 300px;
`
