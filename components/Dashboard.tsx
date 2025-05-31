import { View, Text } from 'react-native';
import { useDragoStats } from 'app/hooks/useDragoStats';
import { getDragosFullData } from 'app/controllers/dragosController';

const DashboardComponent = () => {
  const { totalUnclaimedDSA, totalDragos, totalRentedDragos, totalUnrentedDragos } =
    useDragoStats(getDragosFullData);

  const view_box_style = 'aspect-[1] rounded-2xl p-6 shadow-md';
  const title_style = 'pb-4 text-center text-2xl font-semibold text-white';
  const desc_style = 'text-center text-4xl font-semibold text-white';

  return (
    <View className="flex-row flex-wrap justify-center p-4">
      {/* Box 1 */}
      <View className="w-1/2 p-2">
        <View className={`bg-blue-500 ${view_box_style}`}>
          <Text className={`${title_style}`}>Dragos Count</Text>
          <Text className={`${desc_style}`}>{totalDragos}</Text>
        </View>
      </View>

      {/* Box 2 */}
      <View className="w-1/2 p-2">
        <View className={`bg-red-500 ${view_box_style}`}>
          <Text className={`${title_style}`}>Unclaimed DSA</Text>
          <Text className={`${desc_style}`}>{totalUnclaimedDSA}</Text>
        </View>
      </View>

      {/* Box 3 */}
      <View className="w-1/2 p-2">
        <View className={`bg-green-500 ${view_box_style}`}>
          <Text className={`${title_style}`}>Rented Dragos</Text>
          <Text className={`${desc_style}`}>{totalRentedDragos}</Text>
        </View>
      </View>

      {/* Box 4 */}
      <View className="w-1/2 p-2">
        <View className={`bg-purple-500 ${view_box_style}`}>
          <Text className={`${title_style}`}>Non Rented Dragos</Text>
          <Text className={`${desc_style}`}>{totalUnrentedDragos}</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardComponent;
