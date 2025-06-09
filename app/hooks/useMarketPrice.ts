import { getDSTPrice } from 'app/controllers/dstPriceController';
import { useEffect, useState } from 'react';
import { DragonSoulTokenPriceProp, DSTPriceOutput } from 'app/types/dragoPriceTypes';

export const useMarketPrice = (dstCount: number): DSTPriceOutput => {
  const [marketPrice, setMarketPrice] = useState<number>(0);
  const [initialPrice, setInitialPrice] = useState<number>(0);
  const [sixhourschange, setSixHoursChange] = useState<string>('0%');

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const {
          marketInfo: { marketPrice, sixhrchange },
        }: DragonSoulTokenPriceProp = await getDSTPrice();
        setInitialPrice(Number(marketPrice));
        setSixHoursChange(sixhrchange);
      } catch (err) {
        console.error('Error fetching: ', err);
        setInitialPrice(0);
      }
    };

    fetchPrice();
  }, [dstCount]);

  useEffect(() => {
    if (initialPrice !== null) {
      const finalPrice = (initialPrice * dstCount).toFixed(2);
      setMarketPrice(Number(finalPrice) !== 0 ? Number(finalPrice) : 0);
    }
  }, [initialPrice, dstCount]);

  return { marketPrice, initialPrice, sixhourschange };
};
