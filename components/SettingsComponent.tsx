import { useState } from 'react';
import { TextBoxComponent } from './partials/Textbox';
import { View } from 'react-native';
import { RadioBtnComponent } from './partials/RadioBtn';
import { useSettings } from 'app/hooks/useSettings';

export function SettingsComponent() {
  const { updateSetting } = useSettings();

  const [settingData, setSettingData] = useState({
    walletAddress: '',
    dragosDisplayPerPage: 5,
  });
  const handleInputChange = async (name: string, value: number | string) => {
    const newData = {
      ...settingData,
      [name]: value,
    };
    setSettingData({ ...newData });
    updateSetting({ ...newData });

    // use the newData const to update immediately the data.
    // no need to call the useState to save the data in redux-persists
  };

  return (
    <View className="mt-4 w-[90%] self-center">
      <View className="mb-4">
        <TextBoxComponent onChangeText={handleInputChange} />
      </View>
      <View className="mb-2">
        <RadioBtnComponent
          onValueChange={handleInputChange}
          selectedOption={settingData.dragosDisplayPerPage}
        />
      </View>
    </View>
  );
}
