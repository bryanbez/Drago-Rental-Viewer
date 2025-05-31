import { useState, useEffect } from 'react';
import { DragoInfo } from 'app/types/dragoTypes';

interface DragoStatsProp {
  //   dragos: DragoInfo[];
  totalUnclaimedDSA: number;
  totalDragos: number;
  totalRentedDragos: number;
  totalUnrentedDragos: number;
}

export const useDragoStats = (getDragoStat: () => Promise<DragoInfo[]>): DragoStatsProp => {
  const [dragos, setDragos] = useState<DragoInfo[]>([]);
  const [totalUnclaimedDSA, setTotalUnclaimedDSA] = useState<number>(0);
  const [totalRentedDragos, setTotalRentedDragos] = useState<number>(0);
  const [totalUnrentedDragos, setTotalUnrentedDragos] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  const [totalDragos, setTotalDragos] = useState<number>(0);

  useEffect(() => {
    getDragoStat()
      .then((data) => {
        setDragos(data);
        const unclaimedProfitTotal = data.reduce((acc, drago) => {
          const everyDragoProfit = drago.rent.stats?.[0];
          return acc + (everyDragoProfit?.['unclaimedProfit'] ?? 0);
        }, 0);
        const totalUnRentedDragosCount = data.filter((item) => item.rent.status === '0').length;
        const totalRentedDragosCount = data.filter((item) => item.rent.status === '1').length;
        setTotalUnclaimedDSA(unclaimedProfitTotal);
        setTotalDragos(data.length);
        setTotalRentedDragos(totalRentedDragosCount);
        setTotalUnrentedDragos(totalUnRentedDragosCount);

        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [getDragoStat]);

  return { totalUnclaimedDSA, totalRentedDragos, totalUnrentedDragos, totalDragos };
};
