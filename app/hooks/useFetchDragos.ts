import { useState, useEffect } from 'react';
import { LimitedDragoInfo } from 'app/types/dataFilterTypes';

interface UseFetchDragoResult {
  dragos: LimitedDragoInfo[];
  loading: boolean;
  error: Error | null;
  // unclaimedProfit: number;
}

export const useFetchDragos = (
  getDragos: () => Promise<LimitedDragoInfo[]>
): UseFetchDragoResult => {
  const [dragos, setDragos] = useState<LimitedDragoInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  // const [unclaimedProfit, setUnclaimedProfit] = useState<number>(0);

  useEffect(() => {
    getDragos()
      .then((data) => {
        setDragos(data);
        // const unclaimedProfitTotal = data.reduce((acc, drago) => {
        //   const everyDragoProfit = drago.rent.stats?.[0];
        //   return acc + (everyDragoProfit?.['unclaimedProfit'] ?? 0);
        // }, 0);
        // setUnclaimedProfit(unclaimedProfitTotal);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [getDragos]);

  return { dragos, loading, error };
};
