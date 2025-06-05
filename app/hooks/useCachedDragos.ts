import { fetchDragosInfo } from 'app/api/dragoApi';
import { loadCacheData, saveCacheData } from 'app/utils/manageCache';
import { useEffect, useState } from 'react';
import { DragoInfo } from 'app/types/dragoTypes';

const STORAGE_KEY = 'dragos-cache';

export const useCachedDragos = () => {
  const [dragos, setDragos] = useState<DragoInfo[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDragoData = async () => {
      const cachedData = await loadCacheData<DragoInfo[]>(STORAGE_KEY);
      if (cachedData) setDragos(cachedData.data);

      const response = await fetchDragosInfo(cachedData?.etag);
      if (response.etag !== cachedData?.etag) {
        console.log('🔄 ETag changed — updating cache');
        setDragos(response.data);
        await saveCacheData(STORAGE_KEY, {
          data: response.data,
          etag: response.etag,
        });
      } else {
        console.log('✅ ETag unchanged — using cached data');
      }

      setLoading(false);
    };
    loadDragoData();
  }, []);

  return { dragos, loading };
};
