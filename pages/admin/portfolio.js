import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import styles from "@/styles/portfolio.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
const Page = ({ portfolios }) => {
    const router = useRouter();
    const [edit, setEdit] = useState(false);
    const [image, setimage] = useState(false);
    const sendreq = async (e, method, url) => {
        e.preventDefault();
        const fdata = new FormData();
        fdata.append("file", e.target.image.files[0]);
        await fetch("/api/upload", {
            method: "post",
            body: fdata,
        })
            .then(res => {
                console.log(res);
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
        <div className={`container py-4 ${styles.portfolio}`}>
            <div className="d-flex">
                <span className={`${styles.published} me-2`}>
                    Published Portfolios : {portfolios.length}
                </span>
            </div>
            <div className="my-4">
                <h3>Edit Portfolio</h3>
                <form
                    onSubmit={e => {
                        edit
                            ? sendreq(e, "put", `/api/portfolio/${edit._id}`)
                            : addPortfolio(e, "Post", "/api/portfolio");
                    }}
                >
                    <input
                        defaultValue={edit.title}
                        name="title"
                        required
                        type="text"
                        placeholder="title"
                    />
                    <input
                        type="file"
                        required
                        onChange={e => setimage(URL.createObjectURL(e.target.files[0]))}
                        name="image"
                        placeholder="Project image"
                    />
                    {(edit.image || image) && (
                        <Image
                            height={100}
                            width={100}
                            objectFit="cover"
                            alt={edit?.title}
                            src={edit.image || image}
                        />
                    )}
                    <textarea className="textarea" name="description" placeholder="description">
                        {edit.description}
                    </textarea>
                    <input
                        defaultValue={edit?.url}
                        name="url"
                        type="url"
                        placeholder="project url"
                    />
                    <button className="themebtn" type="submit">
                        {edit ? "Update" : "add"}
                    </button>
                    {edit && (
                        <button type="button" className="btn" onClick={e => setEdit(false)}>
                            cancel
                        </button>
                    )}
                </form>
            </div>

            <ul className={styles.portfolios}>
                {portfolios &&
                    portfolios.map(project => (
                        <div key={project.id} className={styles.item}>
                            <span className={styles.action}>
                                <button
                                    onClick={e => setEdit(v => (v == false ? project : false))}
                                    className={`${styles.badge} me-2`}
                                >
                                    <FiEdit className="pointer" size={20} />
                                </button>
                                <button
                                    onClick={e => deletePortfolio(project._id)}
                                    className={styles.badge}
                                >
                                    <AiFillDelete className="pointer" size={20} />
                                </button>
                            </span>
                            <div className={styles.thumbnail}>
                                {project.image && (
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        alt={project.title}
                                        src={project.image}
                                    />
                                )}
                            </div>
                            <div className={styles.content}>
                                <h2>{project?.title}</h2>
                                <p>{project?.description}</p>
                                <a target="_blank" rel="noreferrer" href={project?.url}>
                                    live
                                </a>
                            </div>
                        </div>
                    ))}
            </ul>
        </div>
    );
};

export default Page;
export async function getServerSideProps(req) {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`).json();

        return {
            props: {
                portfolios: data.portfolio,
            },
        };
    } catch {
        return {
            props: {
                portfolios: [],
            },
        };
    }
}
