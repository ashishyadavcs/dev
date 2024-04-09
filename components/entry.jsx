import { media } from "config/device";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Entry = () => {
    const [seen, setseen] = useState(true);
    useEffect(() => {
        console.log(seen);
    }, [seen]);

    return (
        <>
            {seen == true ? (
                <Styledentry>
                   
                    <div className="action">
                    <h2>Who you are?</h2>
                        <Link href="/ashish-yadav">
                           <a onClick={async e => await setseen(false)}>I'm Recruiter</a> 
                        </Link>
                        <Link href={"/"} >
                           <a onClick={e => setseen(false)}>I'm User</a> 
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
        h2{color:#000;margin-bottom:0}
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
