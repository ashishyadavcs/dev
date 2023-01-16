import styles from "../../styles/status.module.css";
const Status = ({ status }) => {
  return (
    <div className={styles.status}>
      <ul>
        <li>Order created</li>
        <li>Pay 50%</li>
        <li>confirm completion</li>
        <li>Pay remaining 50%</li>
        <li>Submitted successfully</li>
      </ul>
    </div>
  );
};
export default Status;
