import { RawJSONTokenPriceProp } from 'app/types/dragoPriceTypes';

const COINGECKO_API_URL = 'https://apibackenddrago.onrender.com/api/market/price/dst';

export const fetchDSTPrice = async (): Promise<RawJSONTokenPriceProp> => {
  const response = await fetch(`${COINGECKO_API_URL}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const marketInfo = await response.json();

  return marketInfo;
};
