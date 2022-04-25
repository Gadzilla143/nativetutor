import React, {createContext, useEffect, useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DiscountPage, DiscountDescPage, EmptyPage, HomePage, MapPage} from './src/screens';
import {getData} from "./src/utils/AsyncStorage";

const Stack = createStackNavigator();
export const FavoriteContext = createContext(null);

const App = () => {
  const [favorite, setFavorite] = useState(null);
  useEffect(() => {
    getData('favorite')
      .then(data => setFavorite(data || {}))
      .catch(e => console.log(e));
  }, []);
  return (
    <FavoriteContext.Provider value={{favorite, setFavorite}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Discount" component={DiscountPage}/>
          <Stack.Screen name="DiscountDesc" component={DiscountDescPage}/>
          <Stack.Screen name="HR" component={EmptyPage}/>
          <Stack.Screen name="Health" component={EmptyPage}/>
          <Stack.Screen name="TechnicalGuide" component={EmptyPage}/>
          <Stack.Screen name="Fruits" component={EmptyPage}/>
          <Stack.Screen name="Travel" component={EmptyPage}/>
          <Stack.Screen name="EmptyPage" component={EmptyPage}/>
          <Stack.Screen name="Map" component={MapPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContext.Provider>
  );
};

export default App;
