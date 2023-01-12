import React from "react";
import styles from "../styles/orderform.module.css";
import { createOrder } from "../utils/order";
const Orderform = () => {
  return (
    <div className={styles.orderform}>
      <span
        onClick={(e) =>
          e.currentTarget.parentElement.parentElement.classList.remove("active")
        }
        className="close justify-content-center align-items-center"
      >
        x
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createOrder(e);
        }}
      >
        <h2>Order for website design</h2>
        <input hidden type="text" name="type" />
        <textarea
          autoFocus
          placeholder="Enter your requirements..."
          className="textarea"
          required
          name="description"
        ></textarea>
        <label>Reference website image or urls</label>
        <input
          required
          accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
          multiple
          name="file"
          placeholder="reference website"
          type="file"
        ></input>
        <input
          name="mobile"
          className="w-100"
          required
          maxLength={10}
          type="tel"
          placeholder="Mobile number"
        ></input>
        <button className="my-1 theme-btn d-block w-100">submit</button>
      </form>
    </div>
  );
};
export default Orderform;
