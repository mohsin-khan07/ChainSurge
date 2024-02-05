import Divider from "../Divider";
import BlocksList from "./BlocksList";

function BlockList() {
  return (
    <div className="rounded-2xl shadow-shadow bg-white w-full lg:w-2/4">
      <div className="text-lg font-medium m-5">Latest Blocks</div>
      <Divider />
      <BlocksList />
    </div>
  );
}

export default BlockList;
