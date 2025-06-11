import { View, Text, ScrollView, Dimensions } from 'react-native';
import { useDragoStats } from 'app/hooks/useDragoStats';
import { useMarketPrice } from 'app/hooks/useMarketPrice';
import { DSTPriceOutput } from 'app/types/dragoPriceTypes';

const DashboardComponent = () => {
  const { totalUnclaimedDSA, totalDragos, totalRentedDragos, totalUnrentedDragos } =
    useDragoStats();

  const title_style = 'pb-4 text-center text-2xl font-semibold ';
  const desc_style = 'text-center text-4xl font-semibold';

  const { marketPrice, initialPrice, sixhourschange }: DSTPriceOutput =
    useMarketPrice(totalUnclaimedDSA);

  const other_text_style = `text-center text-xl font-semibold text-purple-800 `;

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth * 0.5;
  const spacing = 16;

  return (
    <View className="mx-auto my-4 w-[90%] rounded-xl bg-white shadow-lg shadow-slate-900">
      <View className="w-full flex-1 self-center rounded-2xl p-4">
        {/* Box 1 */}
        <View className=" mb-2 w-full rounded-xl border-2 border-red-300 bg-white p-4">
          <Text className={`text-red-500 ${title_style}`}>Unclaimed DST</Text>
          <Text className={`text-red-500 ${desc_style}`}>{totalUnclaimedDSA}</Text>
          <Text className={`pt-2 text-center text-2xl font-semibold text-black`}>
            (${marketPrice})
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth + spacing}
          decelerationRate="fast"
          snapToAlignment="start"
          contentContainerStyle={{ paddingHorizontal: 12, paddingRight: 24 }}
          className="w-full">
          <View
            style={{ width: cardWidth, marginRight: spacing }}
            className="mr-4  rounded-2xl border-2 border-green-300 bg-white p-4 shadow-lg">
            <Text className={`text-green-500 ${title_style}`}>Rented Dragos</Text>
            <Text className={`text-green-500 ${desc_style}`}>{totalRentedDragos}</Text>
          </View>

          <View
            style={{ width: cardWidth, marginRight: spacing }}
            className="mr-4 rounded-2xl border-2 border-purple-300 bg-white p-4 shadow-lg">
            <Text className={`text-purple-500 ${title_style}`}>Unrented Dragos</Text>
            <Text className={`text-purple-500 ${desc_style}`}>{totalUnrentedDragos}</Text>
          </View>

          <View
            style={{ width: cardWidth, marginRight: spacing }}
            className="rounded-2xl border-2 border-blue-300 bg-white p-4 shadow-lg">
            <Text className={` text-blue-500 ${title_style}`}>Dragos Count</Text>
            <Text className={`text-blue-500 ${desc_style}`}>{totalDragos}</Text>
          </View>
        </ScrollView>
      </View>
      <View className="mb-4 self-center rounded-xl border-2 border-purple-800 p-2">
        <Text className={`${other_text_style}`}>
          DST to USD: ${initialPrice.toFixed(6)} ({sixhourschange}%)
        </Text>
      </View>
    </View>
  );
};

export default DashboardComponent;
