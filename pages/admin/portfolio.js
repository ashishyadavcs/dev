import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import styled from "styled-components";

const Portfolio = ({ portfolios }) => {
    const router = useRouter();
    const [image, setimage] = useState("");
    const [edit, setEdit] = useState(false);
    const sendreq = async (e, method, url) => {
        e.preventDefault();
        const fdata = new FormData();
        fdata.append("file", e.target.image.files[0]);
        await fetch("/api/upload", {
            method: "post",
            body: fdata,
        })
            .then(res => {
                return res.json();
            })
            .then(async res => {
                if (res.file?.name) {
                    const formdata = new FormData(e.target);
                    formdata.append("image", res.file.url);
                    const data = await fetch(url, {
                        method: `${method}`,
                        body: JSON.stringify(Object.fromEntries(formdata)),
                    })
                        .then(res => res.json())
                        .catch(err => ({ message: err.message }));
                    if (data.success) {
                        router.push(`?published=${Math.random()}`);
                        toast.success(data.message);
                    } else {
                        toast.success(data.message);
                    }
                }
            });
    };
    const addPortfolio = async e => {
        sendreq(e, "Post", "/api/portfolio");
    };

    const deletePortfolio = async id => {
        const confirm = window.confirm("are you sure to delete ?");
        if (confirm) {
            const data = await fetch(`/api/portfolio/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .catch(err => err.message);
            if (data.success) {
                router.push(`?deleted=${id}`);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        }
    };

    return (
        <Pages className="container py-4">
            <h1>Add New Portfolio</h1>
            <form
                onSubmit={e => {
                    edit
                        ? sendreq(e, "put", `/api/portfolio/${edit._id}`)
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
                            <button onClick={e => setEdit(v => (v == false ? project : false))}>
                                <FiEdit className="pointer" size={20} />
                            </button>
                            <button onClick={e => deletePortfolio(project._id)}>
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
            box-shadow: 0 1px 2px rgba(0,0,0,0.24);
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

export async function getServerSideProps(req) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`).then(res =>
        res.json()
    );
    return {
        props: {
            portfolios: data.portfolio,
        },
    };
}
