import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
const Page = ({ orders }) => {
  return (
    <div className={`container py-3 ${styles.order}`}>
      <ul>
        {orders &&
          orders.map((order) => (
            <Link href="/" key={order._id} passHref>
              <li> {order.description}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Page;
export async function getServerSideProps({ req }) {
  const data = await fetch(`${process.env.APP_URL}/api/order`, {
    headers: {
      Authorization: `Bearer ${req.cookies["x-token"]}`,
    },
  }).then((res) => res.json());

  return {
    props: {
      orders: data.order || [],
    },
  };
}
