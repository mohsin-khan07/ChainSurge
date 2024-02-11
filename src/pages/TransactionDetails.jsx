import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import TransactionDetailsCard from "../components/transactionDetails/TransactionDetailsCard";

function TransactionDetailsPage() {
  const { txnHash } = useParams();

  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <PageTitle title="Transaction Details" value={txnHash.slice(0, 12)} />
      <TransactionDetailsCard txnHash={txnHash} />
    </div>
  );
}

export default TransactionDetailsPage;
