// import { select, csv } from "d3";
import React, { useState } from "react";
import { connect } from "react-redux";
import useInterval from "./helperfunctions/useInterval";

const width = "600";
const height = "400";

const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * width + 10, Math.random() * height + 10]);

export const Example1 = () => {
  const [dataset, setDataset] = useState(generateDataset());
  useInterval(() => {
    const newDataset = generateDataset();
    setDataset(newDataset);
  }, 2000);
  return (
    <div>
      <svg width={width} height={height}>
        <circle cx={width / 2} cy={height / 2} r="40" />
        {dataset.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="30" />)}
      </svg>
    </div>
  );
};

export default connect(null)(Example1);
