import Status from "@/components/ui/order-status";
import Paynow from "@/components/ui/pay";
import styles from "@/styles/orderdash.module.css";
const Page = ({ order }) => {
  return (
    <div className={`container py-3 ${styles.orderdashboard}`}>
      <Status status={order.status} />
      <div className="row">
        <div className="col-md-4">
          <form className="order">
            <h3>Edit order info</h3>
            <textarea className="textarea">{order.description}</textarea>
            <input type="number" placeholder="mobile" name="mobile" disabled />
            <input disabled type="file" name="file" />
            <input value={5000} type="text" placeholder="budget" disabled />
          </form>
        </div>
        <div className="col-md-8">
          <div className={styles.paynow}>
            <Paynow
              product={{
                price: "6000",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
export async function getServerSideProps(req) {
  const data = await fetch(
    `${process.env.APP_URL}/api/order/${req.params.order}`
  ).then((res) => res.json());

  return {
    props: {
      order: data.order || [],
    },
  };
}
