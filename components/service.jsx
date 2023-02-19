import styles from "../styles/services.module.css";
import Image from "next/image";
import { services } from "../public/data/services";
import { Servicecount } from "../pages/services";
import { openform } from "../utils/common";
const Services = () => {
  return (
    <>
      <Servicecount.Consumer>
        {(data) => {
          return <h2>{data?.name}</h2>;
        }}
      </Servicecount.Consumer>
      <div className={styles.cards}>
        {services.map((card, i) => {
          return (
            <div key={i} className={styles.card}>
              <div className="position-relative">
                <Image
                  objectFit="cover"
                  src={"/images/card.jpg"}
                  layout="fill"
                  alt="website-design-service"
                ></Image>
              </div>
              <div className={styles.card}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <button onClick={openform} className="themebtn">
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Services;
