import { fetchDSTPrice } from 'app/api/dstPriceApi';
import { DragonSoulTokenPriceProp, RawJSONTokenPriceProp } from 'app/types/dragoPriceTypes';

export const getDSTPrice = async (): Promise<DragonSoulTokenPriceProp> => {
  try {
    const marketInfo: RawJSONTokenPriceProp = await fetchDSTPrice();

    const { usd, sixhr } = marketInfo;

    return {
      marketInfo: {
        marketPrice: usd,
        sixhrchange: sixhr,
      },
    };
  } catch (error) {
    console.error('Error fetching Drago data:', error);
    throw error;
  }
};
