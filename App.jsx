import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import HomeScreen from './src/HomeScreen';
import SettingsScreen from './src/SettingsScreen';
import TestScreen from './src/TestScreen';
import InfoScreen from './src/InfoScreen';
import store from './src/store';
import ResultScreen from './src/ResultScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
            />
            <Stack.Screen
              name="Test"
              component={TestScreen}
              options={{headerShown: false, gestureEnabled: false}}
            />
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              //options={{headerShown: false}}
            />
            <Stack.Screen
              name="Result"
              component={ResultScreen}
              options={{headerShown: false, gestureEnabled: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
