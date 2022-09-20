import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import Login from "./components/Login";
import Node from "./components/Node";
import "./input.css";
import bfs from "./methods/bfs";
function App() {
  let visited: Set<JSX.Element> = new Set();

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
    DEFAULT = "default",
  }

  // dfs(arr);

  useEffect(() => {
    changeColor(0, 0, color.START);
    changeColor(0, 1, color.VISITED);
    changeColor(3, 3, color.GOAL);
    changeColor(2, 2, color.BLOCK);
    changeColor(1, 2, color.BLOCK);
    changeColor(4, 2, color.BLOCK);
    changeColor(2, 2, color.BLOCK);
    changeColor(2, 2, color.BLOCK);
  });

  const changeColor = (row: number, col: number, action: string) => {
    const nodeElement = document.getElementById(`${row}_${col}`);
    if (action === color.START) nodeElement?.classList.add("bg-blue-200");
    else if (action === color.GOAL) nodeElement?.classList.add("bg-yellow-200");
    else if (action === color.BLOCK) nodeElement?.classList.add("bg-blue-400");
    else if (action === color.VISITED)
      nodeElement?.classList.add("bg-green-400");
    else nodeElement?.classList.add("bg-red-300");
  };

  return (
    <div className="">
      <button className="buttons">Create 2d array</button>
      <button
        className="buttons"
        onClick={() => {
          bfs(Node({ row: 0, col: 0 }), visited);
          // console.log("hehe");
        }}
      >
        Start BFS
      </button>

      <div className=" flex flex-col items-center justify-center mt-6">
        {arr.map((e: number[], row: number) => {
          return (
            <div className="flex" key={row}>
              {e.map((_: number, col: number) => {
                return <Node row={row} col={col} key={`${row}_${col}`} />;
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
