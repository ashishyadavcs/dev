import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeServiceName, changePrice } from "../store/serviceSlice";
import { increment, decrement, changeName } from "../store/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const service = useSelector((state) => state.service);
  const dispatch = useDispatch();

  useEffect(() => {
    //set store in local storange to make it persistance on refresh
    localStorage.setItem(
      "mydata",
      JSON.stringify({
        count: count,
        service: service,
      })
    );
  }, [count, service]);

  return (
    <>
      <div className="flex container py-4">
        <h1>{count.name}</h1>
        <button
          onClick={(e) => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <span>{count.value}</span>
        <button onClick={(e) => dispatch(decrement())}>-</button>
        <div>
          <label>Chnage counte store name </label>
          <input
            type="text"
            onChange={(e) => dispatch(changeName(e.target.value))}
          ></input>
        </div>
      </div>
      <div className="container">
        <h2>Service state</h2>
        <div>
          <h2>{service?.name}</h2>
          <label>chnage service name</label>
          <input
            type="text"
            onChange={(e) => dispatch(changeServiceName(e.target.value))}
          ></input>
        </div>
        <div>
          <h2>{service?.price}</h2>
          <label>chnage service price</label>
          <input
            type="text"
            onChange={(e) => dispatch(changePrice(e.target.value))}
          ></input>
        </div>
      </div>
    </>
  );
};
export default Counter;
