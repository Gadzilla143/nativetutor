import {IDeliveryDiscountData} from './delivery.types';

type TSectionData = [] | IDeliveryDiscountData[];

export type ISectionData = {
  id: number;
  title: string;
  routeName: string;
  sectionData: TSectionData;
};

export type IPageData =
  | ISectionData
  | {
      icon: HTMLImageElement;
      topicsData: ISectionData[] | [];
    };
