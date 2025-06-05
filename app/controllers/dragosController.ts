import { LimitedDragoInfo } from 'app/types/dataFilterTypes';
import { DragoInfo } from 'app/types/dragoTypes';

let dragoImageURLink = 'https://lok-nft.leagueofkingdoms.com/api/card/drago/';

export const getDragos = (dragos: DragoInfo[]): LimitedDragoInfo[] => {
  //temporary
  return dragos?.map((drago) => ({
    tokenId: drago.tokenId,
    dragoImageURL: `${dragoImageURLink}${drago.tokenId}`,
    unclaimedDSA: drago.rent.stats?.unclaimedProfit || 0, // If have drago but not rented, we need ? on stats[0]

    level: drago.level,
  }));
};

export const getDragosFullData = (dragos: DragoInfo[]): DragoInfo[] | null => {
  return dragos?.map((drago) => ({
    ...drago,
    dragoImageURL: `${dragoImageURLink}${drago.tokenId}`,
  }));
};
