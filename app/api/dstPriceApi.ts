interface CoingeckoJSONDataToGet {
  usd: number;
}

interface DragonSoulTokenPriceProp {
  marketPrice: number;
}

const COINGECKO_API_URL = 'https://apibackenddrago.onrender.com/api/market/price/dst';

export const fetchDSTPrice = async (): Promise<DragonSoulTokenPriceProp> => {
  const response = await fetch(`${COINGECKO_API_URL}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: CoingeckoJSONDataToGet = await response.json();
  const marketPrice = data.usd;

  return { marketPrice };
};
