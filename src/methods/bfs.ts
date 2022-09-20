import Node from "../components/Node";
export default function bfs(
  inputNode: JSX.Element | null,
  visited: Set<JSX.Element>
) {
  console.log(inputNode);
  if (inputNode == null || visited.has(inputNode)) return;

  visited.add(inputNode);

  const current = inputNode;

  const currentRow = Number(current?.props.id.split("_")[0]);
  const currentCol = Number(current?.props.id.split("_")[1]);
  console.log(currentRow, currentCol);
  const currentElement = document.getElementById(`${currentRow}_${currentCol}`);
  if (!currentElement) return;
  console.log(currentElement);
  currentElement?.classList.add("bg-green-300");

  // bfs(document.getElementById( `${currentRow + 1}-${currentCol}`), visited);
  // bfs(currentElement, visited)

  bfs(Node({ row: currentRow + 1, col: currentCol }), visited);
  bfs(Node({ row: currentRow - 1, col: currentCol }), visited);
  bfs(Node({ row: currentRow, col: currentCol + 1 }), visited);
  bfs(Node({ row: currentRow, col: currentCol - 1 }), visited);
  console.log("finis");
  // }

  // while (queue.length !== 0) {
  //   const currentNode = queue.shift();
  //
  // const directions = [
  //   [1, 0],
  //   [-1, 0],
  //   [0, 1],
  //   [0, -1],
  // ];
  // for (let direction of directions) {
  //   let [directionRow, directionCol] = [direction[0], direction[1]];
  //   const a = document.getElementById(`${directionRow}-${directionCol}`);
  //   if (a){
  //     queue.push(a)
  //   }
  //   console.log(a);
  //   // bfs()
  // }
  //
  // console.log(queue);
  // }
}
