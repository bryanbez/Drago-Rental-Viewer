import DashboardComponent from 'components/Dashboard';
import TopDragosWithUnclaimedDST from 'components/TopDragosWithUnclaimedDST';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import ListOfWalletAddressRented from 'components/ListOfWalletAddressRented';
export const HomePage = () => {
  return (
    <SafeAreaView className="bg-white-200 w-full flex-1 justify-end">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <Text className="text-center text-xl font-semibold">Dashboard</Text>
        </View>

        <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <DashboardComponent />
        </View>

        <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <Text className="text-center text-xl font-semibold">Top Dragos with Unclaimed DST</Text>
        </View>

        <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <TopDragosWithUnclaimedDST />
        </View>

        <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <Text className="text-center text-xl font-semibold">
            Addresses That You Rented Your Dragos
          </Text>
        </View>

        <View className="mb-4 self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
          <ListOfWalletAddressRented />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
