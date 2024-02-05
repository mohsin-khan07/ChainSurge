import PageTitle from "../components/PageTitle";
import BlockDetailsContainer from "../components/blockDetails/BlockDetailsContainer";
import { useParams } from "react-router-dom";

function BlockDetailsPage() {
  const { blockNumber } = useParams();

  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <PageTitle title="Block" value={blockNumber} />
      <BlockDetailsContainer blockNumber={blockNumber} />
    </div>
  );
}

export default BlockDetailsPage;
