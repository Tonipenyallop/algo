import React, { useEffect, useState } from "react";

export default function Node({ row, col }: any) {
  return (
    <div id={`${row}-${col}`} className="bg-red-300 w-10 h-10 border-2"></div>
  );
}
