import { Utils } from "alchemy-sdk";
import { useRecentData } from "../../contexts/RecentDataContext";
import OverviewElement from "./OverviewElement";
import Divider from "../Divider";

function OverviewCard() {
  const { gasPrice, recentBlockNumber } = useRecentData();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  const elmentsCls = "grid w-full sm:w-2/4 gap-1 md:gap-3";

  return (
    <div className="py-2 txns:py-4 px-5 bg-white rounded-2xl mb-8 shadow-shadow">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-7">
        <div className={elmentsCls}>
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
        <div className={elmentsCls}>
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
