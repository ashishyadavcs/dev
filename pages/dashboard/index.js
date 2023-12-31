import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { fetchData } from "utils/serversidefetch";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { media } from "config/device";
const Page = ({ orders }) => {
    return (
        <Orderstyled className="container  py-3">
            <div className="user">
                <Image
                    className="img"
                    objectFit="cover"
                    src="/ashish.jpg"
                    height={50}
                    width={50}
                    alt=""
                />
                <div className="details">
                    <span className="title">Ashish Yadav</span>
                    <span className="active">available</span>
                </div>
            </div>
            <div className="orders">
                {orders.length > 0 &&
                    orders.map(order => (
                        <Link href={`/dashboard/orders/${order._id}`} passHref>
                            <div className="order">
                                <div className="left">
                                    <Image
                                        className="img"
                                        objectFit="cover"
                                        src="/dev/coding.jpg"
                                        layout="fill"
                                        alt=""
                                    />
                                </div>
                                <div className="right">
                                    <h5>{order._id}</h5>
                                    <p>{order.description}</p>
                                </div>
                                <div className="actions">
                                    <button>
                                        <FiEdit size={15} />
                                        edit
                                    </button>
                                    <button>
                                        <MdDelete />
                                        delete
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </Orderstyled>
    );
};

const Orderstyled = styled.div`
    @keyframes circle-pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(77, 170, 87, 0.9);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 8px rgba(77, 170, 87, 0);
        }
    }
    .user {
        background: #f1f1f1;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        width: max-content;
        gap: 30px;

        .img {
            border-radius: 50%;
        }
        .title {
            margin-bottom: 5px;
            font-size: 16px;
            display: block;
        }

        .active {
            font-size: 13px;
            color: #4daa57;
            &:before {
                content: "";
                display: inline-block;
                margin-right: 10px;
                border-radius: 50%;
                height: 10px;
                width: 10px;
                background: teal;
                box-shadow: 0 0 0 0 #4daa57;
                animation: circle-pulse 2s infinite;
            }
        }
    }
    .order {
        height: 150px;
        padding: 20px 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        position: relative;
        ${media.minsm} {
            width: 50%;
        }
        margin-top: 10px;
        border-radius: 8px;
        border: 2px solid #0000ff0f;
        .left {
            position: relative;
            height: 100%;
            width: 150px;
            .img {
                border-radius: 10px;
            }
        }
        .right {
            width: calc(100% - 300px - 30px);
        }
        button {
            outline: none;
            border: none;
            background: transparent;
            display: flex;
            gap: 5px;
            align-items: flex-end;
            color: #888;
            border-radius: 5px;
            padding: 5px 10px;
            transition: all 0.4s;
            background: #f1f1f1;
            &:hover {
                color: #555;
                background: #ddd;
            }
        }
    }
    .actions {
        position: absolute;
        right: 20px;
        top: 20px;
        display: flex;
        line-height: 1;
        align-items: center;
        gap: 10px;
    }
    ${media.sm} {
        .order {
            height: unset;
            flex-direction: column;
            gap: 10px;

            .left,
            .right {
                height: unset;
                width: 100%;
            }
            .left {
                height: 100px;
            }
            .actions {
                position: static;
            }
        }
    }
`;

export default Page;
export async function getServerSideProps({ req }) {
    try{
        const request = await fetch(`${process.env.APP_URL}/api/order`, {
            headers: {
                cookie: req.headers.cookie, //dont remove
            },
        });
        const data = await request.json();
    
        return {
            props: {
                orders: data.order || [],
            },
        };
    }catch{
        return {
            props: {
                orders:  [],
            },
        };
    }
}
