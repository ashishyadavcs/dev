import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { replacewithdash } from "utils/common";
import styles from "@/styles/toc.module.css";
import { FaAngleDown } from "react-icons/fa";

const Toc = () => {
  const router = useRouter();
  const close = (e) => {
    e == true
      ? document.querySelector(`.${styles.toc}`).classList.remove(styles.active)
      : e.target.parentElement.classList.toggle(styles.active);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const headings = document
      .querySelector(".article")
      ?.querySelectorAll("h2,h3,h4,h5,h6");
    headings.forEach((el) => {
      el.id = replacewithdash(el.innerText);
      el.classList.add("hashlink");
    });
    setData([...headings]);
  }, [router]);

  return (
    <>
      {data.length > 0 && (
        <div className={`${styles.toc}`}>
          <b className="d-flex justify-content-between">
            What&apos;s Inside <FaAngleDown />
          </b>
          <ul>
            {data.length > 0 &&
              data.map((h, i) => (
                <li key={i}>
                  <Link
                    scroll={false}
                    href={`#${replacewithdash(h.innerText)}`}
                  >
                    <a id={replacewithdash(h.innerText)} className="d-block">
                      <span>{i + 1}</span>
                      {h.innerText}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Toc;
