import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import PostScreen from './src/screens/PostScreen'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Since">
        <Stack.Screen name="Since"  component={HomeScreen}/>
        <Stack.Screen name="Post"  component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;