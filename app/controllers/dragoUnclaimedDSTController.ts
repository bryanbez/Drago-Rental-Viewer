import { DragoInfo } from 'app/types/dragoTypes';
import { DragoWithUnclaimedDST } from 'app/types/dragoWithUnclaimedDSTTypes';

let dragoImageURLink = 'https://lok-nft.leagueofkingdoms.com/api/card/drago/';

export const getDragosWithUnclaimedDST = (
  dragos: DragoInfo[],
  limit: number = 10
): DragoWithUnclaimedDST[] => {
  return dragos
    ?.filter((drago) => drago.rent.stats.unclaimedProfit > 0)
    .sort((a, b) => b.rent.stats.unclaimedProfit - a.rent.stats.unclaimedProfit)
    .slice(0, limit)
    .map((drago) => ({
      tokenId: drago.tokenId,
      profitShareRatio: drago.rent.profitShareRatio,
      unclaimedProfit: drago.rent.stats.unclaimedProfit,
      dragoImage: `${dragoImageURLink}${drago.tokenId}`,
    }));
};
