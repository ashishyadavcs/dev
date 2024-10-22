import { media } from "config/device";
import { useSession } from "next-auth/react";
import Link from "next/link";
import styled from "styled-components";
const Page = ({ orders }) => {
    return (
        <Pages className={`container py-3 `}>
            <h1>Order List</h1>
            {orders.length ? (
                <ul className="orders">
                    {[...orders].map(order => (
                        <Link href={`/dashboard/orders/${order._id}`} key={order._id} passHref>
                            <li className="order">
                                <p> {order.description}</p>
                                <a href={order.mobile}>{order.mobile}</a>
                                <span className="date">{new Date(order.date).toDateString()}</span>
                                <span className="paid">{order.paid}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <h2>No Oreder yet</h2>
            )}
        </Pages>
    );
};
const Pages = styled.div`
    .date {
        background: #ddd;
        border-radius: 100px;
        padding: 2px 10px;
        width: max-content;
        font-size: 14px;
    }
    ul {
        list-style: none;
    }
    .orders {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        ${media.sm} {
            grid-template-columns: auto;
        }
        .order {
            border: 2px solid transparent;
            &:hover {
                border: 2px solid blue;
            }
            cursor: pointer;
            h2 {
                font-size: 30px;
            }
            padding: 20px;
            margin-bottom: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
        }
    }
`;
export default Page;
export async function getServerSideProps({ req }) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/order`, {
        headers: {
            cookie: req.headers.cookie,
        },
    }).then(res => res.json());
    return {
        props: {
            orders: data.order || [],
        },
    };
}
