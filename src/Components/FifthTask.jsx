import React, { useState } from "react";
import "./FifthTask.css";

const FifthTask = () => {
  const [table, setTable] = useState([
    [12, 4, 12, 15, 4],
    ["a", "g", 5, "d", "a"],
    [12, 15, 6, 21, 4],
    ["as", "te", "as", "te", 4],
    [1, 12, 2, 42, 4]
  ]);
  const [hideNumber, setHideNumber] = useState(0);
  const [hideString, setHideString] = useState(0);

  const compareNumericIncrease = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  };
  const compareNumericDecrease = (a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
  };

  const SortByIncrease = () => {
    let sortedArray = [];
    table.forEach(item => {
      sortedArray.push(item.sort(compareNumericIncrease));
    });
    setTable(sortedArray);
  };
  const SortByDecrease = () => {
    let sortedArray = [];
    table.forEach(item => {
      sortedArray.push(item.sort(compareNumericDecrease));
    });
    setTable(sortedArray);
  };

  return (
    <div>
      <table className="table">
        <tbody>
          {table.map((item, key) => {
            return (
              <tr id={key}>
                {item.map((value, id) => {
                  return (
                    <td id={id}>
                      {typeof value == "string" && !hideString
                        ? value
                        : typeof value == "number" && !hideNumber
                        ? value
                        : ""}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => setHideNumber(!hideNumber)}>
        {hideNumber ? `Show Number` : `Hide number`}{" "}
      </button>
      <button onClick={() => setHideString(!hideString)}>
        {hideString ? `Show string` : `Hide string`}{" "}
      </button>
      <button onClick={SortByDecrease}> Sort by decrease</button>
      <button onClick={SortByIncrease}> Sort by increase</button>
    </div>
  );
};

export default FifthTask;
