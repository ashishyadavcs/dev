import { getPostSlugs } from "lib/posts";
import Link from "next/link";
import React, { memo, useState } from "react";
import styled from "styled-components";
import { replacewithdash, replacewithspace } from "utils/common";

const Blogsearch = () => {
    const [posts, setposts] = useState([]);
    let interval;
    const searchnow = e => {
        clearTimeout(interval)
        const loader = document.querySelector(".search .loader");
        loader.classList.add("active");
        if (e.target.value.trim() == "") {
            setposts(prev => []);
            loader.classList.remove("active");
            return;
        }
       interval= setTimeout(async () => {
            const data = await getPostSlugs();
            setposts(prev => [
                ...data.filter(post => post.slug.includes(replacewithdash(e.target.value))),
            ]);
            loader.classList.remove("active");
        }, 1000);
    };
    return (
        <Searchform className="search">
            <form>
               
                <input  autoCorrect onChange={searchnow} placeholder="Search blog here..." type="search" />
                <div className="loader"></div>
            </form>

            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{replacewithspace(post.slug)}</Link>
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
            border: none;
            border-bottom: 2px solid teal;
        }
    }
    .loader {
        pointer-events: none;
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #17c079; /* Blue */
        border-radius: 50%;
        width: 25px;
        height: 25px;
        opacity: 0;
        position: relative;
        left: 50%;
        margin-top:-20px;
        transition: all 0.3s;
        animation: spin 1.5s ease-in-out infinite;
    }
    .loader.active {
        opacity: 1;
        margin:10px 0 20px;
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
          text-transform: capitalize;
            background: #d4fbfb;
            padding: 10px;
            color: #3f4cfe;
            border-radius: 8px;
            margin-bottom: 7px;
        }
    }
`;
