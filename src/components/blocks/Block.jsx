/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { calcBlockData } from "../../libraries/blockData";

function Block({ blockNumber }) {
  const [transactions, setTransactions] = useState();
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    const getBlockData = async () => {
      const blockData = await calcBlockData(blockNumber);
      setTransactions(blockData.transactions);
      setTimestamp(blockData.timestamp);
    };
    getBlockData();
  }, [blockNumber]);

  const date = new Date(timestamp * 1000);
  const seconds = date.getSeconds();

  return (
    <li className="flex  justify-between py-3 items-center gap-3.5">
      <img src="blockBox.svg" alt="Block" className="w-10 h-10" />
      <div className="flex flex-col xxs:flex-row justify-between w-full">
        <Link className="link" to={`block/${blockNumber}`}>
          {blockNumber}
        </Link>

        <div>{transactions ? transactions.length : "..."} transactions</div>

        <div className="text-dark2 xxs:text-right font-light">
          {seconds ? seconds : "..."} secs ago
        </div>
      </div>
    </li>
  );
}

export default Block;
