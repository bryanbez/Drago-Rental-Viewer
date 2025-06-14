import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

interface TextboxProps {
  onChangeText: (name: string, value: string) => void;
}

export const TextBoxComponent: React.FC<TextboxProps> = ({ onChangeText }) => {
  const walletAddress = useSelector((state: RootState) => state.settings.walletAddress);

  return (
    <View>
      <TextInput
        label={`Wallet Address`} // to prevent error that need to use  <Text><Text/>
        value={walletAddress!}
        onChangeText={(text) => {
          onChangeText('walletAddress', text);
        }}
      />
      ;
    </View>
  );
};
