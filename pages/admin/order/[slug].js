import Paynow from "@/components/ui/pay";

const Page = ({ order }) => {
    return (
        <div className="container py-4">
            <h1>Order details</h1>
            <form>
                <input type="text" value={`order ID ${order._id}`} disabled />
                <input type="file" />
                <textarea className="textarea" value={order.description}></textarea>
            </form>
            {order.file && <iframe height={400} width={"100%"} src={order.file} />}
            <p>Ordered At : {new Date(order.date).toDateString()}</p>

            <p>{order.paid ? "payment done" : <Paynow product={{ id: order._id, price: 40 }} />}</p>
        </div>
    );
};

export default Page;
export async function getServerSideProps({ req, query }) {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/order/${query.slug}/`, {
        headers: {
            cookie: req.headers.cookie,
        },
    }).then(res => res.json());
    return {
        props: {
            order: data.order,
        },
    };
}
