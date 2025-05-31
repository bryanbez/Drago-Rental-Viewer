import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

export interface FilterBarProps {
  filter: string;
  selectedFilter: (value: string) => void;
}

export const SegmentedBtn: React.FC<FilterBarProps> = ({ filter, selectedFilter }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={filter}
        onValueChange={selectedFilter}
        buttons={[
          { value: 'allDragos', label: 'All Dragos' },
          { value: 'withUnclaimedDSA', label: 'Has Unclaimed DSA' },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
