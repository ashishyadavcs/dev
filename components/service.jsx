
import Image from "next/image";
import { services } from "../public/data/services";
import { Servicecount } from "../pages/services";
import { openform } from "../utils/common";
import { Styled } from "@/styles/service";
const Services = () => {
  return (
    <>
      <Servicecount.Consumer>
        {(data) => {
          return <h2>{data?.name}</h2>;
        }}
      </Servicecount.Consumer>
      <Styled.cards>
        {services.map((card, i) => {
          return (
            <Styled.card key={i}>
              <div className="position-relative">
                <Image
                  objectFit="cover"
                  src={"/images/card.jpg"}
                  layout="fill"
                  alt="website-design-service"
                ></Image>
              </div>
              <div>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <button onClick={openform} className="themebtn">
                  Order Now
                </button>
              </div>
            </Styled.card>
          );
        })}
      </Styled.cards>
    </>
  );
};
export default Services;
