import styled from "styled-components";

const Template = ({ data }) => {
    return (
        <TemplateStyle className="resume">
            <div className="body">
                <div className="left"></div>
                <div className="right">
                    <span className="separetor"></span>
                </div>
            </div>
        </TemplateStyle>
    );
};

export default Template;
const TemplateStyle = styled.div`
    height: 800px;
    width: 500px;
    .body {
        display: flex;
        width: 100%;
        height: 100%;
        --width: 40%;
        .left {
            width: var(--width);
        }
        .right {
            width: calc(100% - var(--width));
            flex-shrink: 0;
            .separetor {
                display: inline-block;
                height: 100%;
                width: 2px;
                background: #000;
            }
        }
    }
`;
