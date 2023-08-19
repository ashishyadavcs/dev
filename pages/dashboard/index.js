import Link from "next/link";

const Page = ({ orders }) => {
  console.log(orders)
  return (
    <div className="container py-3">
      <ul>
        {orders.length>0 && orders.map((order, i) => (
          <li key={order._id}>
            <Link href={`/dashboard/orders/${order._id}`}>
              {order.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
export async function getServerSideProps(context) {
  console.log(context.req.headers.cookie)
  const data = await fetch(`${process.env.APP_URL}/api/order`).then((res) =>
    res.json()
  );
  return {
    props: {
      orders: data,
    },
  };
}
