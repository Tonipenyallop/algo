import React, { useEffect, useState } from "react";
import Color from "../enums/Color";
type Props = {
  row: number;
  col: number;
};

export default function Node({ row, col }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function changeNodeColor(): void {
    const node = document.getElementById(`${row}_${col}`);
    if (
      node?.classList.contains(Color.START_COLOR) ||
      node?.classList.contains(Color.GOAL_COLOR)
    )
      return;
    if (!node?.classList.contains(Color.BLOCK_COLOR))
      node?.classList.add("bg-black");
    else node.classList.remove(Color.BLOCK_COLOR);
  }

  return (
    <div className="flex justify-center items-center ">
      <div
        id={`${row}_${col}`}
        className="w-7 h-7 border-2 duration-1000 flex"
        // onClick={changeNodeColor}
        // onMouseDown={changeNodeColor}
        // onMouseDown={() => {
        //   setIsClicked(isClicked);
        //   console.log("hihi");
        //   console.log(`isClicked Before: ${isClicked}`);
        //   console.log(`isClicked After: ${isClicked}`);
        // }}
        onMouseEnter={changeNodeColor}
      ></div>
      <div className="">fake data</div>
    </div>
  );
}
