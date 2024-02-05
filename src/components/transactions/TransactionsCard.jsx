import Divider from "../Divider";
import TransactionsList from "./TransactionsList";

function TransactionsCard() {
  return (
    <div className="rounded-2xl shadow-shadow bg-white w-full lg:w-2/4">
      <div className="text-lg font-medium m-5">Latest Transactions</div>
      <Divider />
      <TransactionsList />
    </div>
  );
}

export default TransactionsCard;
