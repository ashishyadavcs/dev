import Orderform from "./orderform";
import styles from "../styles/orderform.module.css";
const Orderpop = (handler) => {
  return (
    <div
      onClick={(e) =>
        e.target === e.currentTarget
          ? e.currentTarget.classList.remove("active")
          : ""
      }
      className={`orderpop`}
    >
      <Orderform />
    </div>
  );
};
export default Orderpop;
