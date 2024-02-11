export const calcEthPrice = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
  const resJson = await res.json();
  const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(2);
  return ethPrice;
};

export const calcMarketCap = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
  const resJson = await res.json();
  const marketCap = parseFloat(resJson.data.marketCapUsd).toFixed(2);
  return marketCap;
};
