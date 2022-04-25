import React, {createContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DiscountPage,
  DiscountDescPage,
  EmptyPage,
  HomePage,
} from './src/screens';
import {getData} from './src/utils/AsyncStorage';
import {RootStackParamList} from './src/types/navigation.types';
import {IFavoriteContext} from './src/types/context.types';

const Stack = createStackNavigator<RootStackParamList>();
export const FavoriteContext = createContext<IFavoriteContext | null>(null);

const App = () => {
  const [favorite, setFavorite] = useState({});

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
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Discount" component={DiscountPage} />
          <Stack.Screen name="DiscountDesc" component={DiscountDescPage} />
          <Stack.Screen name="EmptyPage" component={EmptyPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContext.Provider>
  );
};

export default App;
