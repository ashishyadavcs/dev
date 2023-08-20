import Link from "next/link";

const Page = ({ orders }) => {
    return (
        <div className="container py-3">
            <ul>
                {orders.length > 0 &&
                    orders.map((order, i) => (
                        <li key={order._id}>
                            <Link href={`/dashboard/orders/${order._id}`}>{order.description}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Page;
export async function getServerSideProps(context) {
    const req = await fetch(`${process.env.APP_URL}/api/order`);
    const data = req.ok ? await req.json() : {};

    return {
        props: {
            orders: data || [],
        },
    };
}
