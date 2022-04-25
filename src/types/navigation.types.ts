import {IDiscountData} from './discount.types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Discount: {data: IDiscountData[]};
  DiscountDesc: {itemRouteName?: string; data: IDiscountData[] | IDiscountData};
  EmptyPage: undefined;
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
