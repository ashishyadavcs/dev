import React from "react";
import Services from "../components/service";

import styles from "../styles/services.module.css";
import { openform } from "../utils/common";
import { createContext } from "react";
import Image from "next/image";
import Whatsapp from "@/components/whatsapp";

const Servicecount = createContext();
const Servicespage = () => {
  const data = { name: "Ashish" };

  return (
    <>
      <div className={styles.hero}>
        <span className={styles.heroimg}>
          <Image
            src={"/dev/service-girl.png"}
            alt=""
            objectFit="contain"
            layout="fill"
            objectPosition="right"
          ></Image>
        </span>
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center">
              <div>
                <h1 className="heading">
                  Web developement services<br></br>Fast , affordable and with
                  <br></br>{" "}
                  <span className="awesome-green">100% satisfaction</span>{" "}
                </h1>

                <button
                  onClick={openform}
                  className={`theme-btn cta-btn ${styles.cta}`}
                >
                  Get Your website Now
                </button>
              </div>

              {/* <h3 className="my-4">Trust Us, Get awesome work done by Us.</h3> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Services />
      </div>
      <Whatsapp />
    </>
  );
};
export default Servicespage;
export { Servicecount };
