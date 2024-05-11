import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { fetchData } from "utils/serversidefetch";
const Page = ({ data }) => {
    console.log(data);
    return (
        <Dashboardstyle>
            <aside>
                <ul>
                    {[...Array(5)].map(l => (
                        <li>
                            <Link href="/dashboard/profile"><a>Profile</a></Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main></main>
        </Dashboardstyle>
    );
};
const Dashboardstyle = styled.section`
display: flex;
aside{
    background: #f1f1f1;
    width: 25%;
    a{
        padding: 10px;
        display: block;
        border-bottom: 1px solid #ddd;
    }
}

`;
export default Page;
export async function getServerSideProps({ req }) {
    const data = await fetchData(`${process.env.APP_URL}/api/dashboard`, req);
    return {
        props: {
            data,
        },
    };
}
