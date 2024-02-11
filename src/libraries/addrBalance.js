import { alchemy } from "./provider";

export const calcAddrBalance = async (address) => {
  let addrBalance;
  try {
    addrBalance = await alchemy.core.getBalance(address);
  } catch {
    throw new Error("Error calculating block data!");
  }
  return addrBalance;
};
