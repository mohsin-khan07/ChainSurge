import EtherOverview from "./EtherOverview";
import BlockOverview from "./BlockOverview";

function OverviewCard() {
  return (
    <div className="py-2 txns:py-4 px-5 bg-white rounded-2xl mb-8 shadow-shadow">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-7">
        <EtherOverview />
        <div className="border-l h-full text-light1"></div>
        <BlockOverview />
      </div>
    </div>
  );
}

export default OverviewCard;
