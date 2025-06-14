import { DragoWithUnclaimedDST } from 'app/types/dragoWithUnclaimedDSTTypes';
import { Card, Text } from 'react-native-paper';
import { View, Image, ScrollView, Dimensions } from 'react-native';

interface TableDisplayProps {
  dragos: DragoWithUnclaimedDST[];
}

const rankColors = ['#F3C623', '#C0C0C0', '#CD7F32'];

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth * 0.5;
const spacing = 16;
const dragoDescription = 'p-2 text-center text-2xl font-semibold';

export const CardOneRow = ({ dragos }: TableDisplayProps) => {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + spacing}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingRight: 24,
        }}
        className="rounded-xl bg-white">
        {dragos.map((drago, index) => {
          const borderColorByRank = rankColors[index] || '#0B1D51';
          return (
            <Card
              key={drago.tokenId}
              style={{
                width: cardWidth,
                marginRight: spacing,
                borderWidth: 1,
                borderColor: borderColorByRank,
              }}
              className="my-2 overflow-hidden bg-slate-50 shadow-md">
              <Card.Cover source={{ uri: drago.dragoImage }} />
              <Card.Content>
                <Text className={dragoDescription}>Unclaimed DSA: {drago.unclaimedProfit}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
};
