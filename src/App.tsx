import { useState, useEffect } from "react";
import BFSButton from "./components/BFSButton";

import Matrix from "./components/Matrix";

import "./input.css";

import Position from "./interfaces/Position";
import Color from "./enums/Color";
import ColorAction from "./enums/ColorActions";
function App() {
  let [colorFlag, setColorFlag] = useState<boolean>(false);
  let [isInitialRender, setIsInitialRender] = useState<boolean>(true);
  const [arr, setArr] = useState<number[][]>([[]]);

  const START_POSITION: Position = { row: 14, col: 10 };
  const GOAL_POSITION: Position = { row: 14, col: 20 };

  useEffect(() => {
    if (isInitialRender) {
      setArr(arrayCreater());
      setIsInitialRender(false);
      setTimeout(() => {
        changeColor(START_POSITION, ColorAction.START);
        changeColor(GOAL_POSITION, ColorAction.GOAL);
      }, 500);
    }
  }, [colorFlag, isInitialRender]);

  const randomNumberCreater = (): number => {
    return 0;
  };

  function arrayCreater(): number[][] {
    let arr: number[][] = new Array(30).fill(new Array(30).fill(0));
    return arr;
  }

  function changeColor(position: Position, action: string) {
    const row = position.row;
    const col = position.col;

    const nodeElement = document.getElementById(`${row}_${col}`);
    if (action === ColorAction.START)
      nodeElement?.classList.add(Color.START_COLOR);
    else if (action === ColorAction.GOAL)
      nodeElement?.classList.add(Color.GOAL_COLOR);
    else if (action === ColorAction.BLOCK)
      nodeElement?.classList.add("bg-blue-400");
    else if (action === ColorAction.VISITED)
      nodeElement?.classList.add("bg-green-400");
    else nodeElement?.classList.add("bg-red-300");
    setColorFlag(!colorFlag);
  }

  return (
    <div className="">
      <button className="buttons">Create 2d array</button>
      <BFSButton arr={arr}></BFSButton>

      <Matrix array={arr}></Matrix>

      {/* <div className="bg-green-500 my-3 text-white text-center">True</div> */}
    </div>
  );
}

export default App;
