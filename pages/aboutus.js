import { Styled } from "@/styles/about";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="container">
            <NextSeo
                title="About us | Frontendzone"
                description="Welcome to Frontendzone, your ultimate destination
            for all things of front-end development. Frontendzone is a
            destination to learn all frontend technologies practically with
            industry experience."
            />
            <Styled.bg className={` d-flex align-items-center position-relative`}>
                <h1>About Us</h1>
                <Image
                    src={"/images/card.jpg"}
                    alt=""
                    priority
                    layout="fill"
                    objectFit="cover
      "
                ></Image>
                <div className="bottom-left">
                    <div></div>
                    <div></div>
                </div>
            </Styled.bg>
            <div className="row my-4">
                <div className="col-md-8 col-12 my-4">
                    <h2>About Frontendzone</h2>
                    <p>
                        Welcome to <strong>Frontendzone</strong>, your ultimate destination for all
                        things of front-end development. Frontendzone is a destination to learn all
                        frontend technologies practically with industry experience.
                    </p>
                    <p>
                        We are a team of passionate <strong>front-end developers</strong> and
                        designers who are dedicated to sharing our knowledge and expertise with the
                        community. Our goal is to provide a one-stop resource for{" "}
                        <strong>front-end</strong> developers of all levels, offering tutorials,
                        articles, and resources that help you improve your skills and stay
                        up-to-date with the latest technology and trends.
                    </p>
                </div>
                <div className="col-md-4 col-12 position-relative">
                    <Image
                        src="/dev/about-frontend.png"
                        height={500}
                        style={{ objectFit: "contain" }}
                        width={500}
                        className="rounded"
                        alt="frontendzone"
                    />
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
