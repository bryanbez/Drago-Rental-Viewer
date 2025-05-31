import { Text, View } from 'react-native';
import { CardComponent } from './partials/Card';
import { useState } from 'react';
import { DisplayCardProps } from 'app/types/dataFilterTypes';
import { ActivityIndicator } from 'react-native-paper';
import { filterDrago } from 'app/utils/filter';
import { paginate } from 'app/utils/paginate';
import { PaginationButtons } from './partials/PaginationBtn';
import { useFetchDragos } from 'app/hooks/useFetchDragos';
import { getDragos } from 'app/controllers/dragosController';

export const DisplayCard: React.FC<DisplayCardProps> = ({ filter }) => {
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const { dragos, loading, error } = useFetchDragos(getDragos);

  if (loading) return <ActivityIndicator size="large" />;

  const filteredData = filterDrago(dragos, filter);
  const paginated = paginate(filteredData, page, itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <PaginationButtons
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newCount) => {
          setItemsPerPage(newCount);
          setPage(0);
        }}
      />
      <View className="flex-row flex-wrap justify-between ">
        {paginated.map((drago) => (
          <View className=" w-[49%]" key={drago.tokenId}>
            <CardComponent
              tokenId={`Drago #${drago.tokenId}`}
              unclaimedDSA={drago.unclaimedDSA}
              level={drago.level}
              dragoImageURL={drago.dragoImageURL}
            />
          </View>
        ))}

        {error && <Text className="text-center">Error Loading Dragos</Text>}
      </View>
    </>
  );
};
