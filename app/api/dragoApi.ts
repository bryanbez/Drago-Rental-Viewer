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
      address: '0xaE9B55a2CFc6054ED1b430Ff8de1Bd84A44204C5',
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

  // const data = await response.json();

  // console.log(`[API] Response ETag: ${newEtag}`);

  return { data, etag: newEtag };
};
