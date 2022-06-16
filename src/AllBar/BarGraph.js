import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "서울",
    type: 1,
    방문자1: 676,
    tooltip: 6.76e8
  },
  {
    name: "서울",
    type: 2,
    방문자2: 487,
    tooltip: 4.87e8
  },
  {
    name: "부산",
    type: 1,
    방문자1: 155,
    tooltip: 1.55e8
  },
  {
    name: "부산",
    type: 2,
    방문자2: 124,
    tooltip: 1.24e8
  },
  {
    name: "대구",
    type: 1,
    방문자1: 107,
    tooltip: 1.07e8
  },
  {
    name: "대구",
    type: 2,
    방문자2: 88,
    tooltip: 0.88e8
  },
  {
    name: "인천",
    type: 1,
    방문자1: 186,
    tooltip: 1.86e8
  },
  {
    name: "인천",
    type: 2,
    방문자2: 136,
    tooltip: 1.36e8
  },
  {
    name: "경기도",
    type: 1,
    방문자1: 665,
    tooltip: 6.65e8
  },
  {
    name: "경기도",
    type: 2,
    방문자2: 553,
    tooltip: 5.53e8
  },
  {
    name: "강원도",
    type: 1,
    방문자1: 146,
    tooltip: 1.46e8
  },
  {
    name: "강원도",
    type: 2,
    방문자2: 130,
    tooltip: 1.3e8
  },
  {
    name: "제주",
    type: 1,
    방문자1: 59,
    tooltip: 5.88e7
  },
  {
    name: "제주",
    type: 2,
    방문자2: 60,
    tooltip: 5.96e7
  }
];

const allKeys = ["숙박방문자1", "방문자1", "숙박방문자2", "방문자2", "tooltip"];

export const AllBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] = useState({
    방문자1: "#000000",
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
    <div>
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
