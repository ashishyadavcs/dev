import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { fetchData } from "utils/serversidefetch";

const Page = ({ users }) => {
    const openEmail = email => `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${email}`;

    return (
        <Pages className="container py-4">
            <div className="products">
                <Link href="/admin/order">orders</Link>

                <Link href="/admin/portfolio">portfolios</Link>
                {/* {JSON.stringify(users)} */}
                <div className="table">
                    <table className="table table-hover table-striped">
                        <thead>
                            <th>userid</th>
                            <th>name</th>
                            <th>email</th>
                            <th>contact</th>
                            <th>Orders</th>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td><a href={openEmail(user.email)}>{user.email}</a></td>
                                    <td>{user.mobile}</td>
                                    <td>check</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Pages>
    );
};
const Pages = styled.div`
    .products {
        display: flex;
        gap: 10px;
    }
    a {
        text-transform: capitalize;
        padding: 10px 20px;
        background: #e5e5fe;
        border-radius: 4px;
        color: blue;
    }
    table {
        border-collapse: collapse;
        th{
            background: #f1f1f1;
        }
        tr{
            &:hover{
                background: #f1f1f1;
            }
        }
        td,th {
            border: 2px solid #ddd;
            padding: 10px;
            a{ background: none;
                text-transform: none;
            }
        }
    }
`;
export default Page;
export async function getServerSideProps({ req, res }) {
    const data = await fetchData(`${process.env.APP_URL}/api/admin`, req);
    return {
        props: {
            users: data.users,
        },
    };
}
