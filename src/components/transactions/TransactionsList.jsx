import { useEffect, useState } from "react";
import { useLatestBlock } from "../../contexts/LatestBlockContext";
import Transaction from "./Transaction";
import { calcBlockData } from "../../libraries/blockData";

function TransactionsList() {
  const [recentTransactions, setRecentTransactions] = useState(null);

  const { recentBlockNumber } = useLatestBlock();

  useEffect(() => {
    const getRecentTransactions = async () => {
      const blockData = await calcBlockData(recentBlockNumber);
      setRecentTransactions(() => blockData.transactions);
    };
    getRecentTransactions();
  }, [recentBlockNumber]);

  return (
    <ul className="py-4 px-5">
      {recentTransactions
        ? recentTransactions
            .slice(0, 10)
            .map((tx) => (
              <Transaction
                txHash={tx.hash}
                txFrom={tx.from}
                txTo={tx.to}
                key={tx.hash}
              />
            ))
        : "Loading recent transactions..."}
    </ul>
  );
}

export default TransactionsList;
