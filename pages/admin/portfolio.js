import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import {addPortfolio, deletePortfolio, sendreq} from "utils/forms/portfolio";
import {fetchData} from "utils/serversidefetch";

const Portfolio = ({ portfolios }) => {
    const router = useRouter();
    const [image, setimage] = useState("");
    const [edit, setEdit] = useState(false);
    return (
        <Pages className="container py-4">
            <h1>Add New Portfolio</h1>
            <form
                onSubmit={e => {
                    edit
                        ? sendreq(e, "put", `/api/portfolio/${edit._id}`,router)
                        : addPortfolio(e, "Post", "/api/portfolio");
                }}
            >
                <input
                    defaultValue={edit.title}
                    {...(edit && { autoFocus: true })}
                    name="title"
                    required
                    type="text"
                    placeholder="project title"
                />
                <input
                    defaultValue="https://project.com"
                    placeholder="project url"
                    type="url"
                    name="url"
                />
                <input
                    type="file"
                    required
                    onChange={e => setimage(URL.createObjectURL(e.target.files[0]))}
                    name="image"
                    placeholder="Project image"
                />
                {image && <img src={image} />}
                <textarea className="textarea" placeholder="project description" name="description">
                    {edit.description}
                </textarea>
                <div className="btn-group">
                    <button className="btn" type="submit">
                        {edit ? "Update" : "add"}
                    </button>
                    {edit && (
                        <button type="button" className="btn" onClick={e => setEdit(false)}>
                            cancel
                        </button>
                    )}
                </div>
            </form>
            <h2>Added Portfolios</h2>
            <div className="projects">
                {[...portfolios].reverse().map(project => (
                    <div className="project">
                        <span className="action">
                            <button onClick={e => {
                                setEdit(v => (v == false ? project : false))
                                router.push(`?edit=true`)
                            }}>
                                <FiEdit className="pointer" size={20} />
                            </button>
                            <button onClick={e => deletePortfolio(project._id,router)}>
                                <AiFillDelete className="pointer" size={20} />
                            </button>
                        </span>
                        <img src={project.image} />
                        <div className="desc">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a target="_blank" href={project.url}>
                                {project.url}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Pages>
    );
};

export default Portfolio;
const Pages = styled.div`
    .btn-group {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    form {
        margin-bottom: 100px;
    }
    img {
        max-width: 100%;
        width: 400px;
    }
    textarea {
        min-height: 200px;
        border: 2px solid #ddd;
    }
    .btn {
        min-width: 200px;
        background: teal;
        color: #fff;
    }
    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .project {
            position: relative;
            img {
                height: 300px;
                object-fit: cover;
            }
            width: 340px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
            .desc {
                padding: 10px;
            }
            a {
                background: blue;
                color: #fff;
                display: block;
                margin: 10px 0;
                padding: 10px;
            }
            .action {
                display: flex;
                button {
                    padding: 10px 20px;
                }
                position: absolute;
                top: 0;
                right: 0;
                z-index: 2;
            }
            &:not(:hover) {
                .action {
                    opacity: 0;
                    pointer-events: none;
                }
            }
        }
    }
`;

export async function getServerSideProps({req}) {
    const data = await fetchData(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`,req)
    return{
        props:{
            portfolios:data.portfolio
        }
    }
       
}
