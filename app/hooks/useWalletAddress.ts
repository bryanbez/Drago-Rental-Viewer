import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const useWalletAddress = () => {
  return useSelector((state: RootState) => state.settings.walletAddress);
};
