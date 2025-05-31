import DashboardComponent from 'components/Dashboard';
import { View } from 'react-native';
export const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DashboardComponent></DashboardComponent>
    </View>
  );
};
