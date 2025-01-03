import Link from "next/link";
import Script from "next/script";
import styled from "styled-components";

const Page = () => {
    return (
        <Pages className="container">
            <div className="animation">
                <lottie-player
                    preload
                    style={{ height: 300, width: 300 }}
                    src="/lottie/quiz.json"
                    background="transparent"
                    speed="1"
                    direction="1"
                    mode="normal"
                    loop
                    autoplay
                ></lottie-player>
            </div>
            <h1 className="text-center">Web development quizes</h1>
            <Link href="/quiz/css-quiz" className="theme-btn mt-4 d-block mx-auto">
                Start quiz
            </Link>
            <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        </Pages>
    );
};

export default Page;
const Pages = styled.div`
    padding: 50px 0;
    h1 {
        text-transform: capitalize;
    }
    .animation {
        height: 300px;
        margin: auto;
        width: max-content;
    }
`;
