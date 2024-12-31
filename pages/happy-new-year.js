import Container from "@/components/Container";
import Orderpop from "@/components/orderpop";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import styled from "styled-components";

const Page = () => {
    const router = useRouter();
    const { name: nname, message: mmessage } = router.query;
    const shareNow = async e => {
        e.preventDefault();
        const { fname, message } = e.target;
        await router.push({
            pathname: router.pathname,
            query: {
                name: fname.value,
                message: message.value,
            },
        });
        navigator.share({
            title: "share now",
            url: window.location.href,
        });
        document.querySelector(".formit").parentElement.click();
    };
    return (
        <StyledPage>
            <NextSeo title="happy new year 2025" />
            <Orderpop>
                <Container classname={"formit"}>
                    <form className="sharedata" onSubmit={shareNow}>
                        <input name="fname" placeholder="your friend name" type="text" />
                        <textarea
                            placeholder="add your message"
                            name="message"
                            className="textarea"
                        />
                        <button className="theme-btn">share now</button>
                    </form>
                </Container>
            </Orderpop>
            <Container>
                {nname && <h2>{nname} has sent you a message</h2>}
                <h2>{mmessage}</h2>
                <h1>Happy new year 2025</h1>
                <button
                    className="theme-btn"
                    onClick={e => {
                        document.querySelector(".formit").parentElement.classList.toggle("active");
                    }}
                >
                    share
                </button>
            </Container>
        </StyledPage>
    );
};

export default Page;
const StyledPage = styled.section`
    padding: 50px 0;
    text-align: center;
    .sharedata {
        background: #fff;
        padding: 20px;
        height: 100%;
        border-radius: 10px;
    }
`;
