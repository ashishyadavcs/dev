import Banner from "@/components/web/banner";
import styled from "styled-components";
import Image from "next/image";
import { media } from "config/device";
import { shadow } from "config/shadow";
import { projects } from "public/data/projects";
const Page = () => {
    return (
        <Pages>
            <Banner
                image={{
                    src: "/images/projects.jpg",
                    objectFit: "cover",
                }}
                description={`
                Below, you’ll find a selection of my work that best represents my skills in frontend development. Each project is a testament to my commitment to quality, innovation, creativity, efficiency. and showcases the breadth of my expertise.
                `}
                title={"My Previous Works"}
                height="40vh"
            />
            <section className=" container">
                <div className="items">
                    {[...projects].map(p => {
                        return (
                            <a
                                referrerPolicy="noreferrer"
                                target="_blank"
                                href={p.url}
                                className="project"
                            >
                                <Image
                                    height={300}
                                    width={400}
                                    layout="responsive"
                                    src={"/images/projects.jpg"}
                                    onError={e => (e.currentTarget.src = "/images/projects.jpg")}
                                />
                                <div className="content">
                                    <h2>{p.title}</h2>
                                    <h3>Technology Used</h3>
                                    <ul className="tech">
                                        {p.techs.map(t => (
                                            <li>{t}</li>
                                        ))}
                                    </ul>
                                    <span className="type">{p.type}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>
        </Pages>
    );
};

export default Page;
const Pages = styled.div`
    position: relative;
    .items {
        margin: 30px 0;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        ${media.sm} {
            grid-template-columns: auto;
        }
        .project {
            box-shadow: ${shadow.card};
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            .type {
                text-transform: capitalize;
                color: limegreen;
                padding: 4px 8px;
                display: inline-block;
                margin-top: 20px;
            }
            img {
                transition: all 0.3s;
            }

            &:hover {
                img {
                    transform: scale(1.3);
                    object-position: left;
                }
            }
            h2 {
                background: linear-gradient(to right, #ff00f1, blue);
                background-clip: text;
                font-size: 18px;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            h3 {
                font-size: 14px;
            }
            .content {
                padding: 20px;
            }
            .tech {
                display: flex;
                list-style: none;
                flex-wrap: wrap;
                gap: 5px;
                li {
                    padding: 4px 8px;
                    background: #efefff;
                    color: blue;
                    border-radius: 4px;
                }
            }
        }
    }
`;
