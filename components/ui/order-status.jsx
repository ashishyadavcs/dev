import styles from "@/styles/status.module.css";
const Status = ({ status }) => {
  return (
    <div className={styles.status}>
      <b>Your order status</b>
      <ul>
        <li >Order created</li>
        <li >Pay 50%</li>
        <li>Development started</li>
        <li>Review</li>
        <li>Pay remaining 50%</li>
        <li className={styles.active}>Submitted successfully</li>
      </ul>
    </div>
  );
};
export default Status;
