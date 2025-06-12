import React, { useState } from 'react';
import { useDragosPerRenteeAddress } from 'app/hooks/useGetRenteesInfo';
import { List, Text, ProgressBar, Card } from 'react-native-paper';
import { View, Image } from 'react-native';
import { CardComponent } from './partials/Card';
import { fetchDragoPic } from 'app/utils/fetchDragoPic';
import { shortenWalletAddress } from 'app/utils/shortenWA';
import { useDragoStats } from 'app/hooks/useDragoStats';

export const DragosPerRenteeAddress = () => {
  const { rentedDragosInfo } = useDragosPerRenteeAddress();

  const [expandedList, setExpandedList] = useState<number | null>(null);

  // const { totalUnclaimedDSA } = useDragoStats();

  const handlePress = (index: number) => {
    setExpandedList((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <List.Section>
      {rentedDragosInfo?.map((rentInfo, index) => {
        // const percent =
        //   rentInfo?.renterCurrentGatherDSTCount != null &&
        //   totalUnclaimedDSA != null &&
        //   totalUnclaimedDSA > 0
        //     ? rentInfo.renterCurrentGatherDSTCount / totalUnclaimedDSA
        //     : 0;
        return (
          <Card key={index} style={{ marginVertical: 5, width: '90%', alignSelf: 'center' }}>
            <View>
              <Card.Content>
                <List.Item
                  left={() => (
                    <Image
                      source={require('../assets/wallet-address.png')}
                      style={{ width: 30, height: 30, borderRadius: 8, marginRight: 8 }}
                    />
                  )}
                  title={`${shortenWalletAddress(rentInfo.walletAddress)}`}
                  titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#ccc', // light gray line
                    paddingBottom: 2,
                    marginRight: 8,
                  }}
                />

                <List.Item
                  left={() => (
                    <Image
                      source={require('../assets/drago-image-transparent.png')}
                      style={{ width: 30, height: 30, borderRadius: 8, marginRight: 8 }}
                    />
                  )}
                  title={`Rented: ${rentInfo.dragoInfo.length}`}
                  titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#ccc', // light gray line
                    paddingBottom: 2,
                    marginRight: 8,
                  }}
                />
                <List.Item
                  left={() => (
                    <Image
                      source={require('../assets/dst-icon.png')}
                      style={{ width: 30, height: 30, borderRadius: 8, marginRight: 8 }}
                    />
                  )}
                  title={`${rentInfo.renterCurrentGatherDSTCount}`}
                  titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#ccc', // light gray line
                    paddingBottom: 2,
                    marginRight: 8,
                  }}
                />
              </Card.Content>
              <List.Accordion
                title=""
                right={() => (
                  <Text
                    style={{ color: '#10b981', fontWeight: 'bold', fontSize: 16, marginRight: 8 }}>
                    {expandedList === index ? 'Hide Dragos' : 'See Dragos'}
                  </Text>
                )}
                titleStyle={{ fontWeight: 'bold', color: '#1f2937' }}
                expanded={expandedList === index}
                onPress={() => handlePress(index)}
                style={{ backgroundColor: '#f3f4f6', paddingLeft: 0 }}>
                <View className="w-[95%] flex-row flex-wrap justify-between self-center">
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
            </View>
          </Card>
        );
      })}
    </List.Section>
  );
};
