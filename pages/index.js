import styles from "../styles/Home.module.css";
import Orderform from "../components/orderform";
import Services from "../components/service";
import Testimonial from "../components/testimonial";
import { BsCheck2Circle } from "react-icons/bs";
import { NextSeo } from "next-seo";
import Upload from "@/components/upload";
import Blog from "@/components/banners/blog";
import Ashish from "@/components/ashish";
export default function Home() {
  const steps = [
    "Submit your order",
    "Make half payment to confirm your order",
    "Review Your website Website",
    "confirm order completed",
    "Make remaining Payment.",
    "Rate us",
  ];
  return (
    <>
      <NextSeo
        title="ashishui"
        key="webdesign,web developer"
        canonical={process.env.NEXT_PUBLIC_APP_URL}
      />
      <div className={styles.landing}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <h1 className="gradient-text heading text-capitalize">
                Get your website<br></br> designed & developed<br></br> by
                expert web developer
                <br></br>
              </h1>

              <ul className="list-unstyled mt-3">
                {steps.map((li, i) => {
                  return (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <BsCheck2Circle color="#4cd964" size={20} />
                      <span className="mx-2">{li}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-5 col-12 d-flex justify-content-end">
              <Orderform title="Hire me for website" />
              {/* <Ashish /> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.portfolio}></div>
    </>
  );
}
