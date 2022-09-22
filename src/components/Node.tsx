import React, { useEffect, useState } from "react";
type Props = {
  row: number;
  col: number;
};

export default function Node({ row, col }: Props) {
  return (
    <div
      className="flex justify-center items-center "
      // onClick={() => console.log("he")}
    >
      <div
        id={`${row}_${col}`}
        className="w-7 h-7 border-2 duration-1000 flex"
      ></div>
    </div>
  );
}
