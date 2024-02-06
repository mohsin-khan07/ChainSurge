import { useLatestBlock } from "../../contexts/LatestBlockContext";
import Block from "./Block";

function BlocksList() {
  const { recentBlockNumber } = useLatestBlock();

  const blocks = [];

  if (recentBlockNumber)
    for (let i = 0; i < 10; i++) blocks.push(recentBlockNumber - i);

  return (
    <ul className="py-4 px-5">
      {recentBlockNumber
        ? blocks.map((block) => <Block blockNumber={block} key={block} />)
        : "Loading recent blocks..."}
    </ul>
  );
}

export default BlocksList;
