import React from "react";
import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };
const Amp = () => {
  const isamp = useAmp();
  return <></>;
};
export async function getStaticProps() {
  const res = await fetch("");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}
export default Amp;
