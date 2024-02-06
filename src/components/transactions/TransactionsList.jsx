import { useRecentData } from "../../contexts/RecentDataContext";
import Transaction from "./Transaction";

function TransactionsList() {
  const { recentTransactions } = useRecentData();

  return recentTransactions.length === 0 ? (
    <span>Loading...</span>
  ) : (
    <ul className="py-4 px-5">
      {recentTransactions.slice(0, 10).map((tx) => (
        <Transaction transaction={tx} key={tx.hash} />
      ))}
    </ul>
  );
}

export default TransactionsList;
