import { alchemy } from "./provider";

export const calcTxnData = async (txnHash) => {
  let txnData;
  try {
    txnData = await alchemy.core.getTransaction(txnHash);
  } catch {
    throw new Error("Error calculating block data!");
  }
  return txnData;
};
