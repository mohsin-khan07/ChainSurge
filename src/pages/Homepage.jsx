import OverviewCard from "../components//overview/OverviewCard";
import TransactionsCard from "../components/transactions/TransactionsCard";
import BlocksCard from "../components/blocks/BlocksCard";

function Homepage() {
  return (
    <div className="px-5 py-6 xxs:px-8 sm:py-10 md:px-14 lg:px-24">
      <OverviewCard />
      <div className="flex flex-col gap-8 lg:flex-row">
        <BlocksCard />
        <TransactionsCard />
      </div>
    </div>
  );
}

export default Homepage;
