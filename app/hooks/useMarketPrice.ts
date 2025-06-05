import { useEffect, useState } from 'react';

interface DragonSoulTokenPriceProp {
  marketPrice: number;
}

export const useMarketPrice = (
  getDSTPrice: () => Promise<DragonSoulTokenPriceProp>
): DragonSoulTokenPriceProp => {
  const [marketPrice, setMarketPrice] = useState<number>(0);

  useEffect(() => {
    getDSTPrice().then((data) => {
      setMarketPrice(data.marketPrice);
    });
  }, [getDSTPrice]);

  return { marketPrice };
};
