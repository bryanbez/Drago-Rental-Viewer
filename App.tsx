import './global.css';
import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeRoute, DragoRoute, SettingsRoute, RenteeDragoRoute } from 'app/route';
import { useCachedDragos } from 'app/hooks/useCachedDragos';
import CustomTabIcon from 'components/CustomTabIcons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';

const Tab = createBottomTabNavigator();

function HomePage() {
  return <HomeRoute />;
}
function SettingsPage() {
  return <SettingsRoute />;
}
function DragoPage() {
  return <DragoRoute />;
}

function RenteeDragoPage() {
  return <RenteeDragoRoute />;
}

export default function App() {
  const { dragos } = useCachedDragos();
  const dragoDataLength = dragos?.length;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused }) => (
                    <CustomTabIcon
                      focused={focused}
                      name={route.name as 'Home' | 'Dragos' | 'Settings' | 'Rentee Info'}
                    />
                  ),
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen name="Home" component={HomePage} />
                {dragoDataLength !== 0 ? <Tab.Screen name="Dragos" component={DragoPage} /> : null}
                {dragoDataLength !== 0 ? (
                  <Tab.Screen name="Rentee Info" component={RenteeDragoPage} />
                ) : null}
                <Tab.Screen name="Settings" component={SettingsPage} />
              </Tab.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
