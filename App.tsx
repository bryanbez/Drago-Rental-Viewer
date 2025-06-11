import './global.css';
import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeRoute, DragoRoute, SettingsRoute, RenteeDragoRoute } from 'app/route';
import { Ionicons } from '@expo/vector-icons';
import { useCachedDragos } from 'app/hooks/useCachedDragos';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = 'alert-circle-outline'; //assigned a default value fallback to remove error

                switch (route.name) {
                  case 'Home':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case 'Dragos':
                    iconName = focused ? 'bug' : 'bug-outline';
                    break;
                  case 'Settings':
                    iconName = focused ? 'settings' : 'settings-outline';
                    break;
                  case 'Rentee Info':
                    iconName = focused ? 'information-outline' : 'information-circle-outline';
                    break;
                }

                return <Ionicons name={iconName as any} size={size} color={color} />;
              },
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
  );
}
