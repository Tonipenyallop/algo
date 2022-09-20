import Node from "../components/Node";
export default function bfs(
  inputNode: JSX.Element | null,
  visited: Set<string>,
  ROWS: number,
  COLS: number
) {
  if (inputNode == null) return;
  const current = inputNode;
  const currentRow = Number(current?.props.id.split("_")[0]);
  const currentCol = Number(current?.props.id.split("_")[1]);

  if (!isInRange(currentRow, ROWS) || !isInRange(currentCol, COLS)) return;
  if (visited.has(`${currentRow}_${currentCol}`)) return;

  const currentElement = document.getElementById(`${currentRow}_${currentCol}`);
  visited.add(`${currentRow}_${currentCol}`);
  if (currentElement?.classList.contains("bg-blue-400")) return;
  currentElement?.classList.add("bg-green-300");

  bfs(Node({ row: currentRow + 1, col: currentCol }), visited, ROWS, COLS);
  bfs(Node({ row: currentRow - 1, col: currentCol }), visited, ROWS, COLS);
  bfs(Node({ row: currentRow, col: currentCol + 1 }), visited, ROWS, COLS);
  bfs(Node({ row: currentRow, col: currentCol - 1 }), visited, ROWS, COLS);
  console.log(visited);
}

function isInRange(row_col: number, ROWS_COLS: number): boolean {
  if (0 <= row_col && row_col <= ROWS_COLS) return true;
  return false;
}

function isValidInput() {}
