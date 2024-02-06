import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import AddOverviewCard from "../components/addressOverview/AddrOverviewCard";

function AddressDetailsPage() {
  const { address } = useParams();

  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <PageTitle title="Address" value={address} />
      <AddOverviewCard />
      {/* <h3>Transactions:</h3>
      <AddDetailsContainer /> */}
    </div>
  );
}

export default AddressDetailsPage;
