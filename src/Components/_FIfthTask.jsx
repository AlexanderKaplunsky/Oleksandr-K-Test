import React, { useState } from "react";
import "./FifthTask.css";
import Table from "./Table";

const _FifthTask = () => {
  const data = {
    columns: [
      {
        // has N elements (N columns)
        type: ["number"],
        filtering: [false], // has filtering input
        sorting: [false], // has sorting arrows
        style: {} // css styles
      },
      {
        // has N elements (N columns)
        type: ["string"],
        filtering: [false], // has filtering input
        sorting: [false], // has sorting arrows
        style: {} // css styles
      },
      {
        // has N elements (N columns)
        type: ["string"],
        filtering: [false], // has filtering input
        sorting: [false], // has sorting arrows
        style: {} // css styles
      }
    ],
    cells: [
      {
        // has M*N elements (M rows)
        value: 12, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: 13, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: "asd", // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: 11, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: 51, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: "bad", // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: 18, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: "sad", // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      },
      {
        // has M*N elements (M rows)
        value: 25, // any value
        style: {} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
      }
    ]
  };
  return <Table data={data} />;
};

export default _FifthTask;
