import { DragoInfo } from 'app/types/dragoTypes';
import { LimitedDragoInfo } from 'app/types/dataFilterTypes';

export interface RentersInfo {
  walletAddress: string;
  dragoRentedCount: number;
  totalUnclaimedDST: number;
  dragoInfo: LimitedDragoInfo[];
}

export const getRentersWalletAddresses = (dragos: DragoInfo[]): RentersInfo[] => {
  const walletMap: Record<string, RentersInfo> = {};

  const rented = dragos?.filter((drago) => Number(drago.rent.status) === 1);
  rented?.forEach((rent) => {
    const wallet = rent.rent.to.toLowerCase();
    const stats = rent.rent.stats;

    const limitedDragoInfo: LimitedDragoInfo = {
      tokenId: rent.tokenId,
      dragoImageURL: '',
      unclaimedDSA: rent.rent.stats.unclaimedProfit,
      level: rent.level,
    };

    let unclaimedProfit = 0;
    if (Array.isArray(stats)) {
      unclaimedProfit = stats.reduce((sum, s) => sum + (s.unclaimedProfit || 0), 0);
    } else if (typeof stats === 'object' && stats !== null) {
      unclaimedProfit = stats.unclaimedProfit || 0;
    }

    if (walletMap[wallet]) {
      walletMap[wallet].totalUnclaimedDST += unclaimedProfit;
      walletMap[wallet].dragoRentedCount += 1;
      walletMap[wallet].dragoInfo.push(limitedDragoInfo);
    } else {
      walletMap[wallet] = {
        walletAddress: wallet,
        totalUnclaimedDST: unclaimedProfit,
        dragoRentedCount: 1,
        dragoInfo: [limitedDragoInfo],
      };
    }
  });

  const result = Object.values(walletMap).sort(
    (a, b) => Number(b.totalUnclaimedDST) - Number(a.totalUnclaimedDST)
  );

  return result;
};
