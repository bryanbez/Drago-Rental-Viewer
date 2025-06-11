import { CardOneRow } from './partials/CardOneRow';
import { useCachedDragos } from 'app/hooks/useCachedDragos';
import { getDragosWithUnclaimedDST } from 'app/controllers/dragoUnclaimedDSTController';
import { DragoWithUnclaimedDST } from 'app/types/dragoWithUnclaimedDSTTypes';
import { View, Text } from 'react-native';

const TopDragosWithUnclaimedDST = () => {
  const { dragos } = useCachedDragos();

  const getTopDragosWithUnclaimedDST: DragoWithUnclaimedDST[] = getDragosWithUnclaimedDST(
    dragos ?? []
  );

  return getTopDragosWithUnclaimedDST.length > 0 ? (
    <CardOneRow dragos={getTopDragosWithUnclaimedDST} />
  ) : (
    <View className="mb-4 w-full self-center rounded-xl bg-white p-4 shadow-lg shadow-slate-800">
      <Text className="text-center text-xl font-semibold">
        Seems like you claimed all unclaimed DST
      </Text>
    </View>
  );
};

export default TopDragosWithUnclaimedDST;
