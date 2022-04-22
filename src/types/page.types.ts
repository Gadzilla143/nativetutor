import {IDiscountData} from './discount.types';

type TSectionData = [] | IDiscountData[];

export type ISectionData = {
  id: number;
  engTitle: string;
  rusTitle: string;
  routeName: string;
  data: TSectionData;
};

export type IPageData =
  | ISectionData
  | {
      icon: HTMLImageElement;
      data: ISectionData[] | [];
    };
