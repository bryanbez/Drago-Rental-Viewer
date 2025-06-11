import React, { useState } from 'react';
import { useDragosPerRenteeAddress } from 'app/hooks/useGetRenteesInfo';
import { List, Text, ProgressBar } from 'react-native-paper';
import { View } from 'react-native';
import { CardComponent } from './partials/Card';
import { fetchDragoPic } from 'app/utils/fetchDragoPic';
import { shortenWalletAddress } from 'app/utils/shortenWA';
import { useDragoStats } from 'app/hooks/useDragoStats';

export const DragosPerRenteeAddress = () => {
  const { rentedDragosInfo } = useDragosPerRenteeAddress();

  const [expandedList, setExpandedList] = useState<number | null>(null);

  const { totalUnclaimedDSA } = useDragoStats();

  const handlePress = (index: number) => {
    setExpandedList((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <List.Section>
      {rentedDragosInfo?.map((rentInfo, index) => {
        const percent = rentInfo.totalUnclaimedDST / totalUnclaimedDSA;
        return (
          <View key={index} className="mb-4">
            <List.Accordion
              title={`(${rentInfo.dragoInfo.length} Drago/s) ${shortenWalletAddress(rentInfo.walletAddress)}`}
              titleStyle={{ fontWeight: 'bold', color: '#1f2937' }}
              expanded={expandedList === index}
              onPress={() => handlePress(index)}
              style={{ backgroundColor: '#f3f4f6', paddingLeft: 0 }}>
              <View className="w-full flex-row flex-wrap justify-between self-center">
                {rentInfo.dragoInfo?.map((drago, index) => (
                  <View key={index} className="w-[48%]">
                    <CardComponent
                      tokenId={drago.tokenId}
                      unclaimedDSA={drago.unclaimedDSA}
                      level={drago.level}
                      dragoImageURL={fetchDragoPic(drago.tokenId)}
                    />
                  </View>
                ))}
              </View>
            </List.Accordion>
            <View className="relative mt-1 h-6 w-full">
              <ProgressBar
                progress={percent}
                color="#22c55e"
                style={{ height: 25, borderRadius: 4 }}
              />
              <View className="absolute inset-0 flex-row items-center justify-center">
                <Text className="text-lg font-bold">
                  {Math.round(percent * 100)}% ({rentInfo.totalUnclaimedDST} DST)
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </List.Section>
  );
};
