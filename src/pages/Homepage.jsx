import OverviewCard from "../components//overview/OverviewCard";
import TransactionsCard from "../components/transactions/TransactionsCard";
import BlocksCard from "../components/blocks/BlocksCard";

function Homepage() {
  return (
    <div className="py-10 px-36 bg-bg">
      <OverviewCard />
      <div className="flex gap-8">
        <BlocksCard />
        <TransactionsCard />
      </div>
    </div>
  );
}

export default Homepage;
