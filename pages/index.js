import styles from "../styles/Home.module.css";
import Orderform from "../components/orderform";
import Services from "../components/service";
import Testimonial from "../components/testimonial";
import { BsCheck2Circle } from "react-icons/bs";
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
      <div className={styles.landing}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <h1 className="gradient-text heading text-capitalize">
                get your website designed<br></br> by expert web designer
                <br></br> within 2 days
              </h1>

              <ul className="list-unstyled">
                {steps.map((li, i) => {
                  return (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <BsCheck2Circle color="#4cd964" size={20} />
                      <span className="ml-2">{li}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-5 col-12">
              <Orderform />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Services />
      </div>
      <div className={styles.portfolio}></div>
      <div className={styles.testimonial}>
        <div className="container">
          <h2>Happy Clients with us</h2>
          <p>What our clients say about us.</p>
          <div className="row">
            <div className="col-12">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqs} id="faq">
        <div className="container">
          <h2>Answers to your doubts</h2>
        </div>
      </div>
    </>
  );
}
