import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Discount} from './src/screens';
import {HomePage} from './src/screens';
import {EmptyPage} from './src/screens/EmptyPage/EmptyPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Discount" component={Discount} />
        <Stack.Screen name="HR" component={EmptyPage} />
        <Stack.Screen name="Health" component={EmptyPage} />
        <Stack.Screen name="TechnicalGuide" component={EmptyPage} />
        <Stack.Screen name="Fruits" component={EmptyPage} />
        <Stack.Screen name="Travel" component={EmptyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
