import Status from "../../../components/ui/order-status";

const Page = ({ order }) => {
  console.log(order);
  return (
    <div className="container py-3">
      <Status status={order.status} />
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea className="p-3">{order?.description}</textarea>
        <input value={order.mobile} type="number" name="mobile" />
        <button className="theme-btn">Edit</button>
      </form>
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
      order: data.order,
    },
  };
}
