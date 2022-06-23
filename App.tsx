import React, {createContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DiscountPage,
  DiscountDescPage,
  EmptyPage,
  HomePage,
  MapPage,
} from './src/screens';
import {getData} from './src/utils/AsyncStorage';
import {RootStackParamList} from './src/types/navigation.types';
import {IFavoriteContext} from './src/types/context.types';
import {FavoritePage} from './src/screens/FavoritePage/FavoritePage';
import {IDiscountData} from './src/types/discount.types';
import {InfoPage} from './src/screens/InfoPage/InfoPage';
import {AuthenticationPage} from './src/screens/AuthenticationPage/AuthenticationPage';
import {initialiseFirebase} from './firebase.config';

initialiseFirebase();

const Stack = createStackNavigator<RootStackParamList>();
export const FavoriteContext = createContext<IFavoriteContext | null>(null);

const App = () => {
  const [favorite, setFavorite] = useState<IDiscountData[]>([]);

  useEffect(() => {
    getData('favorite')
      .then(data => setFavorite(data || []))
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
          <Stack.Screen name="Map" component={MapPage} />
          <Stack.Screen name="Favorite" component={FavoritePage} />
          <Stack.Screen name="Info" component={InfoPage} />
          <Stack.Screen name="Authentication" component={AuthenticationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteContext.Provider>
  );
};

export default App;
