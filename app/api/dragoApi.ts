import { DragoInfo } from 'app/types/dragoTypes';

const DRAGO_API_URL = 'https://apibackenddrago.onrender.com/api/dragos';

export const fetchDragosInfo = async (): Promise<DragoInfo[]> => {
  try {
    const response = await fetch(`${DRAGO_API_URL}`);
    if (!response.ok) {
      throw new Error(`Error fetching Drago info: ${response.statusText}`);
    }
    const data: DragoInfo[] = await response.json();
    // no problem here
    return data;
  } catch (error) {
    console.error('Failed to fetch Drago info:', error);
    throw error;
  }
};
