import { DragoInfo } from 'app/types/dragoTypes';

//const DRAGO_API_URL = 'https://apibackenddrago.onrender.com/api/dragos';

export const fetchDragosInfo = async (
  etag?: string
): Promise<{ data: DragoInfo[]; etag: string }> => {
  const headers: Record<string, string> = {};
  if (etag) headers['If-None-Match'] = etag;

  //const response = await fetch(`${DRAGO_API_URL}`, { headers });

  // POST request to fetch users drago inventory
  const response = await fetch('https://lok-nft.leagueofkingdoms.com/api/drago/inventory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address: '0x39993e13f9BDd8D93793aD53834A2182924AE960',
      //0xcF02aa83ca1A0D185b301f7d7f8FC2dFDEf2A0b5
      //0x1839BFc9bb71aa8E2F1f863df4C93529c500ffDb
      //0x39993e13f9BDd8D93793aD53834A2182924AE960 100+ dragos
      // 0xff8Ae8C86afcF0beB8332778B9591832F7767E6c
      includeRent: true,
    }),
  });

  if (response.status === 304) {
    return { data: [], etag: etag! };
  }

  const newEtag = response.headers.get('ETag') || '';

  // return code in fetching dragos via POST
  const wholeResponse = await response.json();
  const data = wholeResponse.myDragos;

  return { data, etag: newEtag };
};
