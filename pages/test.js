import { NextSeo } from "next-seo";
import { useState } from "react";

const Page = () => {
  const [clicklength, setclicklength] = useState([]);
  const clickaction = (e) => {
    const position = { x: e.pageX, y: e.pageY };
    setclicklength((prev) => [
      ...prev,
      { name: `click${clicklength.length + 1}`, position },
    ]);
  };
  return (
    <>
      <NextSeo noindex nofollow/>
      <style>
        {`
        *:active{cursor:pointer}
      .page{position:relative}
      .number{
        font-size:20px;
        position:fixed;
        font-weight:bold
      }
      `}
      </style>
      <div
        style={{ minHeight: "100vh" }}
        className="page container py-4"
        onClick={clickaction}
      >
        <button
          onClick={(e) => {
           const availarr=clicklength.splice(1,clicklength.length-1)
           console.log(availarr.length,clicklength.length)
          setclicklength([...availarr])
          }}
        >
          undo
        </button>
        {clicklength.map((el, i) => {
          return (
            <span
              className="number"
              style={{ top: el.position.y, left: el.position.x }}
            >
              {i + 1}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Page;
