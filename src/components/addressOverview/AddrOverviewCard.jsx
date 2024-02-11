import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";
import { calcAddrBalance } from "../../libraries/addrBalance";
import AddrOverviewRow from "./AddrOverviewRow";
import { calcUsdBalance } from "../../libraries/ethToUsd";

function AddOverviewCard() {
  const { address } = useParams();
  const [ethBalance, setEthBalance] = useState(0);
  const [ethValue, setEthValue] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await calcAddrBalance(address);
      setEthBalance(balance);
    };
    getBalance();
  }, [address]);

  useEffect(() => {
    const getEthValue = async () => {
      const value = await calcUsdBalance(ethBalance);
      setEthValue(value);
    };
    getEthValue();
  }, [ethBalance]);

  console.log(ethValue);

  const balanceInEth = ethBalance ? Utils.formatEther(ethBalance) : "..";

  return (
    <div className="flex flex-col gap-6 py-6 txns:py-4 px-5 bg-white rounded-2xl mb-8 shadow-shadow">
      <AddrOverviewRow title="ETHER BALANCE" value={`${balanceInEth} ETH`} />
      <AddrOverviewRow
        title="ETHER VALUE"
        value={`$${ethValue === 0 ? "..." : ethValue}`}
      />
    </div>
  );
}

export default AddOverviewCard;
