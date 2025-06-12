import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from 'app/store/settingsSlice';
import { AppDispatch, RootState } from 'app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const updateSetting = (partialSetting: Partial<typeof settings>) => {
    dispatch(setSettings(partialSetting));

    if (partialSetting.walletAddress) {
      AsyncStorage.setItem('walletAddress', partialSetting.walletAddress);
    }
  };

  return {
    settings,
    updateSetting,
  };
};
