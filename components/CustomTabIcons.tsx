import React from 'react';
import { Text, Image, View } from 'react-native';

interface TabIconProps {
  focused: boolean;
  name: 'Home' | 'Dragos' | 'Settings' | 'Rentee Info';
}

const CustomTabIcon: React.FC<TabIconProps> = ({ focused, name }) => {
  const icons = {
    Home: {
      active: require('../assets/wallet-address.png'),
      inactive: require('../assets/wallet-address.png'),
    },
    Dragos: {
      active: require('../assets/drago-image-transparent.png'),
      inactive: require('../assets/drago-image-transparent.png'),
    },
    Settings: {
      active: require('../assets/settings.png'),
      inactive: require('../assets/settings.png'),
    },
    'Rentee Info': {
      active: require('../assets/info.png'),
      inactive: require('../assets/info.png'),
    },
  };

  return (
    <Image
      source={focused ? icons[name].active : icons[name].inactive}
      style={{ width: 24, height: 24, tintColor: focused ? 'tomato' : 'gray' }}
    />
  );
};

export default CustomTabIcon;
