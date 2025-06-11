import { Card } from 'react-native-paper';
import { Text } from 'react-native';
import { LimitedDragoInfo } from 'app/types/dataFilterTypes';

export const CardComponent = ({
  tokenId,
  unclaimedDSA,
  level,
  dragoImageURL,
}: LimitedDragoInfo) => {
  return (
    <Card className="my-2 overflow-hidden shadow-md">
      <Card.Cover source={{ uri: dragoImageURL }} style={{ height: 175, width: '100%' }} />
      <Card.Content className="px-4 py-2">
        <Text className="text-lg font-semibold">Drago #{tokenId}</Text>
        <Text className="text-lg font-semibold">To Claim: {unclaimedDSA} DST</Text>
        <Text className="text-lg font-semibold text-green-600">Level: {level}</Text>
      </Card.Content>
    </Card>
  );
};
