import OverviewCard from "../components//overview/OverviewCard";
import TransactionsCard from "../components/transactions/TransactionsCard";
import BlocksCard from "../components/blocks/BlocksCard";

function Homepage() {
  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <OverviewCard />
      <div className="flex flex-col lg:flex-row gap-8">
        <BlocksCard />
        <TransactionsCard />
      </div>
    </div>
  );
}

export default Homepage;
