export default function bfs(inputNode: JSX.Element, visited: Set<JSX.Element>) {
  if (inputNode === null || visited.has(inputNode)) return;

  let queue = [inputNode];
  // let visited = new Set();
  visited.add(inputNode);
  while (queue.length !== 0) {
    const currentNode = queue.shift();
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let direction of directions) {
      let [directionRow, directionCol] = [direction[0], direction[1]];
      const a = document.getElementById(`${directionRow}-${directionCol}`);
      console.log(a);
      // bfs()
    }

    console.log(queue);
  }
}
