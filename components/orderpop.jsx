import Orderform from "./orderform";
const Orderpop = (handler) => {
  return (
    <div
      onClick={(e) =>
        e.target === e.currentTarget
          ? e.currentTarget.classList.remove("active")
          : ""
      }
      className={`orderpop`}
    >
      <Orderform />
    </div>
  );
};
export default Orderpop;
