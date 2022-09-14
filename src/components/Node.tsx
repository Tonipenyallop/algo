import React, { useEffect, useState } from "react";
type Props = {
  row: number;
  col: number;
};
export default function Node({ row, col }: Props) {
  return (
    <div id={`${row}-${col}`} className="bg-red-300 w-10 h-10 border-2"></div>
  );
}
