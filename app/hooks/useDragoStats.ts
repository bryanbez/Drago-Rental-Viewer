import { useState, useEffect } from 'react';
import { getDragosFullData } from 'app/controllers/dragosController';
import { useCachedDragos } from './useCachedDragos';

interface DragoStatsProp {
  totalUnclaimedDSA: number;
  totalDragos: number;
  totalRentedDragos: number;
  totalUnrentedDragos: number;
}

export const useDragoStats = (): DragoStatsProp => {
  const [totalUnclaimedDSA, setTotalUnclaimedDSA] = useState<number>(0);
  const [totalRentedDragos, setTotalRentedDragos] = useState<number>(0);
  const [totalUnrentedDragos, setTotalUnrentedDragos] = useState<number>(0);
  const [totalDragos, setTotalDragos] = useState<number>(0);

  const { dragos } = useCachedDragos();

  const getFullData = getDragosFullData(dragos ?? []);

  useEffect(() => {
    if (getFullData) {
      const unclaimedProfitTotal = getFullData?.reduce((acc, drago) => {
        const everyDragoProfit = drago.rent.stats?.unclaimedProfit;
        // drago.rent.stats?.unclaimedProfit because some non rented dragos has unclaimed dst
        return acc + (everyDragoProfit ?? 0);
      }, 0);

      const totalUnRentedDragosCount = getFullData?.filter(
        (item) => Number(item.rent.status) === 0
      ).length;

      const totalRentedDragosCount = getFullData?.filter(
        (item) => Number(item.rent.status) === 1
      ).length;

      setTotalUnclaimedDSA(unclaimedProfitTotal);
      setTotalDragos(getFullData?.length);
      setTotalRentedDragos(totalRentedDragosCount);
      setTotalUnrentedDragos(totalUnRentedDragosCount);
    }
  }, [getFullData, dragos]);

  return { totalUnclaimedDSA, totalRentedDragos, totalUnrentedDragos, totalDragos };
};
