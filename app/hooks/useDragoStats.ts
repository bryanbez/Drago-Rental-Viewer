import { useState, useEffect } from 'react';
import { DragoInfo } from 'app/types/dragoTypes';

interface DragoStatsProp {
  totalUnclaimedDSA: number;
  totalDragos: number;
  totalRentedDragos: number;
  totalUnrentedDragos: number;
}

export const useDragoStats = (dragos: DragoInfo[] | null): DragoStatsProp => {
  const [totalUnclaimedDSA, setTotalUnclaimedDSA] = useState<number>(0);
  const [totalRentedDragos, setTotalRentedDragos] = useState<number>(0);
  const [totalUnrentedDragos, setTotalUnrentedDragos] = useState<number>(0);
  const [totalDragos, setTotalDragos] = useState<number>(0);

  useEffect(() => {
    if (dragos) {
      const unclaimedProfitTotal = dragos?.reduce((acc, drago) => {
        const everyDragoProfit = drago.rent.stats?.unclaimedProfit;
        // drago.rent.stats?.unclaimedProfit because some non rented dragos has unclaimed dst
        return acc + (everyDragoProfit ?? 0);
      }, 0);
      const totalUnRentedDragosCount = dragos?.filter(
        (item) => Number(item.rent.status) === 0
      ).length;
      const totalRentedDragosCount = dragos?.filter(
        (item) => Number(item.rent.status) === 1
      ).length;
      setTotalUnclaimedDSA(unclaimedProfitTotal);
      setTotalDragos(dragos?.length);
      setTotalRentedDragos(totalRentedDragosCount);
      setTotalUnrentedDragos(totalUnRentedDragosCount);
    }
  }, [dragos]);

  return { totalUnclaimedDSA, totalRentedDragos, totalUnrentedDragos, totalDragos };
};
