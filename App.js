import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AccelerometerDataScreen from './src/screens/AccelerometerDataScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="AccelerometerData" component={AccelerometerDataScreen} options={{ title: 'Accelerometer Data' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
