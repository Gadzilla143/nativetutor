import {IDiscountData} from './discount.types';

type TSectionData = [] | IDiscountData[];

export type ISectionData = {
  id: number;
  title: string;
  routeName: string;
  data: TSectionData;
};

export type IPageData =
  | ISectionData
  | {
      icon: HTMLImageElement;
      data: ISectionData[] | [];
    };
