import { LimitedDragoInfo } from 'app/types/dataFilterTypes';

export const filterDrago = (dragos: LimitedDragoInfo[], filter: string): LimitedDragoInfo[] => {
  return dragos.filter((item) => {
    if (filter === 'allDragos') return true;
    return item.unclaimedDSA !== 0;
  });
};
