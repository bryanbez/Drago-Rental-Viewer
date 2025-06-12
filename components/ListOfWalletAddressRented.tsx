import { Text, View } from 'react-native';
import { useDragosPerRenteeAddress } from 'app/hooks/useGetRenteesInfo';
import { shortenWalletAddress } from 'app/utils/shortenWA';

const ListOfWalletAddressRented = () => {
  const { rentedDragosInfo } = useDragosPerRenteeAddress();

  return rentedDragosInfo.length !== 0 ? (
    <View className="px-4">
      <View className="mb-2 flex flex-row justify-between px-2">
        <Text className="w-[45%] text-center text-sm font-bold">Wallet Address</Text>
        <Text className="w-[25%] text-center text-sm font-bold"># of Dragos</Text>
        <Text className="w-[30%] text-center text-sm font-bold">Unclaimed Profit</Text>
      </View>

      {rentedDragosInfo?.map((rentInfo) => {
        return (
          <View
            key={rentInfo.walletAddress}
            className="mb-2 flex flex-row items-center justify-between rounded-xl bg-white p-3 shadow-lg shadow-slate-800">
            <Text className="w-[45%] text-center text-sm font-medium">
              {shortenWalletAddress(rentInfo.walletAddress)}
            </Text>
            <Text className="w-[25%] text-center text-sm font-medium">
              {rentInfo.dragoRentedCount}
            </Text>
            <Text className="w-[30%] text-center text-sm font-medium">
              {rentInfo.renterCurrentGatherDSTCount}
            </Text>
          </View>
        );
      })}
    </View>
  ) : (
    <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
      <Text className="text-center text-xl font-semibold">
        Seems like youre not rented some of your drago
      </Text>
    </View>
  );
};

export default ListOfWalletAddressRented;
