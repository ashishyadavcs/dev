import { media } from "config/device";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Entry = () => {
    const [seen, setseen] = useState(true);
    const checkin = () => {
        localStorage.setItem("seen", new Date().getTime());
        setseen(false);
    };
    useEffect(() => {
        const action=document.querySelector(".entry")
        action.querySelectorAll('a').forEach(el => {
            el.onClick = () => {
                localStorage.setItem("seen", new Date().getTime());
            };
        });
        const a = localStorage.getItem("seen", new Date().getTime());
        if(a){
           action.classList.add('d-none') 
        }
    }, []);

    return (
        <>
            {seen == true ? (
                <Styledentry className="entry">
                    <div className="action">
                        <h2>Please confirm ?</h2>
                        <Link href="/ashish-yadav">
                            <a onClick={async e => checkin()}>I'm Recruiter</a>
                        </Link>
                        <Link href={"/"}>
                            <a onClick={e => checkin()}>I'm User</a>
                        </Link>
                    </div>
                </Styledentry>
            ) : (
                ""
            )}
        </>
    );
};

export default Entry;
const Styledentry = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .action {
        h2 {
            color: #000;
            margin-bottom: 0;
        }
        display: flex;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 300px;
        width: 80%;
        background: #fff;
        ${media.sm} {
            flex-direction: column;
        }
        button,
        a {
            font-size: 20px;
            padding: 10px 20px;
            border: 2px solid red;
            border-radius: 8px;
        }
    }
`;
