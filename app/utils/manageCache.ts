import { DragoApiCache } from 'app/types/dragoTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadCacheData = async <T>(key: string): Promise<DragoApiCache<T> | null> => {
  try {
    const currentData = await AsyncStorage.getItem(key);
    if (currentData) {
      //const parsed = JSON.parse(currentData);
      //console.log(`[CACHE] Load key: ${key}, ETag: ${parsed.etag}`);
    }
    return currentData ? JSON.parse(currentData) : null;
  } catch (error) {
    console.log('Failed to load cache data', error);
    return null;
  }
};

export const saveCacheData = async <T>(key: string, cache: DragoApiCache<T>): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(cache));
    // console.log(`[CACHE] Saving cache with key: ${key}, ETag: ${cache.etag}`);
  } catch (error) {
    console.error('Failed to save cache', error);
  }
};
