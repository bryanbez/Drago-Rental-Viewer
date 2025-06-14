import { fetchDragosInfo } from 'app/api/dragoApi';
import { loadCacheData, saveCacheData } from 'app/utils/manageCache';
import { useEffect, useState } from 'react';
import { DragoInfo } from 'app/types/dragoTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'dragos-cache';

export const useCachedDragos = () => {
  const [dragos, setDragos] = useState<DragoInfo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const getWallet = async () => {
      const address = await AsyncStorage.getItem('walletAddress');
      setWalletAddress(address);
    };

    getWallet();

    const interval = setInterval(getWallet, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadDragoData = async () => {
      const cachedData = await loadCacheData<DragoInfo[]>(STORAGE_KEY);
      if (cachedData) setDragos(cachedData.data);

      const response = await fetchDragosInfo(cachedData?.etag);
      if (response.etag !== cachedData?.etag) {
        console.log('Updating cache data');
        setDragos(response.data);
        await saveCacheData(STORAGE_KEY, {
          data: response.data,
          etag: response.etag,
        });
      } else {
        console.log('Using cached data');
      }

      setLoading(false);
    };
    loadDragoData();
  }, [walletAddress]);

  return { dragos, loading };
};
