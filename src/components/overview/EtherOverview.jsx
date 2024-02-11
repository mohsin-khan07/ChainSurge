import { useEffect, useState } from "react";
import { calcEthPrice, calcMarketCap } from "../../libraries/ethOverview";
import OverviewElement from "./OverviewElement";
import HLine from "../HLine";

function EtherOverview() {
  const [ethPrice, setEthPrice] = useState();
  const [marketCap, setMarketCap] = useState();

  useEffect(() => {
    const getEthPrice = async () => {
      const ethPrice = await calcEthPrice();
      setEthPrice(ethPrice);
    };
    getEthPrice();
  }, []);

  useEffect(() => {
    const getMarketCap = async () => {
      const marketCap = await calcMarketCap();
      setMarketCap(marketCap);
    };
    getMarketCap();
  }, []);

  return (
    <div className="grid w-full sm:w-2/4 gap-1 md:gap-3">
      <OverviewElement
        imgSrc={"ethPriceIcon.svg"}
        title="Ether Price"
        value={`$${ethPrice ? ethPrice : "..."}`}
      />
      <HLine />
      <OverviewElement
        imgSrc={"marketCapIcon.svg"}
        title="Market Cap"
        value={`$${marketCap ? marketCap : "..."}`}
      />
    </div>
  );
}

export default EtherOverview;
