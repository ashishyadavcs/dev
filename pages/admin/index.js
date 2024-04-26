import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Page = () => {
    return (
        <Pages className="container py-4">
            <div className="products">
                <Link href="/admin/order">orders</Link>
                <Link href="/admin/portfolio">portfolios</Link>
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
`;
export default Page;
