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
            console.log(data)
            setposts(prev => [
                ...data.filter(post => post.slug.includes(replacewithdash(e.target.value))),
            ]);
            loader.classList.remove("active");
        }, 1000);
    };
    return (
        <Searchform className="search">
            <form>
               
                <input  spellCheck={false} onChange={searchnow} placeholder="Search blog here..." type="search" />
                <div className="loader"></div>
            </form>

           {posts.length>0 && <div className="result">
           <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{replacewithspace(post.slug)}</Link>
                    </li>
                ))}
            </ul>
           </div>}
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
            border-radius: 25px;
            border: 2px solid teal;
            padding: 10px 15px;
            outline: none;
            font-size: 16px;
            width: 100%;
  margin: 10px 0 !important;
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
    .result{
        border: 2px solid teal;
        padding: 10px;
        border-radius:10px;
        ::-webkit-scrollbar{
            width: 3px;
            background: #e9eeeb;
        }
        ::-webkit-scrollbar-thumb{
            background: #17c079;
            height: 10px;
        }
       
        ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        max-height: 300px;
        overflow: auto;
       
        li {
          text-transform: capitalize;
            margin-bottom: 7px;
            border-bottom:2px solid transparent;
            position:relative;
            width: 100%;
    
            &:before{
                content: "";
                position: absolute;
                top: 100%;
                left: 0;
                width: 0;
                display: inline-block;
                height: 2px;
                background: #bcf8f8;
                transition: all 0.2s;
            }
            &:hover{
                &:before{color:teal;width:100%}
            }
        }
    }
    }
    
`;
