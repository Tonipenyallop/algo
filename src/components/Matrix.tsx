import Node from "./Node";
interface props {
  array: number[][];
}

export default function Matrix({ array }: props) {
  return (
    <div className=" flex flex-col items-center justify-center mt-6">
      <div className="border-4 flex flex-col flex-wrap h-auto w-auto my-4 ">
        {array?.map((e: number[], row: number) => {
          return (
            <div className="flex" key={row}>
              {e.map((_: number, col: number) => {
                return <Node row={row} col={col} key={`${row}_${col}`} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
