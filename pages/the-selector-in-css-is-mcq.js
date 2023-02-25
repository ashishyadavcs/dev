import { NextSeo } from "next-seo";
import styles from "@/styles/mcq.module.css";
import { toast } from "react-toastify";
import { useState } from "react";

const Page = ({ data }) => {
  const [ans, setAns] = useState({ true: 0, false: 0 });

  return (
    <div className={`container ${styles.mcq} my-4`}>
      <NextSeo
        title={` top ${data?.length} the-selector-in-css-is-mcq`}
        description="multiple choice questions (MCQs) related to CSS selectors"
      />
      <h1 className="my-4">
        multiple choice questions (MCQs) related to CSS selectors
      </h1>
      <div className={styles.result}>
        <ul>
          <li> Correct Answers : {ans.true}</li>
          <li>Wrong Answers : {ans.false}</li>
        </ul>
        <button className="theme-btn" onClick={(e) => window.location.reload()}>
          TRY again
        </button>
      </div>
      <ol>
        {data.length > 0 &&
          data.map((mcq, i) => (
            <li key={i}>
              <h3>
                {i + 1}.&nbsp;{mcq.que}
              </h3>
              <ul className="d-flex flex-column align-items-start">
                {mcq.options.map((li, ind) => (
                  <li key={ind}>
                    <label>
                      <input
                        value={li}
                        onChange={(e) => {
                          if (e.currentTarget.checked && ind === mcq.ans) {
                            e.currentTarget.parentElement.style.color = "green";
                            setAns((prev) => ({
                              ...prev,
                              true: prev.true + 1,
                            }));
                            toast.success("Greate ! correct answer");
                          } else {
                            e.currentTarget.parentElement.style.color = "red";
                            setAns((prev) => ({
                              ...prev,
                              false: prev.false + 1,
                            }));
                            toast.error("Ohh ! Wrong answer");
                          }
                        }}
                        name={i + 1}
                        type="radio"
                      />
                      {li}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Page;
export async function getStaticProps(req) {
  const result = await fetch(`${process.env.APP_URL}/data/mcq.json`)
    .then((res) => res.json())
    .catch((err) => "");
  return {
    props: {
      data: result,
    },
  };
}
