import React, { useState } from 'react';
import { TextBoxComponent } from './partials/Textbox';
import { View } from 'react-native';
import { RadioBtnComponent } from './partials/RadioBtn';

export function SettingsComponent() {
  const [settingData, setSettingData] = useState({
    walletAddress: '',
    dragosDisplayPerPage: 5,
  });

  const handleInputChange = (name: string, value: number | string) => {
    setSettingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(settingData);

  return (
    <View>
      <TextBoxComponent onChangeText={handleInputChange} />
      <RadioBtnComponent
        onValueChange={handleInputChange}
        selectedOption={settingData.dragosDisplayPerPage}
      />
    </View>
  );
}
