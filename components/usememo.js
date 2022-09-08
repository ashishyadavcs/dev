import React, { memo, useState } from "react";
const Usememo = () => {
  const [count, setcount] = useState(0);
  const increse = usememo(() => {
    setcount((count) => count + 1);
  }, []);
  useLayoutEffect(() => {
    console.log("run before count change");
  }, [count]);
  return <div onClick={increse}>usememo </div>;
};

export default memo(Usememo);
