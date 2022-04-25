import {IDiscountData} from './discount.types';
import {RootStackParamList} from './navigation.types';

export type TSectionData = [] | IDiscountData[];

export type ISectionData = {
  id: string;
  engTitle: string;
  rusTitle: string;
  routeName: keyof RootStackParamList | string;
  data: TSectionData;
};

export type IPageData = {
  id: string;
  engTitle: string;
  rusTitle: string;
  routeName?: keyof RootStackParamList | string;
  icon: HTMLImageElement;
  data?: ISectionData[] | [];
};
