import { alchemy } from "./provider";

export const calcBlockData = async (blockNumber) => {
  let blockData;
  try {
    blockData = await alchemy.core.getBlockWithTransactions(blockNumber);
  } catch {
    throw new Error("Error calculating block data!");
  }
  return blockData;
};
