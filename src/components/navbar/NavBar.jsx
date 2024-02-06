import { Utils } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useLatestBlock } from "../../contexts/LatestBlockContext";
import { calcEthPrice } from "../../libraries/ethOverview";
import NavElement from "./NavElement";

function NavBar() {
  const [ethPrice, setEthPrice] = useState(0);
  const { gasPrice } = useLatestBlock();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  useEffect(() => {
    const getEthPrice = async () => {
      const ethPrice = await calcEthPrice();
      setEthPrice(ethPrice);
    };
    getEthPrice();
  }, []);

  return (
    <div className="hidden sm:flex sm:py-4 sm:items-center sm:justify-center">
      <div className="flex gap-12 items-center">
        <NavElement
          imgSrc={"ethIcon.svg"}
          title="ETH Price"
          value={`$${ethPrice}`}
        />
        <NavElement
          imgSrc={"gasIcon.svg"}
          title="Gas Price"
          value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
        />
      </div>
    </div>
  );
}

export default NavBar;
