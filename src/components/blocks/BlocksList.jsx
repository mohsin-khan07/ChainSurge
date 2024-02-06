import { useRecentData } from "../../contexts/RecentDataContext";
import Block from "./Block";

function BlocksList() {
  const { recentBlockNumber } = useRecentData();
  const blocks = new Array(10);

  for (let i = 0; i < 10; i++) blocks.push(recentBlockNumber - i);

  return (
    <ul className="py-4 px-5">
      {blocks.map((block, i) => (
        <Block blockNumber={block} key={i} />
      ))}
    </ul>
  );
}

export default BlocksList;
