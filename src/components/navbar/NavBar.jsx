import { Utils } from "alchemy-sdk";
import { useRecentData } from "../../contexts/RecentDataContext";
import NavElement from "./NavElement";

function NavBar() {
  return (
    <div className="hidden sm:flex sm:py-4 sm:items-center sm:justify-center">
      <NavBox />
    </div>
  );
}

function NavBox() {
  const { ethBalance, gasPrice } = useRecentData();

  const gasPriceInGwei = gasPrice ? Utils.formatUnits(gasPrice, "gwei") : "..";

  return (
    <div className="flex gap-12 items-center">
      <NavElement
        imgSrc={"ethIcon.svg"}
        title="ETH Price"
        value={`$${ethBalance}`}
      />
      <NavElement
        imgSrc={"gasIcon.svg"}
        title="Gas Price"
        value={`${gasPriceInGwei.slice(0, 5)} Gwei`}
      />
    </div>
  );
}

export default NavBar;
