/* eslint-disable react/prop-types */
import { Alchemy, Network } from "alchemy-sdk";
import { createContext, useContext, useEffect, useState } from "react";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const RecentDataContext = createContext();

function RecentDataProvider({ children }) {
  const [recentBlockNumber, setRecentBlockNumber] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [gasPrice, setGasPrice] = useState("");
  const [ethBalance, setEthBalance] = useState(0);

  useEffect(() => {
    async function getRecentBlockNumber() {
      const blockNumber = await alchemy.core.getBlockNumber();
      setRecentBlockNumber(() => blockNumber);
      const block = await alchemy.core.getBlockWithTransactions(blockNumber);
      setRecentTransactions(() => block.transactions);
      const gasPrice = await alchemy.core.getGasPrice();
      setGasPrice(gasPrice.toString());
    }
    getRecentBlockNumber();
  }, []);

  useEffect(() => {
    const getEthBalance = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
      const resJson = await res.json();
      const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(2);
      setEthBalance(ethPrice);
    };
    getEthBalance();
  });

  // const getEthBalance = async () => {
  //   // parseFloat(ethBalance);
  //   const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
  //   const resJson = await res.json();
  //   const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(4);
  //   console.log(ethPrice);
  //   // const usdBalance = ethBalance * ethPrice;
  //   // return usdBalance.toFixed(4);
  // };

  return (
    <RecentDataContext.Provider
      value={{
        recentBlockNumber,
        recentTransactions,
        gasPrice,
        ethBalance,
      }}
    >
      {children}
    </RecentDataContext.Provider>
  );
}

function useRecentData() {
  const context = useContext(RecentDataContext);
  if (!context)
    throw new Error("useRecentDataContext must be used within a DataProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { RecentDataProvider, useRecentData };
