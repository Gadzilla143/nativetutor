import {IDiscountData} from './discount.types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IInfoData} from './info.types';

export type RootStackParamList = {
  Home: undefined;
  Discount: {data: IDiscountData[]};
  DiscountDesc: {data: IDiscountData};
  EmptyPage: undefined;
  Map: undefined;
  Favorite: undefined;
  Info: {data: IInfoData[]};
  Authentication: undefined;
};

type DiscountScreenRouteProp = RouteProp<RootStackParamList, 'Discount'>;

type DiscountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Discount'
>;

export type TDiscountProps = {
  route: DiscountScreenRouteProp;
  navigation: DiscountScreenNavigationProp;
};

type DiscountDescScreenRouteProp = RouteProp<
  RootStackParamList,
  'DiscountDesc'
>;

type DiscountDescScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DiscountDesc'
>;

export type TDiscountDescProps = {
  route: DiscountDescScreenRouteProp;
  navigation: DiscountDescScreenNavigationProp;
};

export type EmptyPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EmptyPage'
>;

export type HomePageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MapPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Map'
>;

export type FavoritePageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Favorite'
>;

export type InfoPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Info'
>;

type InfoPageScreenRouteProp = RouteProp<RootStackParamList, 'Info'>;

export type TInfoPageProps = {
  route: InfoPageScreenRouteProp;
  navigation: InfoPageScreenNavigationProp;
};
