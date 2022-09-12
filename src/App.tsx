import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import Login from "./components/Login";
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
    four = "start",
    three = "visited",
    five = "goal",
    one = "block",
  }
  arr[0][0] = 4;
  arr[2][2] = 1;
  arr[1][2] = 1;
  arr[3][3] = 1;
  arr[4][2] = 1;
  arr[4][4] = 5;

  dfs(arr);

  return (
    <div className="">
      <button className=" bg-slate-400 rounded-lg mx-2 my-2 px-2 py-2">
        Create 2d array
      </button>

      <div className=" flex flex-col items-center justify-center mt-6">
        {arr.map((e, idx) => {
          return (
            <div className="flex" key={idx}>
              {e.map((el: number, idx: number) => {
                if (el === 4)
                  return <div className="flex bg-green-500">{el}</div>;
                if (el === 1) return <div className="flex bg-black">{el}</div>;
                if (el === 5)
                  return <div className="flex bg-yellow-300">{el}</div>;
                if (el === 3)
                  return <div className="flex bg-blue-600">{el}</div>;
                else return <div className="flex">{el}</div>;
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
