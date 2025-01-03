import { media } from "config/device";

import styled from "styled-components";
const Page = () => {
    return (
        <UI className="container my-4">
            <h1>Animation</h1>
            <p>animation can be implemented with help of css and js</p>
            <h2>CSS Animation</h2>
            for css animation @keyframes is used to define animation
            <pre>
                <code>
                    {`@keyframes animationName{
            0%{css}
            100%{css}
        }`}
                </code>
            </pre>
            <h2>JS Animation</h2>
            <p>
                {" "}
                JavaScript animation events are events triggered during the lifecycle of animations.
                These events can be used to control and respond to animations in web applications.
                The following are some common animation events in JavaScript:
            </p>
            <ul>
                <li>
                    <strong> ✅ animationstart:</strong> This event is triggered when a CSS
                    animation starts. You can use it to perform actions when an animation begins.
                </li>
                <li>
                    <strong>✅ animationend:</strong> This event is fired when a CSS animation
                    completes. You can use it to trigger actions when the animation finishes.
                </li>

                <li>
                    <strong>✅ transitionend:</strong> While not a true animation event, it is an
                    event used with CSS transitions. It fires when a CSS transition finishes, making
                    it useful for handling the end of a transition effect.
                </li>
            </ul>
            <p>
                ✳ You can use these events in conjunction with CSS animations and transitions to
                create interactive and dynamic web experiences. Make sure to attach these event
                listeners to the relevant HTML elements that have the animations or transitions
                applied to them.
            </p>
            <pre>
                <code>
                    {`
        addEventListener("animationend", () => {})

        addEventListener("animationstart", () => {})

        
        `}
                </code>
            </pre>
        </UI>
    );
};

export default Page;
const UI = styled.div`
    h1 {
        font-size: 50px !important;
        text-align: center;
    }
    ul {
        list-style-position: inside;
        margin: 20px 0;
        li {
            margin-bottom: 10px;
        }
        strong {
            margin-right: 10px;
        }
    }
    code {
        margin: 1rem 0;
        overflow: auto;
        ${media.minsm} {
            width: max-content;
        }
        display: block;
        line-height: 1.5;
        background: #020238;
        border-radius: 8px;
        color: #fff;
        padding: 2rem 1rem;
    }
`;
