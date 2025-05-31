import { fetchDragosInfo } from 'app/api/dragoApi';
import { LimitedDragoInfo } from 'app/types/dataFilterTypes';
import { DragoInfo } from 'app/types/dragoTypes';

export const getDragos = async (): Promise<LimitedDragoInfo[]> => {
  //temporary
  let dragoImageURLink = 'https://lok-nft.leagueofkingdoms.com/api/card/drago/';

  try {
    const dragos = await fetchDragosInfo();

    const dragoPreview: LimitedDragoInfo[] = dragos.map((drago) => ({
      tokenId: drago.tokenId,
      dragoImageURL: `${dragoImageURLink}${drago.tokenId}`,
      unclaimedDSA: drago.rent.stats[0].unclaimedProfit, // Assuming this is correct
      level: drago.level,
    }));

    return dragoPreview;
  } catch (error) {
    console.error('Error fetching Drago data:', error);
    throw error;
  }
};

export const getDragosFullData = async (): Promise<DragoInfo[]> => {
  try {
    const dragos = await fetchDragosInfo();

    const dragoFullData: DragoInfo[] = dragos.map((drago) => ({
      _id: drago._id,
      lair: drago.lair,
      rent: drago.rent,
      network: drago.network,
      status: drago.status,
      breed: drago.breed,
      fusion: drago.fusion,
      block: drago.block,
      parents: drago.parents,
      level: drago.level,
      xp: drago.xp,
      tokenId: drago.tokenId,
      owner: drago.owner,
      grade: drago.grade,
      dragoImageURL: '',
    }));
    return dragoFullData;
  } catch (error) {
    console.error('Error fetching Drago data:', error);
    throw error;
  }
};
