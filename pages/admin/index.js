import React from "react";
import { FcPhone } from "react-icons/fc";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
const Page = ({ order }) => {
  return (
    <div className={`${styles.dashboard} container py-4 `}>
      <div className={styles.items}>
        <Link href="/admin/order">
          <div className="card p-4">
            <h3>Order</h3>
          </div>
        </Link>
        <Link href="/admin/portfolio">
          <div className="card p-4">
            <h3>Portfolio</h3>
          </div>
        </Link>
        <Link href="/admin/blog">
          <div className="card p-4">
            <h3>Blogs</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/order`);
  try {
    const data = await req.json();
    return {
      props: {
        order: data,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}
export default Page;
