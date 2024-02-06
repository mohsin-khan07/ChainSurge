/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Transaction({ txHash, txFrom, txTo }) {
  return (
    <div className="flex justify-between py-3 items-center gap-3.5">
      <img
        src="transaction.svg"
        alt="Transaction Receipt"
        className="w-10 h-10"
      />
      <div className="flex flex-col xxs:flex-row justify-between xxs:items-center w-full gap-3">
        <Link className="link" to={`transaction/${txHash}`}>
          {txHash ? txHash.slice(0, 9) : ""}...
        </Link>
        <div>
          <span className="font-light">From </span>
          <span className="font-medium">
            {txFrom.slice(0, 4)}...{txFrom.slice(-4)}
          </span>
        </div>
        <div className="xxs:text-right">
          <span className="font-light">To </span>
          <span className="font-medium">
            {txTo.slice(0, 4)}...{txTo.slice(-4)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
