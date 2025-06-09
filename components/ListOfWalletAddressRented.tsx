import { Text, View } from 'react-native';
import { useCachedDragos } from 'app/hooks/useCachedDragos';
import { shortenWalletAddress } from 'app/utils/shortenWA';

const ListOfWalletAddressRented = () => {
  const walletMap: Record<
    string,
    {
      walletAddress: string;
      unclaimedProfit: number;
      dragoCount: number;
    }
  > = {};

  const { dragos } = useCachedDragos();

  const rented = dragos?.filter((drago) => Number(drago.rent.status) === 1);
  rented?.forEach((rent) => {
    const wallet = rent.rent.to.toLowerCase();
    const stats = rent.rent.stats;

    let unclaimedProfit = 0;
    if (Array.isArray(stats)) {
      unclaimedProfit = stats.reduce((sum, s) => sum + (s.unclaimedProfit || 0), 0);
    } else if (typeof stats === 'object' && stats !== null) {
      unclaimedProfit = stats.unclaimedProfit || 0;
    }

    if (walletMap[wallet]) {
      walletMap[wallet].unclaimedProfit += unclaimedProfit;
      walletMap[wallet].dragoCount += 1;
    } else {
      walletMap[wallet] = {
        walletAddress: wallet,
        unclaimedProfit,
        dragoCount: 1,
      };
    }
  });
  const result = Object.values(walletMap).sort(
    (a, b) => Number(b.unclaimedProfit) - Number(a.unclaimedProfit)
  );

  return (
    <View className="px-4">
      <View className="mb-2 flex flex-row justify-between px-2">
        <Text className="w-[45%] text-center text-sm font-bold">Wallet Address</Text>
        <Text className="w-[25%] text-center text-sm font-bold"># of Dragos</Text>
        <Text className="w-[30%] text-center text-sm font-bold">Unclaimed Profit</Text>
      </View>

      {result?.map((rentInfo) => (
        <View
          key={rentInfo.walletAddress}
          className="mb-2 flex flex-row items-center justify-between rounded-xl bg-white p-3 shadow-lg shadow-slate-800">
          <Text className="w-[45%] text-center text-sm font-medium">
            {shortenWalletAddress(rentInfo.walletAddress)}
          </Text>
          <Text className="w-[25%] text-center text-sm font-medium">{rentInfo.dragoCount}</Text>
          <Text className="w-[30%] text-center text-sm font-medium">
            {rentInfo.unclaimedProfit}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ListOfWalletAddressRented;
