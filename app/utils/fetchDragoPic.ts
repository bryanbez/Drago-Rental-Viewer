let dragoImageURLink = 'https://lok-nft.leagueofkingdoms.com/api/card/drago/';

export const fetchDragoPic = (dragoId: number) => {
  return `${dragoImageURLink}${dragoId}`;
};
