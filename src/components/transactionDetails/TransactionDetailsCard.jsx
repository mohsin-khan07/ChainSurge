/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { calcTxnData } from "../../libraries/transactionData";
import DetailsRow from "../DetailsRow";

const initialState = {
  blockNumber: 0,
  form: "",
  to: "",
  value: 0,
  gasPrice: 0,
};

function reducer(state, action) {
  return {
    ...state,
    blockNumber: action.blockNumber,
    from: action.from,
    to: action.to,
    value: action.value.toString(),
    gasPrice: action.gasPrice.toString(),
  };
}

function TransactionDetailsCard({ txnHash }) {
  const [{ blockNumber, from, to, value, gasPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await calcTxnData(txnHash);
      dispatch({
        blockNumber: fetchedData.blockNumber,
        from: fetchedData.from,
        to: fetchedData.to,
        value: fetchedData.value,
        gasPrice: fetchedData.gasPrice,
      });
    };
    fetchData();
  }, [txnHash]);

  return (
    <div className="py-4 px-5 bg-white rounded-2xl shadow-shadow">
      <DetailsRow title="Transaction Hash" value={txnHash} />
      <DetailsRow title="Block" value={blockNumber} />
      <DetailsRow title="From" value={from} />
      <DetailsRow title="To" value={to} />
      <DetailsRow title="Value" value={value} />
      <DetailsRow title="Gas Price" value={gasPrice} />
    </div>
  );
}

export default TransactionDetailsCard;
