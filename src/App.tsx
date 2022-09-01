import React from "react";
import { Button } from "react-bootstrap";
import Login from "./components/Login";

function App() {
  // const arr = new Array(5).fill(new Array(5).fill(0));
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

  return (
    <div className="">
      <Button variant="primary" className="btn-primary">
        Click
      </Button>
      {/* <Login /> */}
      {/* <div className="">{row()}</div> */}
      {arr.map((e, idx) => {
        return (
          <div className=" text-red-600" key={idx}>
            {e}
          </div>
        );
      })}
      <button>Create 2d array</button>
    </div>
  );
}

export default App;
