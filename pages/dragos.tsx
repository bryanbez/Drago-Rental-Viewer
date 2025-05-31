import { DisplayCard } from 'components/DisplayCard';
import { SegmentedBtn } from 'components/partials/SegmentedBtn';
import { useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const HEADER_HEIGHT = height * 0.1; // 15% of the screen height
// This
export const DragosPage: React.FC = () => {
  const [filter, setSelectedFilter] = useState<string>('allDragos'); // default
  return (
    <View className="flex-1 bg-white">
      <View style={{ height: HEADER_HEIGHT }} className="items-center justify-center bg-blue-100">
        <SegmentedBtn filter={filter} selectedFilter={setSelectedFilter} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewStyle} className="mx-5 flex-1 bg-white">
        <DisplayCard filter={filter} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingBottom: 80,
    paddingTop: 10,
  },
});
