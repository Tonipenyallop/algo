import React, { useEffect, useState } from "react";

export default function Node({ row, col }: any) {
  enum color {
    four = "start",
    three = "visited",
    five = "goal",
    one = "block",
  }
  const [start, setStart] = useState(false);
  const [visited, setVisited] = useState(false);
  const [goal, setGoal] = useState(false);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    changeColor();
  });

  const changeColor = () => {
    //     // if (start)
    const nodeElement = document.getElementById("4-0");

    nodeElement?.classList.add("bg-blue-200");
    //     // console.log(document.querySelector(`${idx}`))
  };
  // changeColor()
  // setStart(true);

  return (
    <div id={`${row}-${col}`} className="bg-red-300 w-10 h-10 border-2"></div>
  );
}
