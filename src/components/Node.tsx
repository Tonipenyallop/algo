import React, { useEffect, useState } from "react";
type Props = {
  row: number;
  col: number;
};

export default function Node({ row, col }: Props) {
  return <div id={`${row}_${col}`} className=" w-10 h-10 border-2"></div>;
}
