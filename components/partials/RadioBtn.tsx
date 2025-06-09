import { Pressable, View, Text } from 'react-native';

interface RadioBtnProps {
  onValueChange: (name: string, value: number) => void;
  selectedOption: number;
}

const dragoPerPageOptions = [
  { label: '5 Per Page', value: 5 },
  { label: '10 Per Page', value: 10 },
  { label: '20 Per Page', value: 20 },
];

export const RadioBtnComponent = ({ onValueChange, selectedOption }: RadioBtnProps) => {
  return (
    <>
      <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 4 }}>Drago Display Per Page</Text>
      {dragoPerPageOptions.map((option) => (
        <Pressable
          key={option.value}
          onPress={() => onValueChange('dragosDisplayPerPage', option.value)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#333',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            {selectedOption === option.value && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: '#333',
                }}
              />
            )}
          </View>
          <Text>{option.label}</Text>
        </Pressable>
      ))}
    </>
  );
};
