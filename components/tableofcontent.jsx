import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { replacewithdash } from "utils/common";
import styles from "@/styles/toc.module.css";
import { CiViewList } from "react-icons/ci";

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
  }, [router]);

  return (
    <>
      {data.length > 0 && (
        <div
          title="table of content"
          className={`${styles.toc}`}
          onClick={(e) => {
            e.currentTarget.classList.toggle(`${styles.active}`);
            const ans = e.currentTarget.lastChild.lastChild;
            if (e.currentTarget != ans) {
              ans.style.height == ""
                ? (ans.style.height = ans.scrollHeight + "px")
                : ans.removeAttribute("style");
            }
          }}
        >
          <b className="d-flex justify-content-between">
            <span>What&apos;s Inside</span> <CiViewList />
          </b>
          <nav role="navigation">
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
          </nav>
        </div>
      )}
    </>
  );
};

export default Toc;
