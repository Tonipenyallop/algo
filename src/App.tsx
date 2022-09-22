import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import Login from "./components/Login";
import Matrix from "./components/Matrix";
import Node from "./components/Node";
import "./input.css";
import bfs from "./methods/bfs";
function App() {
  let visited: Set<string> = new Set();
  let [color, setColor] = useState<boolean>(false);
  const [ROWS, COLS] = [4, 4];
  // const arr = [
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  // ];
  // let arr: number[][] = [[]];
  const [arr, setArr] = useState<number[][]>([[]]);
  enum Color {
    START = "start",
    VISITED = "visited",
    GOAL = "goal",
    BLOCK = "block",
    DEFAULT = "default",
  }

  // dfs(arr);

  useEffect(() => {
    setArr(arrayCreater());
    // arrayCreater();
    changeColor(0, 0, Color.START);
    changeColor(3, 3, Color.GOAL);
    changeColor(2, 2, Color.BLOCK);
    changeColor(1, 2, Color.BLOCK);
    changeColor(4, 2, Color.BLOCK);
    changeColor(2, 2, Color.BLOCK);

    //
    // changeColor(3, 2, color.BLOCK);
    // changeColor(0, 2, color.BLOCK);
    // changeColor(1, 2, color.BLOCK);
    // changeColor(4, 2, color.BLOCK);
    // changeColor(2, 2, color.BLOCK);
    // changeColor(3, 3, color.GOAL);
  }, []);

  const randomNumberCreater = (): number => {
    return 0;
  };

  function arrayCreater(): number[][] {
    let arr: number[][] = new Array(30).fill(new Array(30).fill(0));
    return arr;
  }

  const changeColor = (row: number, col: number, action: string) => {
    const nodeElement = document.getElementById(`${row}_${col}`);
    if (action === Color.START) nodeElement?.classList.add("bg-blue-200");
    else if (action === Color.GOAL) nodeElement?.classList.add("bg-yellow-200");
    else if (action === Color.BLOCK) nodeElement?.classList.add("bg-blue-400");
    else if (action === Color.VISITED)
      nodeElement?.classList.add("bg-green-400");
    else nodeElement?.classList.add("bg-red-300");
  };

  return (
    <div className="">
      <button className="buttons">Create 2d array</button>
      <button
        className="buttons"
        onClick={() => {
          bfs(Node({ row: 0, col: 0 }), visited, ROWS, COLS);
          // console.log("hehe");
        }}
      >
        Start BFS
      </button>

      <div className=" flex flex-col items-center justify-center mt-6">
        <Matrix array={arr}></Matrix>
      </div>
      {/* <div className="bg-green-500 my-3 text-white text-center">True</div> */}
    </div>
  );
}

export default App;
