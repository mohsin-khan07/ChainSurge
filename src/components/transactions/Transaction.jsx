/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Transaction({ transaction }) {
  return (
    <div className="flex justify-between py-3 items-center gap-3.5">
      <img
        src="transaction.svg"
        alt="Transaction Receipt"
        className="w-10 h-10"
      />
      <div className="flex justify-between w-full">
        <Link className="customLink" to={`transaction/${transaction.hash}`}>
          {transaction.hash.slice(0, 9)}...
        </Link>
        <div>
          <span className="font-light">From </span>
          <span className="font-medium">
            {transaction.from.slice(0, 7)}...{transaction.from.slice(-7)}
          </span>
        </div>
        <div className="text-right">
          <span className="font-light">To </span>
          <span className="font-medium">
            {transaction.to.slice(0, 7)}...{transaction.to.slice(-7)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
