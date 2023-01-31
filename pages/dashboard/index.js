import styles from "@/styles/dashboard.module.css";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
const Page = ({ orders }) => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <Link href="">
                <a>
                  <AiOutlineHome size={25} />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <AiOutlineHome size={25} />
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>
                  <FiCode size={25} />
                  orders
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.main}></div>
      </div>
    </>
  );
};

export default Page;
