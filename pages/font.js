import { useEffect, useState } from "react";

const font = () => {
  const [result, setresult] = useState([]);
  useEffect(() => {
    settext("your text");
  }, []);

  const settext = (value) => {
    value = value || "enter your text";
    setresult((prev) => [
      `😅 ${value}😶‍🌫️`,
      `😅 ${value}`,
      `😅 ${value}`,
      `😅 ${value}😏`,
      `😅 ${value}`,
      `😅 ${value}👈`,
      `😅 ${value}`,
    ]);
  };
  return (
    <div className="container my-4">
      <h1>Stylish Name Maker</h1>
      <input onChange={(e) => settext(e.currentTarget.value)} type="text" />
      {result.map((el) => (
        <h2>{el}</h2>
      ))}
    </div>
  );
};

export default font;
