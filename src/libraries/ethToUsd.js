export const calcUsdBalance = async (ethBalance) => {
  parseFloat(ethBalance);
  const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
  const resJson = await res.json();
  const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(4);
  const usdBalance = ethBalance * ethPrice;
  return usdBalance.toFixed(4);
};
