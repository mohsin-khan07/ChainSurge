import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);
