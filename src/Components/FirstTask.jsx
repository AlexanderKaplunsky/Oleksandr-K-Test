import React, { useState } from "react";

const FirstTask = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const getLongestMatch = () => {
    const str = value;
    if (!str) return null;
    const array = Array.from(str);
    let newStr = "";
    array.reduce((acc, value) => {
      let match = acc;

      if (acc.toLowerCase().includes(value.toLowerCase())) match = value;
      else match = match + value;

      if (match.length > newStr.length) newStr = match;

      return match;
    });
    setOutput(newStr);
  };
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={getLongestMatch}>Get Match!</button>
      {output && <p>{output}</p>}
    </div>
  );
};

export default FirstTask;
