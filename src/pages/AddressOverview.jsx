import { useParams } from "react-router-dom";
import AddOverviewContainer from "../components/addressOverview/AddOverviewContainer";
import PageTitle from "../components/PageTitle";

function AddressDetailsPage() {
  const { address } = useParams();

  return (
    <div className="py-6 sm:py-10 px-5 xxs:px-8 md:px-14 lg:px-24">
      <PageTitle title="Address" value={address} />
      <AddOverviewContainer />
      {/* <h3>Transactions:</h3>
      <AddDetailsContainer /> */}
    </div>
  );
}

export default AddressDetailsPage;
