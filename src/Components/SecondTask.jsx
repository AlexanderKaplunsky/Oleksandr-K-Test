import React, { useState } from "react";

const SecondTask = () => {
  const [inputArray, setInputArray] = useState("");
  const [result, setResult] = useState([]);
  const splitArray = () => {
    const newArray = inputArray.split(",");
    newArray.forEach((item, key) =>
      setTimeout(() => setResult(item), 1000 * key)
    );
  };
  return (
    <div>
      <input value={inputArray} onChange={e => setInputArray(e.target.value)} />
      <button onClick={splitArray}>Split Array</button>
      <p>Your splitted array: {result}</p>
    </div>
  );
};

export default SecondTask;
