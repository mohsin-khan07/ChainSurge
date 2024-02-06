import { useParams } from "react-router-dom";
import AddOverviewCard from "./AddOverviewCard";
import { useEffect, useState } from "react";
import { useFetchedData } from "../../contexts/FetchDataContext";
import { Utils } from "alchemy-sdk";

function AddOverviewContainer() {
  const { address } = useParams();
  const { fetchAddData } = useFetchedData();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAddData(address);
      setBalance(fetchedData.toString());
    };
    fetchData();
  }, [fetchAddData, address]);

  const balanceInEth = balance ? Utils.formatEther(balance) : "..";

  return (
    <div className="flex flex-col gap-6 py-6 txns:py-4 px-5 bg-white rounded-2xl mb-8 shadow-shadow">
      <AddOverviewCard title="ETHER BALANCE" value={`${balanceInEth} ETH`} />
      <AddOverviewCard title="ETHER VALUE" value={`${balanceInEth} ETH`} />
    </div>
  );
}

export default AddOverviewContainer;
