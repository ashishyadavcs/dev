import { getPostSlugs } from "lib/posts";
import Link from "next/link";
import React, { memo, useState } from "react";
import styled from "styled-components";
import { replacewithdash } from "utils/common";

const Blogsearch = () => {
    const [posts, setposts] = useState([]);
    const searchnow = e => {
        const loader = document.querySelector(".search .loader");
        loader.classList.add("active");
        if (e.target.value.trim() == "") {
            setposts(prev => []);
            loader.classList.remove("active");
            return;
        }
        setTimeout(async () => {
            const data = await getPostSlugs();
            console.log(data);
            setposts(prev => [
                ...data.filter(post => post.slug.includes(replacewithdash(e.target.value))),
            ]);
            loader.classList.remove("active");
        }, 1000);
    };
    return (
        <Searchform className="search">
            <form>
                <span className="title">Search Posts</span>
                <input onChange={searchnow} placeholder="search blog" type="search" />
                <div className="loader"></div>
            </form>

            <ul>
                {posts.map(post => (
                    <li>
                        <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
                    </li>
                ))}
            </ul>
        </Searchform>
    );
};

export default memo(Blogsearch);
const Searchform = styled.div`
    overflow: hidden;
    form {
        position: relative;
        input {
            margin-bottom: 0;
        }
    }
    .loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #17c079; /* Blue */
        border-radius: 50%;
        width: 25px;
        height: 25px;
        opacity: 0;
        position: relative;
        left: 50%;
        margin:0;
        transition: all 0.3s;
        animation: spin 2s linear infinite;
    }
    .loader.active {
        opacity: 1;
        margin:10px 0;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        max-height: 300px;
        overflow: auto;
        li {
            background: #d4fbfb;
            padding: 10px;
            color: #3f4cfe;
            border-radius: 8px;
            margin-bottom: 7px;
        }
    }
`;
