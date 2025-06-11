import { useCachedDragos } from './useCachedDragos';
import { RentersInfo, getRentersWalletAddresses } from 'app/utils/getRentersWalletAddresses';

export const useDragosPerRenteeAddress = () => {
  const { dragos } = useCachedDragos();
  const rentedDragosInfo: RentersInfo[] = getRentersWalletAddresses(dragos ?? []);

  return { rentedDragosInfo };
};
