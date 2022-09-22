import Node from "./Node";
import bfs from "../methods/bfs";

interface props {
  arr: number[][];
}

export default function BFSButton({ arr }: props) {
  let visited: Set<string> = new Set();
  const [ROWS, COLS] = [arr.length, arr[0].length];

  return (
    <button
      className="buttons"
      onClick={() => {
        bfs(Node({ row: 0, col: 0 }), visited, ROWS, COLS);
      }}
    >
      Start BFS
    </button>
  );
}
