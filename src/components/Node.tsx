import React, { useEffect, useState } from "react";
type Props = {
  row: number;
  col: number;
};

export default function Node({ row, col }: Props) {
  return (
    <div className="flex justify-center items-center ">
      <div
        id={`${row}_${col}`}
        className="w-10 h-10 border-2 duration-1000 flex"
      ></div>
    </div>
  );
}
