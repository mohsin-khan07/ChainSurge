import { Utils } from "alchemy-sdk";
import { useLatestBlock } from "../../contexts/LatestBlockContext";
import OverviewElement from "./OverviewElement";
import HLine from "../HLine";

function BlockOverview() {
  const { recentBlockNumber, gasPrice } = useLatestBlock();
  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  return (
    <div className="grid w-full sm:w-2/4 gap-1 md:gap-3">
      <OverviewElement
        imgSrc={"gasIcon.svg"}
        title="Gas Price"
        value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
      />
      <HLine />
      <OverviewElement
        imgSrc={"latestBlockIcon.svg"}
        title="Latest Block"
        value={recentBlockNumber ? recentBlockNumber : "..."}
      />
    </div>
  );
}

export default BlockOverview;
