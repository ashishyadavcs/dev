import Webdesign from "@/components/webdesign";
import styles from "@/styles/website.module.css";
import Link from "next/link";
const Page = () => {
  const tags = [
    "Wink",
    "ymca",
    "wild apricot",
    "western",
    "york pa",
    "woodstock ga",
    "wichita ks ",
    "watertown ny",
    "walla walla",
    "thousand oaks",
  ];
  return (
    <>
      <Webdesign />
      <div className="container my-4">
        <div className={styles.tag}>
          {tags.map((l, i) => (
            <Link href={`/website-design/${l}`} key={i}>
              <a className="theme-btn">{l} website design</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
