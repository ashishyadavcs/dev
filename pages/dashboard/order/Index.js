import Link from "next/link";

const Page = ({ orders }) => {
  return (
    <div className="container py-3">
      <ul>
        {orders.map((order, i) => (
          <li key={order._id}>
            <Link href={`/dashboard/order/${order._id}`}>
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
  const data = await fetch(`${process.env.APP_URL}/api/order`).then((res) =>
    res.json()
  );

  return {
    props: {
      orders: data.order,
    },
  };
}
