import { HomeRoute, SettingsRoute, DragoRoute } from 'app/route';
import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

const HomePage = () => <HomeRoute />;
const SettingsPage = () => <SettingsRoute />;
const DragosPage = () => <DragoRoute />;

export const Tabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Dashboard', icon: 'home' },
    { key: 'settings', title: 'Settings', icon: 'cog' },
    { key: 'drago', title: 'Drago', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    dragos: DragosPage,
    settings: SettingsPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

// Hindi ginagamit
