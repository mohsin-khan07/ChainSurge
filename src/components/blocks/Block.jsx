/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchedData } from "../../contexts/FetchDataContext";

function Block({ blockNumber }) {
  const { fetchBlockData } = useFetchedData();
  const [transactions, setTransactions] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const fetchedData = await fetchBlockData(blockNumber);
        setTransactions(fetchedData.transactions);
        setTimestamp(fetchedData.timestamp);
      } catch (error) {
        console.log("Error fetching transactions: ", error.message);
        throw error;
      }
    };
    fetchData();
  }, [blockNumber, fetchBlockData]);

  const date = new Date(timestamp * 1000);
  const seconds = date.getSeconds();

  return (
    <li className="flex justify-between py-3 items-center gap-3.5">
      <img src="blockBox.svg" alt="Block" className="w-10 h-10" />
      <div className="flex justify-between w-full">
        {blockNumber <= 10 ? (
          <span>Loading...</span>
        ) : (
          <Link className="customLink" to={`block/${blockNumber}`}>
            {blockNumber}
          </Link>
        )}
        {transactions === null ? (
          <span>Loading...</span>
        ) : (
          <span>{transactions.length} transactions</span>
        )}
        <span className="text-dark2 text-right font-light">
          {seconds} secs ago
        </span>
      </div>
    </li>
  );
}

export default Block;
