import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_500Medium
} from '@expo-google-fonts/jost';

import AppRoutes from './src/routes/stack.routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_500Medium
  });

  if(!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}

export default App;