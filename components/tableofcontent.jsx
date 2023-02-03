import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { replacewithdash } from "utils/common";
import styles from "@/styles/toc.module.css";
import { memo } from "react";

const Toc = () => {
  const router = useRouter();
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
  }, []);

  return (
    <>
      {data.length > 0 && (
        <div className={styles.toc}>
          <b>What&apos;s Inside</b>
          <ul>
            {data.length > 0 &&
              data.map((h, i) => (
                <li key={i}>
                  <Link
                    scroll={false}
                    href={`${router.query.slug}#${replacewithdash(
                      h.innerText
                    )}`}
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
