/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { calcBlockData } from "../../libraries/blockData";
import DetailsRow from "../DetailsRow";

const initialState = {
  timestamp: 0,
  transactions: 0,
  blockHash: "",
  parentHash: "",
  gasUsed: 0,
  gasLimit: 0,
};

function reducer(state, action) {
  return {
    ...state,
    timestamp: action.timestamp,
    transactions: action.transactions,
    feeRecipient: action.feeRecipient,
    gasUsed: action.gasUsed.toString(),
    gasLimit: action.gasLimit.toString(),
    blockHash: action.blockHash,
    parentHash: action.parentHash,
  };
}

function BlockDetailsCard({ blockNumber }) {
  const [
    {
      timestamp,
      transactions,
      feeRecipient,
      gasUsed,
      gasLimit,
      blockHash,
      parentHash,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await calcBlockData(Number(blockNumber));
        dispatch({
          timestamp: fetchedData.timestamp,
          transactions: fetchedData.transactions,
          feeRecipient: fetchedData.miner,
          gasUsed: fetchedData.gasUsed,
          gasLimit: fetchedData.gasLimit,
          blockHash: fetchedData.hash,
          parentHash: fetchedData.parentHash,
        });
      } catch (error) {
        console.log("Error fetching block data", error.message);
      }
    };
    fetchData();
  }, [blockNumber]);

  return (
    <div className="py-4 px-5 bg-white rounded-2xl shadow-shadow">
      <DetailsRow title="Block Height" value={blockNumber} />
      <DetailsRow title="Timestamp" value={timestamp} />
      <DetailsRow title="Transactions" value={transactions.length} />
      <DetailsRow title="Fee Recipient" value={feeRecipient} />
      <DetailsRow title="Gas Used" value={gasUsed} />
      <DetailsRow title="Gas Limit" value={gasLimit} />
      <DetailsRow title="Block Hash" value={blockHash} />
      <DetailsRow title="Parent Hash" value={parentHash} />
    </div>
  );
}

export default BlockDetailsCard;
