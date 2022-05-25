import {IDiscountData} from './discount.types';
import {RootStackParamList} from './navigation.types';
import {IInfoData} from './info.types';

export type TSectionData = [] | IDiscountData[] | IInfoData;

export type ISectionData = {
  id: string;
  engTitle: string;
  rusTitle: string;
  routeName: keyof RootStackParamList;
  data: TSectionData;
};

export type IPageData = {
  id: string;
  engTitle: string;
  rusTitle: string;
  routeName?: keyof RootStackParamList;
  icon: HTMLImageElement;
  data?: ISectionData[] | [];
};
