import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { CardComponent } from './partials/Card';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { filterDrago } from 'app/utils/filter';
import { paginate } from 'app/utils/paginate';
import { PaginationButtons } from './partials/PaginationBtn';
import { useCachedDragos } from 'app/hooks/useCachedDragos';
import { getDragos } from 'app/controllers/dragosController';
import { SegmentedBtn } from './partials/SegmentedBtn';
import { LimitedDragoInfo } from 'app/types/dataFilterTypes';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const DisplayCard: React.FC = () => {
  // this is for saving data into local storage

  const { dragos, loading } = useCachedDragos();

  let convertToLimitedData: LimitedDragoInfo[] = [];

  if (dragos) {
    convertToLimitedData = getDragos(dragos);
  }

  const [page, setPage] = useState<number>(0);

  const itemsPerPage = useSelector((state: RootState) => state.settings.dragoDisplayPerPage);

  const [filter, setSelectedFilter] = useState<string>('allDragos'); // default

  if (loading) return <ActivityIndicator size="large" />;

  const filteredData = filterDrago(convertToLimitedData, filter);
  const paginated = paginate(filteredData, page, itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <SafeAreaView className="h-[20%] items-center justify-center bg-gray-300">
        <SegmentedBtn
          filter={filter}
          selectedFilter={setSelectedFilter}
          page={page}
          setPage={setPage}
        />
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(newCount) => {
            // setItemsPerPage(newCount);
            setPage(0);
          }}
        />
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View className="flex-row flex-wrap justify-between">
          {paginated.map((drago) => (
            <View className=" w-[49%]" key={drago.tokenId}>
              <CardComponent
                tokenId={drago.tokenId}
                unclaimedDSA={drago.unclaimedDSA}
                level={drago.level}
                dragoImageURL={drago.dragoImageURL}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor: '#D1D5DB',
    paddingBottom: 50,
  },
});
