import { Utils } from "alchemy-sdk";
import { useRecentData } from "../../contexts/RecentDataContext";
import OverviewElement from "./OverviewElement";
import Divider from "../Divider";

function OverviewCard() {
  const { gasPrice, recentBlockNumber } = useRecentData();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  return (
    <div className="py-4 px-5 bg-white rounded-2xl mb-8 shadow-shadow">
      <div className="flex items-center gap-7">
        <div className="grid w-2/4 gap-4">
          <OverviewElement
            imgSrc={"gasIcon.svg"}
            title="Gas Price"
            value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
          />
          <Divider />
          <OverviewElement
            imgSrc={"gasIcon.svg"}
            title="Gas Price"
            value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
          />
        </div>
        <Divider />
        <div className="grid w-2/4 gap-4">
          <OverviewElement
            imgSrc={"gasIcon.svg"}
            title="Gas Price"
            value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
          />
          <Divider />
          <OverviewElement
            imgSrc={"block.svg"}
            title="Latest Block"
            value={recentBlockNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
