import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import Login from "./components/Login";
import Node from "./components/Node";
import "./input.css";
function App() {
  const [update, setUpdate] = useState("");

  const dfs = (matrix: number[][]): boolean => {
    const [ROWS, COLS] = [matrix.length, matrix[0].length];

    const queue = [[0, 0]];
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let visited = [];

    return false;
  };

  const arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  enum color {
    START = "start",
    VISITED = "visited",
    GOAL = "goal",
    BLOCK = "block",
  }
  arr[0][0] = 4;
  arr[2][2] = 1;
  arr[1][2] = 1;
  arr[3][3] = 1;
  arr[4][2] = 1;
  arr[4][4] = 5;

  dfs(arr);

  useEffect(() => {
    changeColor(0, 0, color.START);
    changeColor(3, 3, color.GOAL);
    changeColor(2, 2, color.BLOCK);
    changeColor(1, 2, color.BLOCK);
    changeColor(4, 2, color.BLOCK);
    changeColor(2, 2, color.BLOCK);
    changeColor(2, 2, color.BLOCK);
  });

  const changeColor = (row: number, col: number, action: string) => {
    const nodeElement = document.getElementById(`${row}-${col}`);
    if (action === color.START) nodeElement?.classList.add("bg-blue-200");
    if (action === color.GOAL) nodeElement?.classList.add("bg-yellow-200");
    if (action === color.BLOCK) nodeElement?.classList.add("bg-blue-400");
  };

  return (
    <div className="">
      <button className=" bg-slate-400 rounded-lg mx-2 my-2 px-2 py-2">
        Create 2d array
      </button>

      <div className=" flex flex-col items-center justify-center mt-6">
        {arr.map((e, row) => {
          return (
            <div className="flex" key={row}>
              {e.map((_: number, col: number) => {
                return <Node row={row} col={col} />;
              })}
            </div>
          );
        })}
      </div>
      {/* <div className="bg-green-500 my-3 text-white text-center">True</div> */}
    </div>
  );
}

export default App;
