import { fetchDSTPrice } from 'app/api/dstPriceApi';

interface DragonSoulTokenPriceProp {
  marketPrice: number;
}

export const getDSTPrice = async (): Promise<DragonSoulTokenPriceProp> => {
  try {
    const marketPrice = await fetchDSTPrice();
    return marketPrice;
  } catch (error) {
    console.error('Error fetching Drago data:', error);
    throw error;
  }
};
