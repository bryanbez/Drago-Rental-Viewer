import { DragoInfo } from 'app/types/dragoTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchDragosInfo = async (
  etag?: string
): Promise<{ data: DragoInfo[]; etag: string }> => {
  const headers: Record<string, string> = {};
  if (etag) headers['If-None-Match'] = etag;

  const walletAddress = await AsyncStorage.getItem('walletAddress');

  if (!walletAddress) {
    throw new Error('Wallet Address is not set.');
  }

  const response = await fetch('https://lok-nft.leagueofkingdoms.com/api/drago/inventory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address: walletAddress,
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
