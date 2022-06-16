import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 128,
    방문자1: 382,
    tooltip: 5.1e7
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 110,
    방문자2: 245,
    tooltip: 3.55e7
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 141,
    방문자1: 317,
    tooltip: 4.57e7
  },
  {
    name: "2",
    type: 2,
    숙박방문자2: 119,
    방문자2: 257,
    tooltip: 3.76e7
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 164,
    방문자1: 464,
    tooltip: 6.28e7
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 130,
    방문자2: 338,
    tooltip: 4.68e7
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 112,
    방문자1: 345,
    tooltip: 4.57e7
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 108,
    방문자2: 273,
    tooltip: 3.81e7
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 148,
    방문자1: 390,
    tooltip: 5.38e7
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 116,
    방문자2: 297,
    tooltip: 4.13e7
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 151,
    방문자1: 382,
    tooltip: 5.33e7
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 110,
    방문자2: 297,
    tooltip: 4.07e7
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 178,
    방문자1: 427,
    tooltip: 6.04e7
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 115,
    방문자2: 258,
    tooltip: 3.73e7
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 190,
    방문자1: 462,
    tooltip: 6.53e7
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 112,
    방문자2: 264,
    tooltip: 3.76e7
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 174,
    방문자1: 425,
    tooltip: 5.99e7
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 123,
    방문자2: 288,
    tooltip: 4.11e7
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 166,
    방문자1: 426,
    tooltip: 5.92e7
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 119,
    방문자2: 318,
    tooltip: 4.37e7
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 166,
    방문자1: 463,
    tooltip: 6.29e7
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 123,
    방문자2: 328,
    tooltip: 4.51e7
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 147,
    방문자1: 414,
    tooltip: 5.61e7
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 131,
    방문자2: 295,
    tooltip: 4.26e7
  }
];

const allKeys = ["숙박방문자1", "방문자1", "숙박방문자2", "방문자2", "tooltip"];

export const SeoulBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] = useState({
    숙박방문자1: "#A4A4A4",
    방문자1: "#000000",
    숙박방문자2: "#8181F7",
    방문자2: "#0000ee",
    tooltip: "white"
  });

  const prev = () => {
    setColors({
      숙박방문자1: "#F5A9BC",
      방문자1: "red",
      숙박방문자2: "#A4A4A4",
      방문자2: "#000000",
      tooltip: "white"
    });
  };
  const next = () => {
    setColors({
      숙박방문자1: "#A4A4A4",
      방문자1: "#000000",
      숙박방문자2: "#8181F7",
      방문자2: "#0000ee",
      tooltip: "white"
    });
  };
  return (
    <div className="Bar_Time">
      <h3>숙박시간</h3>
      <button onClick={prev} style={{ color: "#F5A9BC" }}>
        이전
      </button>
      <button onClick={next} style={{ color: "#8181F7" }}>
        이후
      </button>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
    </div>
  );
};
