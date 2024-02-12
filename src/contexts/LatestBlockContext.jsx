/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { alchemy } from "../libraries/provider";

const LatestBlockContext = createContext();

function LatestBlockProvider({ children }) {
  const [recentBlockNumber, setRecentBlockNumber] = useState(null);
  const [gasPrice, setGasPrice] = useState("");

  useEffect(() => {
    async function getRecentBlockNumber() {
      const blockNumber = await alchemy.core.getBlockNumber();
      setRecentBlockNumber(blockNumber);
    }
    getRecentBlockNumber();
  }, []);

  useEffect(() => {
    async function getGasPrice() {
      const gasPrice = await alchemy.core.getGasPrice();
      setGasPrice(gasPrice.toString());
    }
    getGasPrice();
  }, []);

  const value = useMemo(() => {
    const value = { recentBlockNumber, gasPrice };
    return value;
  }, [recentBlockNumber, gasPrice]);

  return (
    <LatestBlockContext.Provider value={value}>
      {children}
    </LatestBlockContext.Provider>
  );
}

function useLatestBlock() {
  const context = useContext(LatestBlockContext);
  if (!context)
    throw new Error("useLatestBlock must be used within LatestBlockProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LatestBlockProvider, useLatestBlock };
