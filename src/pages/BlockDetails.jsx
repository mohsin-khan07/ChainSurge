import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import BlockDetailsCard from "../components/blockDetails/BlockDetailsCard";

function BlockDetailsPage() {
  const { blockNumber } = useParams();

  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <PageTitle title="Block" value={blockNumber} />
      <BlockDetailsCard blockNumber={blockNumber} />
    </div>
  );
}

export default BlockDetailsPage;
