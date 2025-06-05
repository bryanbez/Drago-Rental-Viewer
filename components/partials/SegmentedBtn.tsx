import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

export interface FilterBarProps {
  filter: string;
  selectedFilter: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
}

export const SegmentedBtn: React.FC<FilterBarProps> = ({
  filter,
  selectedFilter,
  page,
  setPage,
}) => {
  const handleChange = (value: string) => {
    selectedFilter(value);
    setPage(0); // reset to page 1 on filter change
  };
  return (
    // style={styles.container}
    <View className="align-center flex w-[90%] justify-center">
      <SegmentedButtons
        value={filter}
        onValueChange={handleChange}
        buttons={[
          { value: 'allDragos', label: 'All Dragos' },
          { value: 'withUnclaimedDSA', label: 'Has Unclaimed DSA' },
        ]}
      />
    </View>
  );
};
