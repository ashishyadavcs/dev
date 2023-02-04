import Image from "next/image";
import React from "react";
import styles from "../styles/about.module.css";

const Aboutus = () => {
  return (
    <div className="container">
      <div
        className={`${styles.bg} d-flex align-items-center position-relative`}
      >
        <h1>About Us</h1>
        <Image
          src={"/images/card.jpg"}
          alt=""
          priority
          layout="fill"
          objectFit="cover
      "
        ></Image>
        <div className="bottom-left">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <h2 className="mt-3">About Frontendzone</h2>
          <p>
            Frontendzone is a destination to learn all frontend technologies
            practically with industry experience.
          </p>
        </div>
        <div className="col-md-6 col-12 position-relative"></div>
      </div>
    </div>
  );
};

export default Aboutus;
