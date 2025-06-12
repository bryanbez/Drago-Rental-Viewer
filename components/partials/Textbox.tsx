import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

interface TextboxProps {
  onChangeText: (name: string, value: string) => void;
}

export const TextBoxComponent: React.FC<TextboxProps> = ({ onChangeText }) => {
  return (
    <View>
      <TextInput
        label="Wallet Address"
        onChangeText={(text) => {
          onChangeText('walletAddress', text);
        }}
      />
      ;
    </View>
  );
};
